export interface Project {
    start: number,
    id: number,
    name: string,
    description: string,
    skills: { icon: string, name: string, separator?: string}[],
    githubSrc: string,
    liveTestSrc: string,
    img: string,
}