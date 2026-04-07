"use client";

import React from "react";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  label?: string;
  variant?: "primary" | "minimal";
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phone = "+919172833311",
  message = "Hello, I'm interested in Maaisa Reality Genesis.",
  label = "WhatsApp Scan",
  variant = "primary",
  className,
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  if (variant === "minimal") {
    return (
      <button
        onClick={handleClick}
        className={cn(
          "group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-foreground transition-all duration-300",
          className
        )}
      >
        <span className="border-b border-primary/30 group-hover:border-primary pb-0.5">{label}</span>
        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group relative px-10 py-5 bg-primary overflow-hidden shadow-elegant transition-all duration-500 hover:shadow-glow hover:-translate-y-0.5",
        className
      )}
    >
      <div className="absolute inset-0 bg-primary-glow translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
      <div className="relative z-10 flex items-center justify-center gap-4">
        <MessageSquare size={16} className="text-on-primary group-hover:scale-110 transition-transform" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-on-primary">
          {label}
        </span>
      </div>
    </button>
  );
};
