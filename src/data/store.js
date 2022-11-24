import { reactive } from 'vue';

export const store = reactive({
  services:[
    {
      icon: 'fa-solid fa-sitemap fa-2xl',
      service: 'Audit & Assurance',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing'
    },

    {
      icon: 'fa-solid fa-briefcase fa-2xl',
      service: 'Financial Advisory',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing'
    },

    {
      icon: 'fa-solid fa-chart-simple fa-2xl',
      service: 'Analytics and M&A',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
    },

    {
      icon: 'fa-solid fa-plane fa-2xl',
      service: 'Middle Marketing',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
    },

    {
      icon: 'fa-solid fa-globe fa-2xl',
      service: 'Legal Consulting',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
    },

    {
      icon: 'fa-regular fa-folder-open fa-2xl',
      service: 'Regulatory Risk',
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
    },
  ]
})