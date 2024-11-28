import Link from 'next/link';
import { getConfig, parseMD, parseMDInline } from '../util/configReader';
import Footer from '../components/Footer';

export default function About() {
  // Reads the about.yml file in /config and parses it into a JS object
  const config = getConfig('about.yml');

  return (
    <main className="flex flex-col items-center justify-between p-4 pt-8 sm:p-12 pb-0 sm:pb-0 relative">
      <div className="flex flex-col gap-10 items-center justify-center lg:grid lg:grid-cols-[1fr_4fr_1fr] lg:items-start lg:justify-end">
        <div className="lg:mt-10">
          <h2 className="text-2xl mb-2">Jump To:</h2>
          <ul className="markdown list-disc ml-4">
            {config.sections.map((section: any) => (
              <li key={section.id}>
                <Link
                  href={`/about#` + section.id}
                  dangerouslySetInnerHTML={parseMDInline(section.title)}
                ></Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-12">
          {config.sections.map((section: any) => (
            <div
              id={section.id}
              className="max-w-5xl flex flex-col items-center"
              key={section.id}
            >
              <h1
                className="text-4xl mb-6 markdown"
                dangerouslySetInnerHTML={parseMDInline(section.title)}
              ></h1>
              <div
                className="markdown"
                dangerouslySetInnerHTML={parseMD(section.content)}
              ></div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <Footer />
    </main>
  );
}
