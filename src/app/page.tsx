import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className='h-screen bg-green-50 flex justify-center items-center md:bg-green-200'>
			<p className='text-3xl'>mahfod</p>
		</main>
	);
}
