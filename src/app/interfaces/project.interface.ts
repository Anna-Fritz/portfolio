export interface Project {
    start: number,
    id: number,
    name: string,
    descriptionEN: string,
    descriptionDE: string,
    skills: { icon: string, name: string, separator?: string}[],
    stacklevel: string,
    githubSrc: string,
    githubSrcBackend: string,
    liveTestSrc: string,
    img: string,
}