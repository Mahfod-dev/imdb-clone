import Provider from './Provider'
import Header from '../components/Header/Header'
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
        <Header/>
				{children}

        </Provider>
			</body>
		</html>
  );
}
