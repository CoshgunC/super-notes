import { cn } from "@/utils"
import React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
  center?: boolean
}

const Card = ({ center, children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "p-4 rounded-lg text-gray-800 dark:text-gray-200",
        className,
		center && "absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card }