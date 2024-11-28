// Auto-generated TypeScript interfaces from YAML config files

// Generated at: 2024-11-28T00:17:16.320Z

interface IGlobalConfig {
  website_title: string;
  website_description: string;
  website_icon: string;
  donation_link: string;
}

interface IFooterConfigLinks {
  github: string;
  instagram: string;
  twitter: string;
  facebook: string;
  youtube: string;
  blueAlliance: string;
  email: string;
}

interface IFooterConfig {
  links: IFooterConfigLinks;
}

interface IIndexConfigPicturesItem {
  desc: string;
  url: string;
}

interface IIndexConfig {
  title: string;
  about: string;
  pictures: IIndexConfigPicturesItem[];
  plz_donate: string;
}

interface IAboutConfigSectionsItem {
  id: string;
  title: string;
  content: string;
}

interface IAboutConfig {
  sections: IAboutConfigSectionsItem[];
}

interface ISponsorsConfigSponsorsItem {
  name: string;
  tier: string;
  url: string;
  logo: string;
  invert_dark: boolean;
}

interface ISponsorsConfigTiersItem {
  name: string;
  size: number;
}

interface ISponsorsConfig {
  title: string;
  subtitle: string;
  confetti: boolean;
  sponsors: ISponsorsConfigSponsorsItem[];
  tiers: ISponsorsConfigTiersItem[];
}

interface IRobotConfigSectionsItemPicturesItem {
  desc: string;
  url: string;
}

interface IRobotConfigSectionsItem {
  id: string;
  title: string;
  pictures: IRobotConfigSectionsItemPicturesItem[];
}

interface IRobotConfig {
  title: string;
  subtitle: string;
  sections: IRobotConfigSectionsItem[];
}

interface IRedirectsConfigRedirectsItem {
  source: string;
  destination: string;
}

interface IRedirectsConfig {
  redirects: IRedirectsConfigRedirectsItem[];
}

interface IJoinConfig {
  title: string;
  subtitle: string;
}

interface ITeamConfigSectionsItem {
  id: string;
  title: string;
  picture: string;
}

interface ITeamConfig {
  title: string;
  subtitle: string;
  sections: ITeamConfigSectionsItem[];
}

interface ConfigTypeMap {
  'global.yml': IGlobalConfig;
  'footer.yml': IFooterConfig;
  'index.yml': IIndexConfig;
  'about.yml': IAboutConfig;
  'sponsors.yml': ISponsorsConfig;
  'robot.yml': IRobotConfig;
  'redirects.yml': IRedirectsConfig;
  'join.yml': IJoinConfig;
  'team.yml': ITeamConfig;
}