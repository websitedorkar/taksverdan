import Banner from './img/banner-1.png';

interface SlidesJSON {
  id: number;
  className?: string;
  thumb: any,
}

const slides: SlidesJSON[] = [
  {
    id: 1,
      thumb: Banner,
  },
  {
    id: 2,
    thumb: Banner,
  },
  {
    id: 3,
    thumb: Banner,
  },
  {
    id: 4,
    thumb: Banner,
  },
  {
    id: 5,
      thumb: Banner,
  },
  {
    id: 6,
    thumb: Banner,
  },
]

export { slides };