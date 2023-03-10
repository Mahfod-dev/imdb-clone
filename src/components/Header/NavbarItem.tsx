"use client"

import Link from "next/link"
import { useSearchParams } from 'next/navigation';

function NavbarItem({title,param}:{title:string,param:string}) {

const searchParams= useSearchParams()

const genre = searchParams.get('genre')

const styleGenre = genre && genre === param ? 'underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg' : ''


  return (
		<>
			<Link
				href={`/?genre=${param}`}
				className={`m-4 hover:text-amber-600 font-semibold p-2 ${
					styleGenre
				}`}
			>
				{title}
			</Link>
		</>
  );
}
export default NavbarItem