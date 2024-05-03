import Banner from './img/hero-bg.jpg';

interface SlidesJSON {
  id: number;
  content: string;
  className?: string;
  thumb: any,
}

const slides: SlidesJSON[] = [
  {
    id: 1,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.',
      thumb: Banner,
  },
  {
    id: 2,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.',
    thumb: Banner,
  },
  {
    id: 3,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.',
    thumb: Banner,
  },
  {
    id: 4,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.',
    thumb: Banner,
  },
  {
    id: 5,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.',
      thumb: Banner,
  },
  {
    id: 6,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.',
    thumb: Banner,
  },
]

interface LocationJSON {
  id: number;
  value: string;
  label: string;
}
const locations: LocationJSON[] = [
  {
    id: 1,
    value: 'tour-1',
    label: 'Tour 1',
  },
  {
    id: 2,
    value: 'tour-2',
    label: 'Tour 2',
  },
  {
    id: 3,
    value: 'tour-3',
    label: 'Tour 3',
  },
  {
    id: 4,
    value: 'tour-4',
    label: 'Tour 4',
  },
  {
    id: 5,
    value: 'tour-5',
    label: 'Tour 5',
  },
  {
    id: 6,
    value: 'tour-6',
    label: 'Tour 6',
  },
]

interface ToursJSON {
  id: number;
  value: string;
  label: string;
}
const tours: ToursJSON[] = [
  {
    id: 1,
    value: 'tour-1',
    label: 'Tour 1',
  },
  {
    id: 2,
    value: 'tour-2',
    label: 'Tour 2',
  },
  {
    id: 3,
    value: 'tour-3',
    label: 'Tour 3',
  },
  {
    id: 4,
    value: 'tour-4',
    label: 'Tour 4',
  },
  {
    id: 5,
    value: 'tour-5',
    label: 'Tour 5',
  },
  {
    id: 6,
    value: 'tour-6',
    label: 'Tour 6',
  },
]

export { slides, locations, tours };