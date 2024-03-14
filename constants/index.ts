import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const Socials = [
    {
        name :'Discord',
        src : '/discord.svg'
    },
    {
        name : 'Facebook',
        src : '/facebook.svg'
    },
    {
        name :'Instagram',
        src : '/instagram.svg'
    }
]

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];