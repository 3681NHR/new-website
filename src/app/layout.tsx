import './globals.css';
import type { Metadata } from 'next';
import { getConfig } from './util/configReader';

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
  //const aboutConfig = getConfig('about.yml');
  return <div>{children}</div>;
}
