import Navbar from '@/components/other/navbar';
import { Provider } from '@/components/ui/provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/other/footer';
import { TurnstileContext } from 'turnstile-next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RoboRaiders 3681',
  description: 'Robotics team from Nathan Hale High School in Seattle, WA',
  keywords: [
    'roboraiders',
    'robotics',
    'nathan hale',
    'seattle',
    'frc',
    'first',
    'team 3681',
    'team3681',
    '3681',
    'first robotics',
    'robo raiders',
    'robotics team',
    'robot',
    'robots',
    'robotic',
    'engineering',
    'stem',
    'science',
    'technology',
    'math',
    'steam',
    'competition',
    'competitions',
    'frc team',
    'first robotics competition',
    'first robotics competition team',
    'first robotics team',
    'first robotics team 3681',
    'first robotics team3681',
    'first robotics team 3681 roboraiders',
    'first robotics team3681 roboraiders',
    'first robotics team3681 robo raiders',
    'first robotics team 3681 robo-raiders',
    'first robotics team3681 robo-raiders',
    'nathan hale robotics',
    'nathan hale high school robotics',
    'nathan hale high school robotics team',
    'nathan hale high school robotics team 3681',
    'nhhs robotics',
    'nhhs robotics team',
    'nhhs robotics team 3681',
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="RoboRaiders 3681" />
      </head>
      <body suppressHydrationWarning>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
        <TurnstileContext />
      </body>
    </html>
  );
}
