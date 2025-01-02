import { ReactNode, ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children: ReactNode
	variant?: string
	duration?: string
}

export const Button = ({ duration, variant, onClick, className = '', children, ...props }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={twMerge("rounded-lg px-6 py-3 flex items-center justify-between", className, duration && `transition-all duration-[${duration}]`)}
			{...props}
			variant={variant}
		>
			{children}
		</button>
	)
}
