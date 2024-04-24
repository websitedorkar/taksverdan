import RGF from './img/rgf.png';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram   } from "react-icons/fa";

interface BaseBlock {
  id: number;
  type: string;
  heading?: string;
  className?: string;
}

interface AboutBlock extends BaseBlock {
  type: 'about';
  content?: string;
  logo?: any;
}

interface LinkListBlock extends BaseBlock {
  type: 'linklist';
  list: { 
    id: number;
    name: string; 
    slug: string 
  }[];
}

interface SocialBlock extends BaseBlock {
  type: 'social';
  list: { 
    id: number;
    icon?: JSX.Element, 
    slug: string, 
  }[];
}

type BlocksJSON = AboutBlock | LinkListBlock | SocialBlock;

const blocks: BlocksJSON[] = [
  {
    id: 1,
    type: "about",
    heading: "Travel Guarantee",
    content: "Lorem Ipsum is simply dummy text of the printing and type setting industry lorem ",
    logo: RGF,
  },
  {
    id: 2,
    type: 'linklist',
    heading: "Company",
    list: [
      {
        id: 1,
        name: "Our Story",
        slug: '/our-story',
      },
      {
        id: 2,
        name: "Faq",
        slug: '/faq',
      },
      {
        id: 3,
        name: "Why Us",
        slug: '/why-us',
      },
      {
        id: 4,
        name: "Contact Us",
        slug: '/contact-us',
      },
    ]
  },
  {
    id: 3,
    type: 'linklist',
    heading: "Resources",
    list: [
      {
        id: 1,
        name: "Trending",
        slug: '/trending',
      },
      {
        id: 2,
        name: "Destinations",
        slug: '/destinations',
      },
      {
        id: 3,
        name: "Experiences",
        slug: '/Experiences',
      },
      {
        id: 4,
        name: "Articles",
        slug: '/articles',
      },
    ]
  },
  {
    id: 4, // Unique ID for this block
    type: 'social',
    heading: "Follow Us",
    list: [
      {
        id: 1,
        icon: <FaFacebookF />,
        slug: '#facebook'
      },
      {
        id: 2,
        icon: <FaInstagram />,
        slug: '#instagram'
      },
      {
        id: 3,
        icon: <FaTwitter />,
        slug: '#twitter'
      },
      {
        id: 4,
        icon: <FaLinkedinIn />,
        slug: '#linkedin'
      },
    ],
  },
];


export { blocks };
