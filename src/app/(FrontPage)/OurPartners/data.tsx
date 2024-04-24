import Vimeo from './img/vimeo.svg';
import Facebook from './img/facebook.svg';
import Zoom from './img/zoom.svg';
import Youtube from './img/youtube.svg';

interface SlidesJSON {
  id: number;
  thumbnail: any;
  className?: string;
}

const slides: SlidesJSON[] = [
  {
    id: 1,
    thumbnail: Vimeo,
  },
  {
    id: 2,
    thumbnail: Facebook,
  },
  {
    id: 3,
    thumbnail: Zoom,
  },
  {
    id: 4,
    thumbnail: Youtube,
  },
  {
    id: 5,
    thumbnail: Vimeo,
  },
  {
    id: 6,
    thumbnail: Facebook,
  },
]

export { slides };