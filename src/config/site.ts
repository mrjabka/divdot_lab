export type HomeItem = {
  label: string;
  href?: string;
  linkLabel?: string;
  external?: boolean;
  prefix?: string;
};
export type HomeSection = {
  title: string;
  items?: HomeItem[];
  volumes?: {
    include?: number[];
    exclude?: number[];
    sort?: "asc" | "desc";
    showEmpty?: boolean;
  };
};
export type SiteConfig = {
  name: string;
  description: string;
  homeAsciiArt: string;
  homeSections: HomeSection[];
};
export const siteConfig: SiteConfig = {
  name: "divdot",
  description: "Biotechnology Research Philes",
  homeAsciiArt: `▓█████▄  ██▓ ██▒   █▓▓█████▄  ▒█████  ▄▄▄█████▓
▒██▀ ██▌▓██▒▓██░   █▒▒██▀ ██▌▒██▒  ██▒▓  ██▒ ▓▒
░██   █▌▒██▒ ▓██  █▒░░██   █▌▒██░  ██▒▒ ▓██░ ▒░
░▓█▄   ▌░██░  ▒██ █░░░▓█▄   ▌▒██   ██░░ ▓██▓ ░
░▒████▓ ░██░   ▒▀█░  ░▒████▓ ░ ████▓▒░  ▒██▒ ░
 ▒▒▓  ▒ ░▓     ░ ▐░   ▒▒▓  ▒ ░ ▒░▒░▒░   ▒ ░░
 ░ ▒  ▒  ▒ ░   ░ ░░   ░ ▒  ▒   ░ ▒ ▒░     ░
 ░ ░  ░  ▒ ░     ░░   ░ ░  ░ ░ ░ ░ ▒    ░
   ░     ░        ░     ░         ░ ░
 ░               ░    ░`,
  homeSections: [
    {
      title: "Hi, I'm divdot!",
      items: [
        {
          label: "Biotechnology enthusiast. Russian Red Cross volunteer."
        },
        {
          label: "Researcher @cspfmba",
          linkLabel: "@cspfmba",
          href: "https://www.cspfmba.ru/",
          external: true
        }
      ]
    },
    {
      title: "Philes",
      volumes: {
        sort: "asc",
        showEmpty: false
      }
    },
    {
      title: "Research",
      items: [
        { label: "Vascular growth stimulation" },
        { label: "Calcium, Iron and Silicon nanomaterials" },
        { label: "Au@Fe corsatellites" },
        { label: "Laser ablation in liquids" }
      ]
    },
    {
      title: "Contact",
      items: [
        { label: "anikeew.sk@divdot.ru" },
        {
          label: "tg @divdot",
          href: "https://t.me/divdot",
          external: true
        }
      ]
    }
  ]
};
 
