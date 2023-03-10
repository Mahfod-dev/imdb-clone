import { TopRatedAPI,TrendingWeekAPI } from "../../interface/api";

export const fetchAPI = async (genre:string) => {
  const response = await fetch(
		`https://api.themoviedb.org/3/${
			genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
		}?api_key=${process.env.API_KEY}&language=en-US&page=1`,{
            next:{revalidate:10000}
        });

     

  const data:TopRatedAPI | TrendingWeekAPI = await response.json();
  return data;
}

