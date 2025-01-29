//'use client';

import HeroSection from '@/components/other/herosection';
import MainPageLayout from '@/components/other/heroImage';

export default function Home() {
  return (
    <div>
<<<<<<< HEAD
      <HeroSection />
=======
      <MainPageLayout>
        <HeroSection
          //backgroundImage="/teamphoto.jpg"
          heading="RoboRaiders"
          subheading="Team 3681"
          buttonText="Join us"
          onButtonClick={() => {}}
        />
      </MainPageLayout>
>>>>>>> 9415b64 (trying to fix hero section)
    </div>
  );
}
