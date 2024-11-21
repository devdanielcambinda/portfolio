export interface Education {
    name: string;
    Institution: string;
    location: string;
    startDate: string;
    endDate?: string;
    note?: string;
    subjects: Subject[];
}

export interface Subject {
    name: string;
    description?: string;
}

const bachelorsSubjects: Subject[] = [
    {name: "Programming Fundamentals"},
    {name: "Discrete Mathematics"},
    {name: "Multimedia systems"},
    {name: "Business accounting"},
    {name: "Computer Architecture and Operating Systems"},
    {name: "Databases 1"},
    {name: "Computer Networks"},
    {name: "Calculation"},
    {name: "Web Systems"},
    {name: "Algorithms and Data Structures"},
    {name: "Analysis and Design of Information Systems"},
    {name: "Databases 2"},
    {name: "Network Services"},
    {name: "Internet Technologies"},
    {name: "Object-oriented Programming"},
    {name: "Administration and Security of Network Systems"},
    {name: "Multimedia Applications"},
    {name: "Systems Integration"},
    {name: "Human-Machine Interfaces"},
    {name: "Probability and Statistics"},
    {name: "Project Management"},
    {name: "Artificial Intelligence"},
    {name: "Marketing for Technologies"},
    {name: "Development for Mobile Devices"},
    {name: "Electronic Business Technologies"},
    {name: "Cybersecurity"},
    {name: "Cloud Computing"},
    {name: "Law and Ethics of The Information Society"},
    {name: "Management Information Systems"},
    {name: "Applied Project"},
];

const mastersSubjects: Subject[] = [
    {name: "Software design"},
    {name: "Software security"},
    {name: "Software Verification and Validation"},
    {name: "Web Applications"},
    {name: "Advanced Databases"},
    {name: "Data visualization"},
    {name: "UI/UX"},
    {name: "Parallel and Concurrent Programming"},
    {name: "Information Integration and Analytic Data Processing"},
    {name: "Data Mining"},
    {name: "Security Technology"},
];

export const education: Readonly<Education>[] = [
    {
        name: "Bachelor's Degree in Informatics",
        Institution: "Instituto Politécnico de Santarém - Escola Superior de Gestão e Tecnologia de Santarém",
        location: "Santarém",
        startDate: "10/2019",
        endDate: "07/2022",
        subjects: bachelorsSubjects
    },
    {
        name: "Master's Degree in Informatics",
        Institution: "Faculdade de Ciências da Universidade de Lisboa",
        location: "Lisboa",
        startDate: "09/2022",
        note: "Waiting for thesis defense",
        subjects: mastersSubjects
    }
]