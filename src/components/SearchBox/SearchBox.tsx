"use client"

import { useReducer } from "react"
import { useRouter } from "next/navigation"

interface SearchBoxProps {
    search: string
}


function SearchBox() {

    const router = useRouter()

    const [{search}, setSearch] = useReducer((state:SearchBoxProps, newState:Partial<SearchBoxProps>) => ({ ...state, ...newState }), {
        search: ''
    })


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`/search/${search}`)
    }


  return (
		<form onSubmit={handleSubmit} className='flex max-w-6xl mx-auto justify-between items-center px-5'>
			<input
				type='text'
				name='search'
				value={search}
				onChange={(e) => setSearch({ search: e.target.value })}
				className='w-full h-14 rounded-sm placeholder-gary-500 outline-none bg-transparent flex-1'
			/>
			<button
				disabled={!search}
				type='submit'
				className='text-amber-600 disabled:text-gray-400'
			>
				Search
			</button>
		</form>
  );
}
export default SearchBox