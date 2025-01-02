import { Input } from "@/components";

export default function Home() {
  return (
    <div className="space-y-4 flex flex-col items-start justify-center h-full w-full">
      <Input className="focus:bg-gray-600/10 w-full font-semibold text-4xl" placeholder="Gym schedule"/>
      <textarea
	  	id="note-textarea" 
        placeholder="Go to gym at 5pm" 
        className="resize-none transition duration-[200] rounded-xl outline-none h-full w-full focus:bg-gray-600/10 p-4 text-lg text-gray-200 bg-transparent"
      ></textarea>
    </div>
  )
}
