"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    animation?: "blur-fade" | "line-mask" | "scale-fade" | "clip" | "stagger-words" | "image-parallax";
}

export const ScrollReveal = ({
    children,
    className,
    delay = 0,
    animation = "blur-fade",
}: ScrollRevealProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            if (animation === "blur-fade") {
                gsap.fromTo(sectionRef.current,
                    { opacity: 0, scale: 0.95, filter: "blur(10px)", y: 30 },
                    {
                        opacity: 1, scale: 1, filter: "blur(0px)", y: 0,
                        duration: 1.5, delay, ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 90%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            } else if (animation === "line-mask") {
                const words = sectionRef.current?.querySelectorAll(".reveal-word");
                if (words?.length) {
                    gsap.fromTo(words,
                        { y: "100%", opacity: 0 },
                        {
                            y: "0%", opacity: 1,
                            duration: 1.2, stagger: 0.1, delay, ease: "power4.out",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top 85%",
                            }
                        }
                    );
                }
            } else if (animation === "scale-fade") {
                gsap.fromTo(sectionRef.current,
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1, scale: 1,
                        duration: 1.5, delay, ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 95%",
                        }
                    }
                );
            } else if (animation === "clip") {
                gsap.fromTo(sectionRef.current,
                    { "clip-path": "inset(0 100% 0 0)" },
                    {
                        "clip-path": "inset(0 0% 0 0)",
                        duration: 1.5, delay, ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 85%",
                        }
                    }
                );
            } else if (animation === "image-parallax") {
                const parallaxImg = sectionRef.current?.querySelector(".parallax-img");
                if (parallaxImg) {
                    gsap.fromTo(parallaxImg,
                        { y: "-10%" },
                        {
                            y: "10%",
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true
                            }
                        }
                    );
                }
            }
        });

        return () => ctx.revert();
    }, [animation, delay]);

    const renderChildren = () => {
        if (animation === "line-mask" && typeof children === "string") {
            return children.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                    <span className="reveal-word inline-block">{word}&nbsp;</span>
                </span>
            ));
        }
        return children;
    };

    return (
        <div ref={sectionRef} className={cn("relative overflow-hidden", className)}>
            {renderChildren()}
        </div>
    );
};
