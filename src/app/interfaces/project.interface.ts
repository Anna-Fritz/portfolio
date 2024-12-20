export interface Project {
    start: number,
    id: number,
    name: string,
    descriptionEN: string,
    descriptionDE: string,
    skills: { icon: string, name: string, separator?: string}[],
    githubSrc: string,
    liveTestSrc: string,
    img: string,
}