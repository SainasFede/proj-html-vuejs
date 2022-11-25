import { reactive } from 'vue';

export const store = reactive({
  services:[
    {
      icon: 'fa-solid fa-sitemap fa-2xl',
      arrow: 'fa-solid fa-arrow-right fa-lg',
      service: 'Audit & Assurance',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing'
    },

    {
      icon: 'fa-solid fa-briefcase fa-2xl',
      arrow: 'fa-solid fa-arrow-right fa-lg',
      service: 'Financial Advisory',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing'
    },

    {
      icon: 'fa-solid fa-chart-simple fa-2xl',
      arrow: 'fa-solid fa-arrow-right fa-lg',
      service: 'Analytics and M&A',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
    },

    {
      icon: 'fa-solid fa-plane fa-2xl',
      arrow: 'fa-solid fa-arrow-right fa-lg',
      service: 'Middle Marketing',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
    },

    {
      icon: 'fa-solid fa-globe fa-2xl',
      arrow: 'fa-solid fa-arrow-right fa-lg',
      service: 'Legal Consulting',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
    },

    {
      icon: 'fa-regular fa-folder-open fa-2xl',
      arrow: 'fa-solid fa-arrow-right fa-lg',
      service: 'Regulatory Risk',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
    },
  ],
  navheader:[
    'HOME', 'SERVICES', 'ABOUT', 'PROJECT', 'RESULTS'
  ],
  navprojects:[
    'ALL',
    'ISTITUTIONAL',
    'SOCIAL',
    'EVENTS',
    'INNOVATION',
    'ENVIRONMENT',
    'TECHNOLOGY'
  ],
  projects:[
    {
      img: '../assets/img/project-1',
      arrow: 'fa-solid fa-arrow-right fa-lg',
      project: 'Academic professional program in social media',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing',
    },
    {
      img: '../../assets/img/project-2',
      arrow: 'fa-solid fa-arrow-right fa-lg',
      project: 'President s speech at the annual meeting',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing',
    },
    {
      img: '../../assets/img/project-3',
      arrow: 'fa-solid fa-arrow-right fa-lg',
      project: 'International business trip in Shanghai',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing',
    },
    {
      img: '../../assets/img/project-4',
      arrow: 'fa-solid fa-arrow-right fa-lg',
      project: 'Technology workshop with education theme',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing',
    },
    {
      img: '../../assets/img/project-5',
      arrow: 'fa-solid fa-arrow-right fa-lg',
      project: 'Donation of clothes and food to the partner NGO',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing',
    },
    {
      img: '../../assets/img/project-6',
      arrow: 'fa-solid fa-arrow-right fa-lg',
      project: 'Confraternization of the procurement team',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing',
    }
  ],
})