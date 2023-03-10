// Generated by https://quicktype.io

export interface TopRatedAPI {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface ResultTop {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	name?: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	first_air_date?: string;
}

// Generated by https://quicktype.io

export interface TrendingWeekAPI {
	page: number;
	results: Result[];
	total_pages: number;
	total_results: number;
}

export interface ResultTrend {
	adult: boolean;
	backdrop_path: string;
	id: number;
	name?: string;
	original_language: OriginalLanguage;
	original_name?: string;
	overview: string;
	poster_path: string;
	media_type: MediaType;
	genre_ids: number[];
	popularity: number;
	first_air_date?: string;
	vote_average: number;
	vote_count: number;
	origin_country?: string[];
	title?: string;
	original_title?: string;
	release_date?: string;
	video?: boolean;
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

export enum OriginalLanguage {
    En = "en",
    Ja = "ja",
}
