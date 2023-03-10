import { Results } from "@/src/components/Results"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"




async function SearchPage({params}:{params:Params}) {

const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${params.search}&page=1&include_adult=false`)

if(!response.ok) {
    throw new Error(response.statusText)
}


const data = await response.json()

const results = data.results





  return (
		<div>
			{results && results.length === 0 && (
				<h1 className='text-center pt-6'>No results found</h1>
			)}

			{results && <Results results={results} />}
		</div>
  );
}
export default SearchPage