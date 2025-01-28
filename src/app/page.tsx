'use client';

import HeroSection from '@/components/other/herosection';

export default function Home() {
  return (
    <div>
      <HeroSection
        backgroundImage="/teamphoto.jpg"
        heading="RoboRaiders"
        subheading="Team 3681"
        buttonText="Join us"
        onButtonClick={() => {}}
      />
    </div>
  );
}
