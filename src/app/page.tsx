import React from 'react';
// import { EmblaCarousel } from './components/EmblaCarousel';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import { getConfig, parseMDInline } from './util/configReader';

const bgimgStyle: React.CSSProperties = {
  backgroundImage: "url('/teamphoto.jpg')",
};

export default function Home() {
  const config = getConfig('index.yml');
  // const globalConfig = getConfig('global.yml');

  return (
    <main className="flex flex-col items-center justify-between p-0 pt-0 sm:p-0 pb-0 sm:pb-0 relative">
      <div
        className="w-full bg-center bg-cover bg-no-repeat"
        style={bgimgStyle}
      >
        <div className="flex items-center justify-center w-full h-[100vh] flex-col">
          <img
            className="w-64 shadow"
            alt="RoboRaiders logo"
            src="/logo.svg"
          ></img>
          <h1
            className="text-5xl font-bold text-center sm:mb-6 mt-12 shadow-lg"
            dangerouslySetInnerHTML={parseMDInline(config.title)}
          ></h1>
        </div>
      </div>
      {
        //im going to add a section for an about paragraph
      }
      <p
        className="max-w-3xl lg:max-w-4xl text-center sm:text-lg mb-10"
        dangerouslySetInnerHTML={parseMDInline(config.about)}
      ></p>
      <ImageCarousel pictures={config.pictures} autoScroll></ImageCarousel>
      {/*<div className="flex flex-col items-center mt-14 mb-8 px-4 py-8 gap-4 bg-light-background dark:bg-dark-background rounded-lg box-section-shadow">
        <p
          className="markdown max-w-3xl text-center sm:text-lg"
          dangerouslySetInnerHTML={parseMDInline(config.plz_donate)}
        ></p>
        <a
          href={globalConfig.donation_link}
          className="bg-light-primary dark:bg-dark-primary text-dark-text font-bold py-2 px-4 rounded hover:scale-105 transition"
        >
          Donate
        </a>
      </div>*/}

      <Footer />
    </main>
  );
}
