"use client"

import { cn } from "~/lib/utils"
import ButterflyView from "./Butterfly"

interface RViewProps {
  className?: string
}

interface CurvedTextProps {
  text: string
  radius: number
  className?: string
}

function CurvedText({ text, radius, className }: CurvedTextProps) {
  const fontSize = Math.min(radius * 0.08, 16) // Even smaller font for better fit
  const centerX = radius + 20
  const centerY = radius + 20
  
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox={`0 0 ${(radius + 20) * 2} ${(radius + 20) * 2}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          id="textPath"
          d={`M ${centerX},${centerY} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          fill="none"
        />
      </defs>
      <text
        fontSize={fontSize}
        fontWeight="bold"
        fill="currentColor"
        textAnchor="middle"
        letterSpacing="0.1em"
      >
        <textPath href="#textPath" startOffset="0%">
          {text}
        </textPath>
      </text>
    </svg>
  )
}

export function RView({ className }: RViewProps) {
  return (
    <div className={cn("w-full space-y-12 py-12", className)}>

      {/* Animated Ring of Text with custom SVG */}
      <div className="flex items-center justify-center">
        <div className="relative h-80 w-80">
          <div className="h-full w-full animate-spin-slow">
            <CurvedText
              text="SOMETHING IN THE RAIN • SOMETHING IN THE RAIN • SOMETHING IN THE RAIN • SOMETHING IN THE RAIN • SOMETHING IN THE RAIN • SOMETHING IN THE RAIN • SOMETHING IN THE RAIN • SOMETHING IN THE RAIN •"
              radius={140}
              className="text-foreground"
            />
          </div>
          
          {/* Center R Letter */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <div 
                onClick={() => window.open('https://www.youtube.com/watch?v=fzfLHt0jImU', '_blank')}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open('https://www.youtube.com/watch?v=fzfLHt0jImU', '_blank')
                  }
                }}
              >
                <ButterflyView />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
