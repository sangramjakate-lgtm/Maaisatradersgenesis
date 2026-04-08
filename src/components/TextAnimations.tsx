"use client"

import React, { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

// Style F: Text reveals line by line with mask effect
// Enhanced with longer duration and smoother easing as requested
export function LineMaskReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  // Helper to recursively wrap text nodes and leaf elements in mask spans
  const splitTextNodes = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      return node.split(/(\s+)/).map((part, i) => {
        if (!part.trim()) return part
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <span
              className={cn(
                "inline-block transition-all duration-[2500ms] ease-[cubic-bezier(0.2,1,0.3,1)]",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
              )}
              style={{
                transitionDelay: `${delay}ms`,
              }}
            >
              {part}
            </span>
          </span>
        )
      })
    }

    if (React.isValidElement(node)) {
      const children = (node.props as any).children

      // If it's a leaf element (no children, like an icon or bullet), wrap the whole element
      if (!children || React.Children.count(children) === 0) {
        return (
          <span className="inline-block overflow-hidden align-middle">
            <span
              className={cn(
                "inline-block transition-all duration-[2500ms] ease-[cubic-bezier(0.2,1,0.3,1)]",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
              )}
              style={{
                transitionDelay: `${delay}ms`,
              }}
            >
              {node}
            </span>
          </span>
        )
      }

      return React.cloneElement(node as React.ReactElement, {
        children: React.Children.map(children, (child) => splitTextNodes(child)),
      } as any)
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => <React.Fragment key={i}>{splitTextNodes(child)}</React.Fragment>)
    }

    return node
  }

  return (
    <div ref={ref as any} className={cn("block", className)}>
      {splitTextNodes(children)}
    </div>
  )
}
