"use client";

import { useEffect, useRef, useState } from "react";
import { X, ZoomIn, ZoomOut, Maximize, RotateCcw } from "lucide-react";

interface ThreeSixtyPortalProps {
  imageUrl: string;
  onClose: () => void;
  title?: string;
}

declare global {
  interface Window {
    pannellum: any;
  }
}

export function ThreeSixtyPortal({ imageUrl, onClose, title }: ThreeSixtyPortalProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if pannellum is loaded
    const checkPannellum = setInterval(() => {
      if (window.pannellum) {
        clearInterval(checkPannellum);
        
        const viewer = window.pannellum.viewer(viewerRef.current, {
          type: "equirectangular",
          panorama: imageUrl,
          autoLoad: true,
          autoRotate: 0, // Manual drag only as requested
          showControls: false, // Custom UI below
          compass: false,
          mouseZoom: true,
        });

        viewer.on("load", () => setLoading(false));

        // Cleanup
        return () => {
          if (viewer) viewer.destroy();
        };
      }
    }, 100);

    return () => clearInterval(checkPannellum);
  }, [imageUrl]);

  return (
    <div className="fixed inset-0 z-[100] bg-surface-lowest flex flex-col">
      {/* Header Overlay */}
      <div className="absolute top-0 w-full z-50 p-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <h2 className="text-secondary font-heading text-2xl italic font-thin">{title || "Virtual View"}</h2>
          <p className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold">Use mouse to drag & look around</p>
        </div>
        
        <button 
          onClick={onClose}
          className="pointer-events-auto group bg-primary text-on-primary px-8 py-4 flex items-center gap-4 hover:bg-secondary hover:text-on-secondary transition-all shadow-elegant"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Exit 360</span>
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
        </button>
      </div>

      {/* Viewer Container */}
      <div 
        ref={viewerRef} 
        className="flex-grow w-full h-full cursor-grab active:cursor-grabbing"
        style={{ background: "#0a0a0a" }}
      />

      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-lowest z-[101]">
          <div className="w-12 h-12 border-2 border-primary border-t-transparent animate-spin rounded-full mb-8" />
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold animate-pulse">Entering Your Future Home...</p>
        </div>
      )}

      {/* Simple Instruction Badge */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 glass px-12 py-6 text-center shadow-elegant z-50 pointer-events-none">
         <p className="text-secondary text-xs font-bold tracking-widest uppercase">Click and drag to explore</p>
      </div>
    </div>
  );
}
