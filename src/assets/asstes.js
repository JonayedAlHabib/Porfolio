import { FaDatabase, FaDesktop, FaGear, FaReact, FaRobot, FaSchool, FaWrench } from 'react-icons/fa6'
import profileImg from '../assets/profile.avif'
import resumeCV from '../assets/Jonayed_Al_Habib_CV.pdf'
import { FaProjectDiagram } from 'react-icons/fa'



export const assets = {
    profileImg,
    resumeCV,
}


export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
    {
        icon: FaGear,
        title: 'Backend',
        technologies: ['Node.js', 'Express', 'JWT Auth', 'REST APIs']
    },
    {
        icon: FaDatabase,
        title: 'Database',
        technologies: ['MongoDB', 'Mongoose', 'Redis']
    },
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['React', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
        icon: FaWrench,
        title: 'DevOps & Tools',
        technologies: ['Linux', 'Docker', 'Git', 'GitHub', 'Render']
    },
    {
        icon: FaRobot,
        title: 'AI Integration',
        technologies: ['Google Gemini API', 'Prompt Engineering']
    },
]



export const projectData = [
    {
        title: 'Health Care',
        description: 'Immersive shopping experience with python tailwind and react',
        image: 'https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D',
        tech: ['React', 'Tailwindcss', 'Python']
    },
    {
        title: 'FurniCraft',
        description: 'A modern furniture e-commerce platform offering customizable home and office furniture .',
        image: 'https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['React', 'Tailwindcss', 'Python']
    },
    {
        title: 'Collaboration',
        description: 'A real-time collaborative platform for artists and designers to co-create digital art',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['React', 'Tailwindcss', 'Python']
    },
    {
        title: 'Abmbivista',
        description: 'A mood-based interior design suggestion tool that uses AI',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['Django', 'Tailwindcss', 'Python', 'Rest']
    }
]

export const profileData = [
    {
        icon: FaDesktop ,
        title: 'Language',
        technologies : ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'React', 'JWT/OAuth']
    },
    {
        icon: FaSchool ,
        title: 'Education',
        technologies : ['BSc in Information Technology, UITS']
    },
    {
        icon: FaProjectDiagram ,
        title: 'Projects',
        technologies : ['Built more than 5+']
    },
]