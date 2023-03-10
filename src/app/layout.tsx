import Provider from './Provider'
import {Header,Navbar} from '../components/Header'
import './globals.css'

export const metadata = {
  title: 'IMBD',
  description: 'IMDB Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang='en'>
			<body>
				<Provider>
					<Header />
					<Navbar />
					{children}
				</Provider>
			</body>
		</html>
  );
}
