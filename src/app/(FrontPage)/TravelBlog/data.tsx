import Banner__1 from './img/banner-1.png';
import Banner__2 from './img/banner-2.png';
import Banner__3 from './img/banner-3.png';
import Banner__4 from './img/banner-4.png';

interface SlidesJSON {
  id: number;
  thumbnail?: any;
  logo?: any;
  title: string;
  date: string;
  className?: string;
}

const slides: SlidesJSON[] = [
  {
    id: 1,
    thumbnail: Banner__1,
    title: "Post Article Title Name",
    date: 'Apr 16, 2024',
  },
  {
    id: 2,
    thumbnail: Banner__2,
    title: "Post Article Title Name",
    date: 'Apr 16, 2024',
  },
  {
    id: 3,
    thumbnail: Banner__3,
    title: "Post Article Title Name",
    date: 'Apr 16, 2024',
  },
  {
    id: 4,
    thumbnail: Banner__4,
    title: "Post Article Title Name",
    date: 'Apr 16, 2024',
  },
  {
    id: 5,
    thumbnail: Banner__1,
    title: "Post Article Title Name",
    date: 'Apr 16, 2024',
  },
  {
    id: 6,
    thumbnail: Banner__2,
    title: "Post Article Title Name",
    date: '12 Destinatios',
  },
]

export { slides };