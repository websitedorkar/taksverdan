import Logo from './img/logo.png';
import Banner__1 from './img/grid-banner-1.png';

interface ColumnJSON {
  id: number;
  thumbnail?: any;
  title: string;
  description: string;
  className?: string;
  button_label?: string;
  button_url?: string;
}

const columns: ColumnJSON[] = [
  {
    id: 1,
    thumbnail: Banner__1,
    title: "India",
    description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy when an unknown</p>',
    button_label: 'Browse Destinations',
    button_url: '#',
  },
]

export { columns };