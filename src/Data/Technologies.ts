export interface Technology {
    name: string;
    whereILearned: string;
    imageUrl?: string;
}

export const workflow: Readonly<Technology>[] = [
    {name: "Git", whereILearned: "Bachelor's degree"},
    {name: "Azure DevOps", whereILearned: "Internship"},
]


export const programmingLanguages: Readonly<Technology>[] = [
    {name: "HTML", whereILearned: "Bachelor's degree"},
    {name: "CSS", whereILearned: "Bachelor's degree"},
    {name: "JavaScript", whereILearned: "Bachelor's degree"},
    {name: "TypeScript", whereILearned: "Udemy course"},
    {name: "Java", whereILearned: "Bachelor's / Master's degree"},
    {name: "C#", whereILearned: "Bachelor's degree"},
    {name: "Python", whereILearned: "Bachelor's / Master's degree"},
    {name: "XML", whereILearned: "Bachelor's degree"},
    {name: "JSON", whereILearned: "Bachelor's degree / Udemy course"},
];

export const frameworks: Readonly<Technology>[] = [
    {name: "Node.js", whereILearned: "Udemy course"},
    {name: "Angular", whereILearned: "Udemy course and internship"},
    {name: "React", whereILearned: "Udemy course and self-taught"},
    {name: "Express.js", whereILearned: "Udemy course"},
    {name: "JavaEE", whereILearned: "Bachelor's degree"},
    {name: ".NET CORE", whereILearned: "Udemy course"},
    {name: "Bootstrap", whereILearned: "Self-taught"},
    {name: "Handlerbars", whereILearned: "Udemy course"},
    {name: "Mongoose", whereILearned: "Udemy course"},
    {name: "Sequelize", whereILearned: "Self-taught"},
    {name: "TypeORM", whereILearned: "Udemy course"},
    {name: "RxJS", whereILearned: "Udemy course and internship"},
    {name: "Passport.js", whereILearned: "self-taught"},
    {name: "Jest", whereILearned: "Udemy course"},
    {name: "Playwright", whereILearned: "Internship"},
]

export const databases: Readonly<Technology>[] = [
    {name: "Oracle SQL", whereILearned: "Bachelor's degree"},
    {name: "PostgreSQL", whereILearned: "Self-taught"},
    {name: "MySQL", whereILearned: "Master's degree"},
    {name: "Microsoft SQL Server", whereILearned: "Udemy course"},
    {name: "MongoDB", whereILearned: "Master's degree and Udemy course"},
    {name: "Firebase", whereILearned: "Internship"},
]