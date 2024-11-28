import { getConfig } from '../util/configReader';

const Footer = () => {
  const { links } = getConfig('footer.yml');
  const globalConfig = getConfig('global.yml');
  return (
    <div className="w-full text-center mt-12 mb-4">
      <div className="w-full flex flex-wrap items-center justify-center my-6 gap-8 sm:gap-12">
        <a
          href={links.github}
          target="_blank"
          className="w-12 h-12 scale-100 hover:scale-110 transition-transform duration-300"
          rel="noreferrer"
        >
          <img
            className="w-full h-full dark:hidden"
            alt="Github Logo"
            src="/imgs/icons/github-mark.svg"
          ></img>
          <img
            className="w-full h-full hidden dark:block"
            alt="Github Logo"
            src="/imgs/icons/github-mark-white.svg"
          ></img>
        </a>
        <a
          href={links.instagram}
          target="_blank"
          className="w-12 h-12 scale-100 hover:scale-110 transition-transform duration-300"
          rel="noreferrer"
        >
          <img
            className="w-full h-full"
            alt="Instagram Logo"
            src="/imgs/icons/instagram.svg"
          ></img>
        </a>
        <a
          href={links.facebook}
          target="_blank"
          className="w-12 h-12 scale-100 hover:scale-110 transition-transform duration-300"
          rel="noreferrer"
        >
          <img
            className="w-full h-full"
            alt="Facebook Logo"
            src="/imgs/icons/Facebook_Logo_Primary.svg"
          ></img>
        </a>
        <a
          href={links.blueAlliance}
          target="_blank"
          className="w-12 h-12 scale-100 hover:scale-110 transition-transform duration-300"
          rel="noreferrer"
        >
          <img
            className="w-full h-full"
            alt="Blue Alliance Logo"
            src="/imgs/icons/blue_alliance.svg"
          ></img>
        </a>
        <a
          href={`mailto:${links.email}`}
          target="_blank"
          className="w-12 h-12 scale-100 hover:scale-110 transition-transform duration-300"
          rel="noreferrer"
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135H149Zm331-295L149-653v424h662v-424L480-430Zm0-83 327-218H154l326 218ZM149-653v-78 502-424Z" />
          </svg>
        </a>
        <a
          href={globalConfig.donation_link}
          target="_blank"
          className="w-12 h-12 scale-100 hover:scale-110 transition-transform duration-300"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
            fill="currentColor"
          >
            <path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z" />
          </svg>
        </a>
      </div>
      <span>RoboRaiders, FRC Team 3681, a FIRST® WA Team</span>
    </div>
  );
};

export default Footer;
