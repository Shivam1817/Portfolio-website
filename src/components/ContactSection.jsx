import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { useState, useRef } from "react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef();

    const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
        toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
    }, 1500);
};

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                {/* Main section title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                {/* Main section description */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I’m always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* LEFT COLUMN: Contact Information and Social Links */}
                    {/* This div centers its internal text content like "Contact Information" and "Connect With Me" titles. */}
                    <div className="space-y-8 text-center">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        {/* This div acts as a flex container for the individual contact lines (Email, Phone, Location).
                            flex-col stacks them vertically, and items-center centers these stacked items horizontally. */}
                        <div className="space-y-6 flex flex-col items-center">
                            {/* Email Contact Line */}
                            {/* Removed flex-row-reverse and justify-end. Added justify-start to place icon at the beginning.
                                space-x-4 for spacing between icon and text.
                                items-center vertically aligns the icon and text.
                                w-full ensures it takes full available width, max-w-sm limits its overall size for better centering. */}
                            <div className="flex items-center justify-start space-x-4 w-full max-w-sm">
                                {/* Icon for Email */}
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                {/* Text content for Email */}
                                {/* flex-grow allows this div to take up available space, pushing the icon further right.
                                    text-center centers the text within its own allocated space. */}
                                <div className="text-center flex-grow">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:shivam.chem21@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        shivam.chem21@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone Contact Line (same logic as Email) */}
                            <div className="flex items-center justify-start space-x-4 w-full max-w-sm">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center flex-grow">
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+919472238918" className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 94722 38918
                                    </a>
                                </div>
                            </div>

                            {/* Location Contact Line (same logic as Email) */}
                            <div className="flex items-center justify-start space-x-4 w-full max-w-sm">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center flex-grow">
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">Darbhanga, Bihar, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Connect With Me section */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            {/* This div uses flex and justify-center to center the social icons horizontally */}
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/shivam1817/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/_shivam_18.17/" target="_blank" rel="noopener noreferrer">
                                    <Instagram />
                                </a>
                                <a href="https://x.com/Tbum100x" target="_blank" rel="noopener noreferrer">
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Send a Message Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="from_name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Your name..."
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="reply_to"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="hello@gmail.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
