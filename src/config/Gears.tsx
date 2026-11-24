import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';
import Phone from '@/components/svgs/devices/Phone';

export const devices = [
  {
    name: 'HP Laptop (Windows 11)',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'External Full HD / IPS Monitor',
    icon: <Monitor className="size-4" />,
  },
  {
    name: 'Wireless Ergonomic Mouse',
    icon: <Mouse className="size-4" />,
  },
  {
    name: 'Android Smartphone',
    icon: <Phone className="size-4" />,
  },
];

export const webExtensions = [
  { name: 'uBlock Origin', href: 'https://ublockorigin.com/' },
  {
    name: 'React Developer Tools',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
  },
  { name: 'Wappalyzer', href: 'https://www.wappalyzer.com/' },
  {
    name: 'ColorZilla',
    href: 'https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en',
  },
  { name: 'daily.dev', href: 'https://daily.dev/' },
  { name: 'Grammarly', href: 'https://www.grammarly.com/' },
];

export const software = [
  { name: 'PyCharm', href: 'https://www.jetbrains.com/pycharm/' },
  { name: 'Visual Studio Code', href: 'https://code.visualstudio.com/' },
  { name: 'Git for Windows', href: 'https://gitforwindows.org/' },
  { name: 'Docker Desktop', href: 'https://www.docker.com/products/docker-desktop/' },
  { name: 'PostgreSQL & pgAdmin', href: 'https://www.pgadmin.org/' },
  { name: 'Postman', href: 'https://www.postman.com/' },
  { name: 'Windows Terminal', href: 'https://aka.ms/terminal' },
  { name: 'VLC Media Player', href: 'https://www.videolan.org/vlc/' },
];