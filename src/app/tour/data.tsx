    import Check from '@/images/check-circle.svg';
    import CheckCircle from './img/check-circle.svg';
    import Banner from './img/banner-1.png';

    interface ItemProps {
        id: number;
        text: string;
        icon: any,
    }

  const itinerary: ItemProps[] = [
    {
      id: 1,
      text: 'About',
      icon: Check,
    },
    {
      id: 2,
      text: 'Departure',
      icon: Check,
    },
    {
      id: 3,
      text: 'Arrival Hotel',
      icon: Check,
    },
    {
      id: 4,
      text: 'Katmandu Tour',
      icon: Check,
    },
    {
      id: 5,
      text: 'Departure',
      icon: Check,
    },
    {
      id: 6,
      text: 'Weather',
      icon: Check,
    },
    {
      id: 7,
      text: 'Map',
      icon: Check,
    },
    {
      id: 8,
      text: 'What\'s include?',
      icon: Check,
    },
    {
      id: 9,
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

export { itinerary, slides, includes, bookings};