"use client";

import { useEffect, useState, createContext, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

interface SmoothScrollProps {
    children: React.ReactNode;
}

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

const SmoothScroll = ({ children }: SmoothScrollProps) => {
    const [lenisRef, setLenisRef] = useState<Lenis | null>(null);

    useEffect(() => {
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        setLenisRef(lenis);

        // Sync Lenis with ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
        };
    }, []);

    return (
        <LenisContext.Provider value={lenisRef}>
            {children}
        </LenisContext.Provider>
    );
};

export default SmoothScroll;
