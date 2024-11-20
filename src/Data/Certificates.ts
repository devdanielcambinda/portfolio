export interface Certificate {
    name: string;
    description: string;
    url: string;
    type: "Volunteering" | "Programming";
}

export const certificates: Readonly<Certificate>[] = [
    {
        name: "The Complete Node.js Developer Course (3rd Edition)",
        description: "This course provides a comprehensive training in back-end development using Node.js, Express.js, and MongoDB." +
            " It focuses on building RESTful APIs with features like filtering, sorting, and pagination, managing NoSQL databases with MongoDB and Mongoose," +
            " mastering Node.js core concepts such as asynchronous programming, scalable application design, and deploying applications to production using tools like Heroku.",
        url: "https://www.udemy.com/certificate/UC-9d892e17-722a-45f5-80c4-42b796f7bb82/",
        type : "Programming"
    },
    {
        name: "Understanding TypeScript",
        description: "This course teaches TypeScript from basic to advanced levels, focusing on features like generics, decorators, and type annotations." +
            " It includes practical integration with frameworks like Angular and Node.js, emphasizing improved code structure, reliability, and scalability for real-world projects.",
        url: "https://www.udemy.com/certificate/UC-9ce28e36-f13f-4e6f-b7fe-2e2282d52e48/",
        type: "Programming"
    },
    {
        name: "Dove Men + Care Portugal Rugby Youth Festival 2019",
        description: "The Portugal Rugby Youth Festival is a youth rugby tournament organized by Move Sports." +
            " Its goal is to provide a unique experience for young rugby players by bringing together athletes from various countries through this event.",
        url: "https://drive.google.com/file/d/1V3pOSEyEyrsz6owem1ZNLL2i2btbOLKe/view?usp=drive_link",
        type: "Volunteering"
    }
]