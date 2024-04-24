import Banner__1 from './img/banner-1.png';
import Banner__2 from './img/banner-2.png';
import Banner__3 from './img/banner-3.png';
import Banner__4 from './img/banner-4.png';

interface SlidesJSON {
  id: number;
  thumbnail?: any;
  logo?: any;
  title: string;
  location: string;
  className?: string;
}

const slides: SlidesJSON[] = [
  {
    id: 1,
    thumbnail: Banner__1,
    title: "Asia",
    location: '12 Destinatios',
  },
  {
    id: 2,
    thumbnail: Banner__2,
    title: "Africa",
    location: '12 Destinatios',
  },
  {
    id: 3,
    thumbnail: Banner__3,
    title: "South America",
    location: '12 Destinatios',
  },
  {
    id: 4,
    thumbnail: Banner__4,
    title: "Europe",
    location: '12 Destinatios',
  },
  {
    id: 5,
    thumbnail: Banner__1,
    title: "Asia",
    location: '12 Destinatios',
  },
  {
    id: 6,
    thumbnail: Banner__2,
    title: "Europe",
    location: '12 Destinatios',
  },
]

export { slides };