import { getPermalink, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getHomePermalink(),
    },
    {
      text: 'About',
      links: [
        {
          text: 'Overview',
          href: getPermalink('/about'),
        },
        {
          text: 'Board of Directors',
          href: getPermalink('/about#board'),
        },
        {
          text: 'Past Board Members',
          href: getPermalink('/about#past-board'),
        },
      ],
    },
    {
      text: 'Membership',
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
        {
          text: 'Cougar Walk Bricks',
          href: getPermalink('/bricks'),
        },
        {
          text: 'Hall of Fame',
          href: getPermalink('/hall-of-fame'),
        },
        {
          text: 'In Memoriam',
          href: getPermalink('/in-memoriam'),
        },
      ],
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
        { text: 'Board of Directors', href: getPermalink('/about#board') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Events & Activities',
      links: [
        { text: 'Events', href: getPermalink('/events') },
        { text: 'Scholarships', href: getPermalink('/scholarships') },
        { text: 'Cougar Walk Bricks', href: getPermalink('/bricks') },
        { text: 'Hall of Fame', href: getPermalink('/hall-of-fame') },
        { text: 'In Memoriam', href: getPermalink('/in-memoriam') },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { text: 'Member Registration', href: getPermalink('/registration') },
        { text: 'Hall of Fame Nominations', href: getPermalink('/hall-of-fame') },
        { text: 'Memorial Additions', href: getPermalink('/in-memoriam') },
        { text: 'Donate', href: getPermalink('/donate') },
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
    &copy; ${new Date().getFullYear()} Bellmore JFK Alumni, Inc. All rights reserved. Designed by <a class="text-blue-600 underline dark:text-muted" href="https://christopherprainito.com/">Christopher Prainito '22</a>.
  `,
};
