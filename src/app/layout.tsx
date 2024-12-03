import './globals.css';
import type { Metadata } from 'next';
import { Mada } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import NavbarItem from './components/navbar/NavbarItem';
import NavbarDropdown from './components/navbar/NavbarDropdown';
import NavbarDropdownItem from './components/navbar/NavbarDropdownItem';
import AppearanceToggle from './components/navbar/AppearanceToggle';
import { getConfig } from './util/configReader';

const font = Mada({ subsets: ['latin'] });

const globalConfig = getConfig('global.yml');

export const metadata: Metadata = {
  title: globalConfig.website_title,
  description: globalConfig.website_description,
  icons: globalConfig.website_icon,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutConfig = getConfig('about.yml');
  return (
    <html lang="en" className="dark">
      <body
        className={ () => {
          alert(font);
          return (
          font.className +
          ' min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text'
        )}}
      >
        <Navbar>
          <NavbarItem title="Home" href="/"></NavbarItem>
          <NavbarDropdown title="About" href="/about" pages="/about">
            {aboutConfig.sections.map(section => (
              <NavbarDropdownItem
                title={section.title}
                href={'/about#' + section.id}
                key={section.id}
              ></NavbarDropdownItem>
            ))}
          </NavbarDropdown>
          <NavbarItem title="Sponsors" href="/sponsors"></NavbarItem>
          <NavbarDropdown title="Resources" pages={['/robot', '/team']}>
            <NavbarDropdownItem
              title="Our Robot"
              href="/robot"
            ></NavbarDropdownItem>
            <NavbarDropdownItem
              title="Our Team"
              href="/team"
            ></NavbarDropdownItem>
          </NavbarDropdown>
          <NavbarItem title="Join" href="/join"></NavbarItem>
          <AppearanceToggle />
        </Navbar>
        {children}
      </body>
    </html>
  );
}
