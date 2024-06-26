    import Check from '@/images/check-circle.svg';
    import CheckCircle from './img/check-circle.svg';
    import Banner__1 from './img/banner-1.png';
    import Banner__2 from './img/banner-2.png';
    import Banner__3 from './img/banner-3.jpg';
    import Banner__4 from './img/banner-4.jpg';
    

    interface ItemProps {
        id: number;
        text: string;
        url: string;
        icon: any,
    }

  const itinerary: ItemProps[] = [
    {
      id: 1,
      url: 'section--about',
      text: 'About',
      icon: Check,
    },
    {
      id: 2,
      url: 'section--departure',
      text: 'Departure',
      icon: Check,
    },
    {
      id: 3,
      url: 'section--arrival-hotel',
      text: 'Arrival Hotel',
      icon: Check,
    },
    {
      id: 4,
      url: 'section--katmandu-tour',
      text: 'Katmandu Tour',
      icon: Check,
    },
    {
      id: 5,
      url: 'section--departure-2',
      text: 'Departure',
      icon: Check,
    },
    {
      id: 6,
      url: 'section--weather',
      text: 'Weather',
      icon: Check,
    },
    {
      id: 7,
      url: 'section--map',
      text: 'Map',
      icon: Check,
    },
    {
      id: 8,
      url: 'section--whats-include',
      text: 'What\'s include?',
      icon: Check,
    },
    {
      id: 9,
      url: 'section--price-booking',
      text: 'Price & Booking',
      icon: Check,
    },
  ]

  interface includesProps {
    id: number;
    text: string;
    icon: any,
  }

  const includes: includesProps[] = [
    {
      id: 1,
      text: 'Flight Oslo – Kathmandu return with Qatar Airways',
      icon: CheckCircle,
    },
    {
      id: 2,
      text: 'Flight tickets Kathmandu – Paro return with Druk Air',
      icon: CheckCircle,
    },
    {
      id: 3,
      text: 'Flight Oslo – Kathmandu return with Qatar Airways',
      icon: CheckCircle,
    },
    {
      id: 4,
      text: 'Flight tickets Kathmandu – Paro return with Druk Air',
      icon: CheckCircle,
    },
    {
      id: 5,
      text: 'Flight Oslo – Kathmandu return with Qatar Airways',
      icon: CheckCircle,
    },
    {
      id: 6,
      text: 'Flight tickets Kathmandu – Paro return with Druk Air',
      icon: CheckCircle,
    },
    {
      id: 7,
      text: 'Flight Oslo – Kathmandu return with Qatar Airways',
      icon: CheckCircle,
    },
    {
      id: 8,
      text: 'Flight tickets Kathmandu – Paro return with Druk Air',
      icon: CheckCircle,
    },
  ]

  interface bookingProps {
    id: number;
    text: string;
    price: string;
    icon: any,
  }

  const bookings: bookingProps[] = [
    {
      id: 1,
      text: 'Per Person in a Double Room',
      price: 'NOK 46,790',
      icon: CheckCircle,
    },
    {
      id: 2,
      text: 'Single Room Kroner',
      price: 'NOK 46,790',
      icon: CheckCircle,
    },
  ]


interface SlidesJSON {
  id: number;
  className?: string;
  thumb: any,
}

const slides: SlidesJSON[] = [
  {
    id: 1,
    thumb: Banner__1,
  },
  {
    id: 2,
    thumb: Banner__1,
  },
  {
    id: 3,
    thumb: Banner__1,
  },
  {
    id: 4,
    thumb: Banner__1,
  },
  {
    id: 5,
    thumb: Banner__1,
  },
  {
    id: 6,
    thumb: Banner__1,
  },
]

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

export { itinerary, slides, includes, bookings, maps};