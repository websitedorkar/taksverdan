import Banner__1 from './img/banner-1.png';
import Banner__2 from './img/banner-2.png';
import Banner__3 from './img/banner-3.jpg';
import Banner__4 from './img/banner-4.jpg';

interface MapJSON {
  id: number;
  slug?: string;
  thumbnail?: any;
  title: string;
  location: string;
}

const maps: MapJSON[] = [
  {
    id: 1,
    slug: 'lake-house-pier',
    thumbnail: Banner__1,
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 2,
    thumbnail: Banner__2,
    slug: 'lake-house-pier',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 3,
    thumbnail: Banner__3,
    slug: 'lake-house-pier',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 4,
    thumbnail: Banner__4,
    slug: 'lake-house-pier',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 5,
    thumbnail: Banner__1,
    slug: 'lake-house-pier',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 6,
    thumbnail: Banner__2,
    slug: 'lake-house-pier',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
]

export { maps };