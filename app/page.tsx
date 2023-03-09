import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Banner from './components/Banner';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className='h-screen bg-green-50 flex justify-center items-center md:bg-green-200'>
			<Banner />
		</main>
	);
}
