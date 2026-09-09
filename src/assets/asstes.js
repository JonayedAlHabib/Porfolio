import { FaDatabase, FaDesktop, FaGear, FaReact, FaRobot, FaSchool, FaWrench } from 'react-icons/fa6'
import profileImg from '../assets/profile.avif'
import resumeCV from '../assets/Jonayed_Al_Habib_CV.pdf'
import { FaProjectDiagram } from 'react-icons/fa'

// Auto-import every screenshot in src/assets/Project so a new project only
// needs an entry in projectData below (drop the image in the folder,
// reference it by filename) instead of a new import line here.
const projectImages = import.meta.glob('./Project/*.{png,jpg,jpeg,webp,avif}', { eager: true, import: 'default' })

const getProjectImage = (filename) => {
    const entry = Object.entries(projectImages).find(([path]) => path.endsWith(`/${filename}`))
    return entry ? entry[1] : null
}



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
        title: 'Interview AI',
        description: 'Turns a job description and resume into a personalized interview strategy with skill-gap analysis, a prep roadmap, and live AI-driven mock interview practice.',
        image: getProjectImage('Interview-AI.png'),
        tech: ['React', 'Node.js', 'Google Gemini API'],
        live: 'https://interview-ai-1-j8hh.onrender.com/',
        github: 'https://github.com/JonayedAlHabib/Interview-AI'
    },
    {
        title: 'TalkNest',
        description: 'A purposeful social network where every follow is a real accepted request, not a counter, keeping your feed limited to people you actually chose.',
        image: getProjectImage('TalkNest.png'),
        tech: ['React', 'Node.js'],
        live: 'https://talknest-2-1so2.onrender.com/',
        github: 'https://github.com/JonayedAlHabib/TalkNest'
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