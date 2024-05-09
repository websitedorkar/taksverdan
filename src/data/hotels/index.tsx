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
  title: string;
  ratings: string;
  total_ratings: string;
  className?: string;
}

const hotels: ItemJSON[] = [
  {
    id: 1,
    thumbnail: Banner__1,
    title: "Hotel Name",
    ratings: '5,0',
    total_ratings: '1k+',
  },
  {
    id: 2,
    thumbnail: Banner__2,
    title: "Hotel Name",
    ratings: '5,0',
    total_ratings: '1k+',
  },
  {
    id: 3,
    thumbnail: Banner__3,
    title: "Hotel Name",
    ratings: '5,0',
    total_ratings: '1k+',
  },
  {
    id: 4,
    thumbnail: Banner__4,
    title: "Hotel Name",
    ratings: '5,0',
    total_ratings: '1k+',
  },
  {
    id: 5,
    thumbnail: Banner__5,
    title: "Hotel Name",
    ratings: '5,0',
    total_ratings: '1k+',
  },
  {
    id: 6,
    thumbnail: Banner__6,
    title: "Hotel Name",
    ratings: '5,0',
    total_ratings: '1k+',
  },
  {
    id: 7,
    thumbnail: Banner__7,
    title: "Hotel Name",
    ratings: '5,0',
    total_ratings: '1k+',
  },
  {
    id: 8,
    thumbnail: Banner__8,
    title: "Hotel Name",
    ratings: '5,0',
    total_ratings: '1k+',
  },
  {
    id: 9,
    thumbnail: Banner__1,
    title: "Hotel Name",
    ratings: '5,0',
    total_ratings: '1k+',
  },
  {
    id: 10,
    thumbnail: Banner__2,
    title: "Hotel Name",
    ratings: '5,0',
    total_ratings: '1k+',
  },
  {
    id: 11,
    thumbnail: Banner__3,
    title: "Hotel Name",
    ratings: '5,0',
    total_ratings: '1k+',
  },
  {
    id: 12,
    thumbnail: Banner__4,
    title: "Hotel Name",
    ratings: '5,0',
    total_ratings: '1k+',
  },
]

export { hotels };