import { getConfig } from '../util/configReader';
import { Github, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const { links } = getConfig('footer.yml');
  // const globalConfig = getConfig('global.yml');
  return (
    <div className="flex flex-row w-full text-center mt-12 mb-4">
      <div className="w-1/2 flex flex-col my-auto">
        <span>© RoboRaiders, FRC Team 3681, a FIRST® WA Team</span>
        <br></br>
        <span>Logo courtesy of Sebastian Mulligan</span>
      </div>
      <div className="w-1/2">
        <div className="w-full flex flex-wrap items-center justify-center my-6 gap-8 sm:gap-12">
          <a
            href={links.github}
            target="_blank"
            className="w-12 h-12 scale-100 hover:scale-110 transition-transform duration-300"
            rel="noreferrer"
          >
            <Github color="black" size={48} className="dark:hidden" />
            <Github color="white" size={48} className="hidden dark:block" />
          </a>
          <a
            href={links.instagram}
            target="_blank"
            className="w-12 h-12 scale-100 hover:scale-110 transition-transform duration-300"
            rel="noreferrer"
          >
            <Instagram color="black" size={48} className="dark:hidden" />
            <Instagram color="white" size={48} className="hidden dark:block" />
          </a>
          {/*<a
          href={links.facebook}
          target="_blank"
          className="w-12 h-12 scale-100 hover:scale-110 transition-transform duration-300"
          rel="noreferrer"
        >
          <Facebook color="black" size={48} className="dark:hidden" />
          <Facebook color="white" size={48} className="hidden dark:block" />
          </a>*/}
          <a
            href={links.blueAlliance}
            target="_blank"
            className="w-12 h-12 scale-100 hover:scale-110 transition-transform duration-300"
            rel="noreferrer"
          >
            <img
              className="w-full h-full"
              alt="Blue Alliance Logo"
              src="/bluealliance.svg"
            ></img>
          </a>
          <a
            href={`mailto:${links.email}`}
            target="_blank"
            className="w-12 h-12 scale-100 hover:scale-110 transition-transform duration-300"
            rel="noreferrer"
          >
            <Mail color="black" size={48} className="dark:hidden" />
            <Mail color="white" size={48} className="hidden dark:block" />
          </a>
          {/*<a
          href={globalConfig.donation_link}
          target="_blank"
          className="w-12 h-12 scale-100 hover:scale-110 transition-transform duration-300"
          rel="noreferrer"
        >
          <HandCoins color="black" size={48} className="dark:hidden" />
          <HandCoins color="white" size={48} className="hidden dark:block" />
        </a>*/}
        </div>
      </div>
    </div>
  );
};

export default Footer;
