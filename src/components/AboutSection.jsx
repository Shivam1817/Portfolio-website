import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Crafting Scalable Solutions with Code</h3>

                    <p className="text-muted-foreground">Hello, I'm Shivam, a recent B.Tech graduate in Chemical Science and Technology from IIT Guwahati. I'm a passionate Full-Stack Developer with hands-on experience building real-time and high-performance web applications using the MERN stack, Next.js, and modern frontend tools like Tailwind CSS and ShadCN.
                    Over the past two years, I've worked on diverse and impactful projects—from a secure real-time banking app integrating Plaid and Dwolla to a decentralized chat platform and a file compression tool using Huffman coding. </p>
                    
                    <p className="text-muted-foreground">My internship at CloudGrep gave me practical exposure to full-stack development, where I built and optimized features for a Firecracker VM orchestration platform using Next.js, Go, and MongoDB, improving performance and deployment speed significantly.
                    My core tech stack includes React.js, Next.js, TypeScript, Node.js, MongoDB, WebSockets, and more. I have solved over 1000 coding problems across platforms, honing my problem-solving and algorithmic thinking.
                    Beyond tech, I’ve contributed to communities at IIT Guwahati, serving on the core teams of Alcheringa and the Rights and Responsibilities Club, while also winning a bronze medal in water polo. I’m driven by a love for learning and building things that create real-world impact.</p>
                    
                    <p className="text-muted-foreground">When I’m not coding, I enjoy watching movies and playing sports like cricket , swimming and chess.</p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">{" "}
                            Get in Touch
                        </a>
                        <a 
                        href="/Shivam_SDE.pdf"
                        download
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10  transition-colors duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                
                <div className="grid gird-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground">
                                    Building responsive, high-performance web apps using React, Next.js, and Node.js.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Real-time Applications</h4>
                                <p className="text-muted-foreground">
                                    Developing high-performance, interactive features with WebSockets and real-time APIs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Execution</h4>
                                <p className="text-muted-foreground">
                                    Delivering end-to-end projects with a focus on performance, scalability, and clean code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}