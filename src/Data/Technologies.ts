export interface Technology {
    name: string;
    whereILearned: string;
    description?: string;
}

export const technologies: Readonly<Technology>[] = [];