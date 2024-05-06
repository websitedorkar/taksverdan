import Banner__1 from './img/banner-1.png';
import Banner__2 from './img/banner-2.png';

interface MapJSON {
  id: number;
  thumbnail?: any;
  title: string;
  location: string;
}

const maps: MapJSON[] = [
  {
    id: 1,
    thumbnail: Banner__1,
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 2,
    thumbnail: Banner__2,
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 3,
    thumbnail: Banner__1,
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 4,
    thumbnail: Banner__2,
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 5,
    thumbnail: Banner__1,
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 6,
    thumbnail: Banner__2,
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
]

export { maps };