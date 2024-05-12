import Banner__1 from './img/banner-1.png';
import Banner__2 from './img/banner-2.png';
import Banner__3 from './img/banner-3.png';
import Banner__4 from './img/banner-4.png';
import Banner__5 from './img/banner-5.png';
import Banner__6 from './img/banner-6.png';
import Banner__7 from './img/banner-7.png';
import Banner__8 from './img/banner-8.png';


interface ItemJSON {
  id: number;
  thumbnail?: any;
  logo?: any;
  title: string;
  location: string;
  url?: string;
  className?: string;
}

const tours: ItemJSON[] = [
  {
    id: 1,
    thumbnail: Banner__1,
    url: 'lake-house-url',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 2,
    thumbnail: Banner__2,
    url: 'lake-house-url',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 3,
    thumbnail: Banner__3,
    url: 'lake-house-url',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 4,
    thumbnail: Banner__4,
    url: 'lake-house-url',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 5,
    thumbnail: Banner__5,
    url: 'lake-house-url',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 6,
    thumbnail: Banner__6,
    url: 'lake-house-url',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 7,
    thumbnail: Banner__7,
    url: 'lake-house-url',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 8,
    thumbnail: Banner__8,
    url: 'lake-house-url',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 9,
    thumbnail: Banner__1,
    url: 'lake-house-url',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 10,
    thumbnail: Banner__2,
    url: 'lake-house-url',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 11,
    thumbnail: Banner__3,
    url: 'lake-house-url',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
  {
    id: 12,
    thumbnail: Banner__4,
    url: 'lake-house-url',
    title: "Lakehouse Pier",
    location: 'India, Bali',
  },
]

export { tours };