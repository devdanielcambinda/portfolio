export interface Experience {
    name: string;
    startDate: string;
    endDate?: string;
    description: string;
    type: "Full-time" | "Internship" | "Summer job"
}

export const programming: Readonly<Experience>[] = []

export const summerJobs: Readonly<Experience>[] = []