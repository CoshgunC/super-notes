import Link from 'next/link'
import React, { ReactNode } from 'react'

type SidebarItemComponent = {
	icon: ReactNode,
	text: string,
	href: string
}

const SidebarItem = ({ text, icon, href }: SidebarItemComponent) => {
	return (
		<Link href={href} className='flex items-center w-full space-x-4 overflow-hidden p-4 hover:bg-primary/20 hover:text-primary transition duration-150 rounded-xl'>
			<>
				{icon}
			</>
			<span className=''>{text}</span>
		</Link>
	)
}

export default SidebarItem