import { getConfig, parseMD, parseMDInline } from '../util/configReader';
import Footer from '../components/Footer';

export default function Team() {
  // Reads the team.yml file in /config and parses it into a JS object
  const config = getConfig('team.yml');

  return (
    <main className="flex flex-col items-center justify-between p-4 pt-8 sm:p-12 pb-0 sm:pb-0 gap-12 relative">
      <div className="max-w-4xl flex flex-col items-center markdown">
        <h1 dangerouslySetInnerHTML={parseMDInline(config.title)}></h1>
        <div
          className="text-center"
          dangerouslySetInnerHTML={parseMD(config.subtitle)}
        ></div>
      </div>
      {config.sections.map(section => (
        <div
          id={section.id}
          className="max-w-4xl flex flex-col items-center markdown"
          key={section.id}
        >
          <h1 dangerouslySetInnerHTML={parseMDInline(section.title)}></h1>
          <img
            src={section.picture}
            alt={section.title}
            className="max-w-4xl w-full"
          ></img>
        </div>
      ))}
      <Footer />
    </main>
  );
}
