'use client';

export default function Error({
	error,
	reset,
}:{
	error: Error
	reset: () => void;
}) {
	return (
		<div className='text-center mt-10'>
			<h1>Something went wrong</h1>
			<button className='hover:text-amber-600' onClick={() => reset()}>
				Try Again
			</button>
		</div>
	);
}

