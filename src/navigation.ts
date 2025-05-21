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
      text: 'Join',
      href: getPermalink('/registration'),
    },
    {
      text: 'Our Activities',
      links: [
        {
          text: 'Events',
          href: getPermalink('/events'),
        },
        {
          text: 'Scholarships',
          href: getPermalink('/scholarships'),
        },
      ],
    },
    {
      text: 'Bricks',
      href: getPermalink('/bricks'),
    },
    {
      text: 'Donate',
      href: getPermalink('/donate'),
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
        { text: 'Events', href: '/events' },
        { text: 'Scholarships', href: '/scholarships' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { text: 'Member Registration', href: '/registration' },
        { text: 'Bricks', href: '/bricks' },
        { text: 'Donate', href: '/donate' },
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
    Designed by <a class="text-blue-600 underline dark:text-muted" href="https://christopherprainito.com/"> Christopher Prainito '22</a> · All rights reserved.
  `,
};
