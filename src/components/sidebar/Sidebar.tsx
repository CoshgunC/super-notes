import React from 'react'
import SuperNotes from './SuperNotes'
import { FaHome, FaHeart, FaPlusSquare } from 'react-icons/fa'
import SidebarItem from './SidebarItem'

const sidebarItems = [
	{ text: 'Home', icon: <FaHome/>, href: "/"},
	{ text: 'Favorites', icon: <FaHeart/>, href: "/favorites"},
	{ text: 'New', icon: <FaPlusSquare/>, href: "/new"},
]

const Sidebar = () => {
  return (
	<aside className='hidden sm:block h-screen min-w-100px w-[30%] max-w-[250px] border-r-2 border-gray-200 dark:border-gray-800 p-4'>
		<SuperNotes/>
		<div className='mt-8'>
			{sidebarItems.map((sidebarItem, index) => (
				<SidebarItem href={sidebarItem.href} key={index} icon={sidebarItem.icon} text={sidebarItem.text}/>
			))}
		</div>
	</aside>
  )
}

export default Sidebar