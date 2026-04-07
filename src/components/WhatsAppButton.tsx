"use client";

import { MessageSquare, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  className?: string;
  variant?: "primary" | "outline" | "minimal";
  showIcon?: boolean;
}

const WHATSAPP_NUMBER = "919172833311";

export function WhatsAppButton({
  message,
  label = "Enquiry",
  className,
  variant = "primary",
  showIcon = true,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  const baseStyles = "relative overflow-hidden transition-all duration-500 flex items-center justify-center gap-3 group";
  const variants = {
    primary: "bg-primary text-on-primary px-8 py-4 font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-secondary hover:text-on-secondary shadow-elegant",
    outline: "border border-primary/30 text-primary px-8 py-4 font-bold text-[10px] tracking-[0.3em] uppercase hover:border-primary hover:bg-primary/5",
    minimal: "text-primary font-bold text-[10px] tracking-[0.3em] uppercase hover:text-secondary group-hover:translate-x-1 transition-all",
  };

  return (
    <button
      onClick={handleClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      <span className="relative z-10">{label}</span>
      {showIcon && (
        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      )}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-0" />
      )}
    </button>
  );
}
