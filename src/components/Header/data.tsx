import Flag_1 from './img/1.png';

interface SubmenuItem {
  id: number;
  value?: string; // Only for countries
  slug?: string; // Only for dropdown items
  label: string;
  thumb?: any;
}

interface SubmenuCountry {
  type: 'country';
  name: string;
  group: {
    id: number;
    name?: string;
    list: SubmenuItem[];
  }[];
}

interface SubmenuDropdown {
  type: 'dropdown';
  list: SubmenuItem[];
}

interface MenusJSON {
  id: number;
  slug: string;
  label: string;
  submenu?: SubmenuCountry | SubmenuDropdown; // Update to allow different types of submenus
}

const menus: MenusJSON[] = [
  {
    id: 1,
    slug: 'destinations',
    label: 'Destinations',
    submenu: {
      type: 'country',
      name: 'Countries',
      group: [
        {
          id: 1,
          name: 'Asia',
          list: [
            {
              id: 1,
              value: "nepal",
              label: "Nepal",
              thumb: Flag_1,
            },
            {
              id: 2,
              value: "india",
              label: "India",
              thumb: Flag_1,
            },
            {
              id: 3,
              value: "thailand",
              label: "Thailand",
              thumb: Flag_1,
            },
          ]
        },
        {
          id: 2,
          name: 'South America',
          list: [
            {
              id: 1,
              value: "nepal",
              label: "Nepal",
              thumb: Flag_1,
            },
            {
              id: 2,
              value: "india",
              label: "India",
              thumb: Flag_1,
            },
            {
              id: 3,
              value: "thailand",
              label: "Thailand",
              thumb: Flag_1,
            },
          ]
        },
        {
          id: 3,
          name: 'Europe',
          list: [
            {
              id: 1,
              value: "nepal",
              label: "Nepal",
              thumb: Flag_1,
            },
            {
              id: 2,
              value: "india",
              label: "India",
              thumb: Flag_1,
            },
            {
              id: 3,
              value: "thailand",
              label: "Thailand",
              thumb: Flag_1,
            },
          ]
        },
      ]
    },
  },
  {
    id: 2,
    slug: 'inspiration',
    label: 'Inspiration',
    submenu: {
      type: 'dropdown',
      list: [
        {
          id: 1,
          slug: 'travel-blog',
          label: 'Travel Blog',
        },
        {
          id: 2,
          slug: 'recommendations',
          label: 'Recommendations',
        },
      ]
    }
  },
  {
    id: 3,
    slug: 'about',
    label: 'About',
  },
  {
    id: 4,
    slug: 'contact',
    label: 'Contact',
  },
  {
    id: 5,
    slug: 'travel-calendar',
    label: 'Travel Calendar',
  },
];

export { menus };
