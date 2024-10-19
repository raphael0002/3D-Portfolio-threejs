import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    tailwindcss,
    typescript,
    recipe
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/raphael0002',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rohan-shrestha-2b3bbb288/',
    }
];

export const projects = [
    {
        iconUrl: recipe,
        theme: 'btn-back-red',
        name: 'Recipe App',
        description: 'Meal Map is a comprehensive web application designed to allow users to discover, share, and manage recipes. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), the application supports user authentication, CRUD (Create, Read, Update, Delete) operations.',
        link: 'https://github.com/raphael0002/Meal-Map',
    },
    {
        iconUrl: Chatify,
        theme: 'btn-back-orange',
        name: 'Chatify',
        description: "Chatify is a modern chat application built with React and Firebase, offering real-time messaging, secure authentication, and cloud storage. Users can easily sign up, log in, and enjoy seamless conversations with friends, all while benefiting from Firebase's powerful backend services for scalability and data sync across devices.",
        link: 'https://github.com/raphael0002/chatify',
    }
];
