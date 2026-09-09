import { FaDatabase, FaDesktop, FaGear, FaReact, FaRobot, FaSchool, FaWrench } from 'react-icons/fa6'
import profileImg from '../assets/profile.avif'
import resumeCV from '../assets/Jonayed_Al_Habib_CV.pdf'
import interviewAIImg from '../assets/Project/Interview-AI.png'
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
        title: 'Interview AI',
        description: 'Turns a job description and resume into a personalized interview strategy with skill-gap analysis, a prep roadmap, and live AI-driven mock interview practice.',
        image: interviewAIImg,
        tech: ['React', 'Node.js', 'Google Gemini API'],
        live: 'https://interview-ai-1-j8hh.onrender.com/',
        github: 'https://github.com/JonayedAlHabib/Interview-AI'
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