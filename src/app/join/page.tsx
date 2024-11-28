import { getConfig, parseMD, parseMDInline } from '../util/configReader';
import Footer from '../components/Footer';

export default function Robot() {
  // Reads the join.yml file in /config and parses it into a JS object
  const config = getConfig('join.yml');

  return (
    <main className="flex flex-col items-center justify-between p-4 pt-8 sm:p-12 pb-0 sm:pb-0 gap-12 relative">
      <div className="max-w-4xl flex flex-col items-center markdown">
        <h1 dangerouslySetInnerHTML={parseMDInline(config.title)}></h1>
        <div
          className="text-center"
          dangerouslySetInnerHTML={parseMD(config.subtitle)}
        ></div>
      </div>
      <Footer />
    </main>
  );
}
