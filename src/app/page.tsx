import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Inter } from 'next/font/google'
import { fetchAPI } from '../helpers/fetchAPI';
import { Results } from '../components/Results';


const inter = Inter({ subsets: ['latin'] });

export default async function Home({
	searchParams,
}: {
	searchParams: Params;
}) {
	const genre = searchParams.genre || 'fetchTrending';

	const response = await fetchAPI(genre);

	;

	return (
		<main>
	<Results results={response.results} />
			
		</main>
	);
}
