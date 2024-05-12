import Banner__1 from './img/banner-1.png';
import Banner__2 from './img/banner-2.png';
import Banner__3 from './img/banner-3.png';
import Banner__4 from './img/banner-4.png';

interface ItemJSON {
  id: number;
  thumbnail?: any;
  url?: string;
  title: string;
  date: string;
  className?: string;
}

const blogs: ItemJSON[] = [
  {
    id: 1,
    thumbnail: Banner__1,
    url: 'blog-post',
    title: "Post Article Title Name",
    date: 'Apr 16, 2024',
  },
  {
    id: 2,
    thumbnail: Banner__2,
    url: 'blog-post',
    title: "Post Article Title Name",
    date: 'Apr 16, 2024',
  },
  {
    id: 3,
    thumbnail: Banner__3,
    url: 'blog-post',
    title: "Post Article Title Name",
    date: 'Apr 16, 2024',
  },
  {
    id: 4,
    thumbnail: Banner__4,
    url: 'blog-post',
    title: "Post Article Title Name",
    date: 'Apr 16, 2024',
  },
  {
    id: 5,
    thumbnail: Banner__1,
    url: 'blog-post',
    title: "Post Article Title Name",
    date: 'Apr 16, 2024',
  },
  {
    id: 6,
    thumbnail: Banner__2,
    url: 'blog-post',
    title: "Post Article Title Name",
    date: '12 Destinatios',
  },
]

export { blogs };