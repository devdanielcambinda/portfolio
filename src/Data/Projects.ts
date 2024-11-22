import {Technology} from "./Technologies";

export interface Project {
    name: string;
    description: string;
    technologies: Technology[]
    url: string;
}

export const projects: Readonly<Project>[] = [];