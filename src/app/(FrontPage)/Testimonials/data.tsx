import UserThumb from './img/user.png';

interface SlidesJSON {
  id: number;
  content: string;
  className?: string;
  user: {
      thumb: any,
      name: string,
      location: string,
  }
}

const slides: SlidesJSON[] = [
  {
    id: 1,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.',
    user: {
      thumb: UserThumb,
      name: 'Person Name',
      location: 'City Location',
      
    },
  },
  {
    id: 2,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.',
    user: {
      thumb: UserThumb,
      name: 'Person Name',
      location: 'City Location',
      
    },
  },
  {
    id: 3,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.',
    user: {
      thumb: UserThumb,
      name: 'Person Name',
      location: 'City Location',
      
    },
  },
  {
    id: 4,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.',
    user: {
      thumb: UserThumb,
      name: 'Person Name',
      location: 'City Location',
      
    },
  },
  {
    id: 5,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.',
    user: {
      thumb: UserThumb,
      name: 'Person Name',
      location: 'City Location',
      
    },
  },
  {
    id: 6,
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.',
    user: {
      thumb: UserThumb,
      name: 'Person Name',
      location: 'City Location',
      
    },
  },
]

export { slides };