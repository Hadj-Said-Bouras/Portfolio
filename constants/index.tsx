import { url } from "inspector";
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "CV",
    src: "/cv.png",
    href: `${'https://drive.google.com/file/d/1P3sJfkavPZXkY_Qa_9ScpwgDwcJ9TQ0U/view?usp=drive_link'}`,
  },
  {
    name: "Github",
    src: "/github.png",
    href: `${'https://github.com/Hadj-Said-Bouras'}`,
  },
  {
    name: "Linkedin",
    src: "/linkedin.png",
    href: `${'https://www.linkedin.com/in/hadj-said-front-end-web-developer-a577a8255/'}`,
  },
];
export const Projects = [
  {
    title: "Modern Nextjs Website",
    text: "A website for students to share usable products and they can even exchange or sell them (Group project)",
    src: "/shareity.png",
  },
  {
    title: "Space Themed Website",
    text: "An E-commerce website that fetches products from external api (Group project)",
    src: "/SpaceWebsite.png",
  },
  {
    title: "Modern Nextjs Portfolio",
    text: "A portfolio website for presenting my skills and projects (code-along project)",
    src: "/WebPortfolio.png",
  },
  {
    title: "Matrix themed Website",
    text: "A madlib game website for people to create their own stories (Group project)",
    src: "/madlib.png",
  },
];

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