import { getPermalink, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getHomePermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Events',
      href: getPermalink('#'),
    },
    {
      text: 'News & Scholarships',
      links: [
        {
          text: 'Alumni in the News',
          href: getPermalink('#'),
        },
        {
          text: 'Alumni Projects',
          href: getPermalink('#'),
        },
        {
          text: 'Scholarships',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Join Us',
      links: [
        {
          text: 'Member Registration',
          href: getPermalink('#'),
        },
        {
          text: 'Reunion Registration',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Organization',
      links: [
        { text: 'Home', href: getHomePermalink() },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Events & Activities',
      links: [
        { text: 'Events', href: '#' },
        { text: 'Alumni in the News', href: '#' },
        { text: 'Alumni Projects', href: '#' },
        { text: 'Scholarships', href: '#' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { text: 'Member Registration', href: '#' },
        { text: 'Reunion Registration', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/bellmorejfkalum' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/bellmorejfkalumni/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/bellmore.jfk/' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://christopherprainito.com/"> Christopher Prainito '22</a> · All rights reserved.
  `,
};
