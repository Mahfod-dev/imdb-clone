import { Result } from "@/src/interface/api"
import Image from "next/image"

export function Results({results}:{results:Result[]}) {

console.log(results)

  return (
		<div>
			{results.map((result) => (
				<div key={result.id}>
					<h1>{result.title}</h1>
					<Image
						src={`https://image.tmdb.org/t/p/original/${
							result.backdrop_path || result.poster_path
						}`}
						width={500}
						height={300}
						className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
						style={{
							maxWidth: '100%',
							height: 'auto',
						}}
						placeholder='blur'
						blurDataURL='/spinner.svg'
						alt='image is not available'
					></Image>
				</div>
			))}
		</div>
  );
  }