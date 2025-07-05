import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef();

    useGSAP(() => {
        const heading = containerRef.current.querySelector("#text");
        const paragraphs = containerRef.current.querySelectorAll(".para");

        // Animate heading on scroll
        gsap.fromTo(
            heading,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: heading,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                },
            }
        );

        // Animate paragraphs on scroll
        gsap.fromTo(
            paragraphs,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                ease: "power1.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: paragraphs[0],
                    start: "top 85%",
                    end: "top 40%",
                    scrub: true,
                },
            }
        );
    }, {scope: containerRef});

    return (
        <div className="padding-x-lg xl:mt-0 my-32 mx-auto" ref={containerRef}>
            <div className="flex flex-col gap-8 w-full sm:w-2/3">
                <h1 className="text-3xl font-bold text-white" id="text">
                    Hi, I’m Mohammed Ehab
                </h1>
                <div className="flex flex-col gap-1">
                    <p className="text-[#839CB5] text-lg font-light para">
                        With 5+ years of experience, I have honed my skills in both frontend and backend dev, creating
                        dynamic and responsive websites.
                    </p>
                    <p className="text-[#839CB5] text-lg font-light para">
                        I specialize in technologies like Next.js, React, Node.js, and MongoDB, with a strong emphasis
                        on real-time features, authentication, and beautiful UI/UX using shadcn/ui.
                    </p>
                    <p className="text-[#839CB5] text-lg font-light para">
                        I love solving problems and building things through code. Programming isn't just my
                        profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
