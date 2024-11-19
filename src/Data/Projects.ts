export interface Project {
    name: string;
    startDate: Date;
    endDate: Date;
    description: string;
}

export const projects: Readonly<Project>[] = []