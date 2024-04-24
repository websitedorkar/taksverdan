import Logo from './img/logo.png';
import Banner__1 from './img/grid-banner-1.jpg';
import Banner__2 from './img/grid-banner-2.jpg';

interface ColumnJSON {
  id: number;
  thumbnail?: any;
  logo?: any;
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
    logo: Logo,
    title: "Top best <br />Destinations",
    description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy when an unknown</p>',
    button_label: 'About Us',
    button_url: '#',
  },
  {
    id: 2,
    thumbnail: Banner__2,
    logo: Logo,
    title: "Talk with <br />an expert",
    description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy when an unknown</p>',
    button_label: 'Contact Us',
    button_url: '#',
  },
]

export { columns };