import React from 'react'
import { twMerge } from 'tailwind-merge'

const Logo = ({ className, center, centerBoth }: {
	className?: string,
	center?: boolean,
	centerBoth?: boolean
}) => {
	return (
		<p className={twMerge("text-6xl font-bold", className, center && "text-center", centerBoth && "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2")}>
			<span className='text-primary'>Super</span>
			<span className='text-gray-900 dark:text-white'>Notes</span>
		</p>
	)
}

export default Logo