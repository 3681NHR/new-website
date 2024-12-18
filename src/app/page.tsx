import { EmblaCarousel } from './components/EmblaCarousel';
import Footer from './components/Footer';
{
  /*import ImageCarousel from './components/ImageCarousel';*/
}
import { getConfig, parseMDInline } from './util/configReader';

export default function Home() {
  const config = getConfig('index.yml');
  const globalConfig = getConfig('global.yml');

  return (
    <main className="flex flex-col items-center justify-between p-4 pt-8 sm:p-12 pb-0 sm:pb-0 relative">
      <div className="mb-8">
        <img
          className="w-32 sm:w-64"
          alt="RoboRaiders logo"
          src="/logo.svg"
        ></img>
      </div>
      <h1
        className="text-2xl sm:text-5xl font-bold text-center mb-4 sm:mb-6"
        dangerouslySetInnerHTML={parseMDInline(config.title)}
      ></h1>
      <p
        className="max-w-3xl lg:max-w-4xl text-center sm:text-lg mb-10"
        dangerouslySetInnerHTML={parseMDInline(config.about)}
      ></p>

      {/*<ImageCarousel pictures={config.pictures} autoScroll></ImageCarousel>*/}
      <EmblaCarousel></EmblaCarousel>

      <div className="flex flex-col items-center mt-14 mb-8 px-4 py-8 gap-4 bg-light-background dark:bg-dark-background rounded-lg box-section-shadow">
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
      </div>

      <Footer />
    </main>
  );
}
