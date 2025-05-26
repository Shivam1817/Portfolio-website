import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id:1,
        title: "Blogify",
        description: "Blogify is a modern blogging platform with user authentication, rich-text editing, and personalized dashboards. Built for a smooth writing and reading experience.",
        image: "projects/project1.png",
        tags:["Typescript","React.js","Tailwind CSS","Prisma","PostgreSQL","Zod"],
        githubUrl: "https://github.com/Shivam1817/BlogifyX",
    },
    {
        id:2,
        title: "Banking App",
        description: "Banking App is a secure and user-friendly platform for managing accounts, transferring funds, and tracking transactions in real time.",
        image: "projects/project2.png",
        tags:["Nextjs","Typescript","Appwrite","Tailwind","ShadCN","Dwolla","Plaid"],
        githubUrl: "https://github.com/Shivam1817/Banking-App",
    },

    {
        id:3,
        title: "Chatify",
        description: "Chatify is a real-time chat application with instant messaging, user authentication, and a clean, responsive UI for seamless communication.",
        image: "projects/project3.png",
        tags:["HTML","CSS","JavaScript","express","MongoDB","Socket.IO"],
        githubUrl: "https://github.com/Shivam1817/Real_Time_Chat",
    },

    {
        id:4,
        title: "File Compressor ",
        description: "File Compressor is a simple and efficient tool that reduces file sizes while maintaining quality, making storage and sharing faster and easier.",
        image: "projects/project4.png",
        tags:["c++"],
        githubUrl: "https://github.com/Shivam1817/File-Compressor",
    },
    ];

    export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore a selection of my recent projects, 
            each thoughtfully engineered with a focus on clean architecture, 
            optimal performance, and seamless user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                <div className="h-48 overflow-hidden">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag)=>(
                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                        {tag}
                        </span>
                    ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                    <a 
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                        <Github size={20} />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            ))}
            </div>
            <div>
            <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ranjannkumar"
            >
                Check My Github <ArrowRight size={16} />
            </a>
            </div>
        </div>
        </section>
    );
};