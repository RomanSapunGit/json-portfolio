export default interface ProjectProps {
    name: string;
    description: string;
    techStack: string[];
    githubLink: string;
    appLink?: string
    isLast?: boolean;
}
