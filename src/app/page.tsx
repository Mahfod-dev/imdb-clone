import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Inter } from 'next/font/google'
import { TopRatedAPI,TrendingWeekAPI } from '../interface/api';
import { Results } from '../components/Results';



const inter = Inter({ subsets: ['latin'] });

export default async function Home({
	searchParams,
}: {
	searchParams: Params;
}) {
	const genre = searchParams.genre || 'fetchTrending';

	

	
		const response = await fetch(
			`https://api.themoviedb.org/3/${
				genre === 'fetchTopRated'
					? 'movie/top_rated'
					: 'trending/all/week'
			}?api_key=${process.env.API_KEY}&language=en-US&page=1`,
			{
				next: { revalidate: 10000 },
			}
		);

			if(!response.ok) {
				throw new Error(response.statusText);
			}

		const results:TopRatedAPI | TrendingWeekAPI = await response.json();

		

		

	return (
		<main>
			
				<Results results={results.results} />
		
		</main>
	);
}
