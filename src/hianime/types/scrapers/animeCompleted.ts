import type { Anime } from "../anime.js";

export type ScrapedCompletedAnime = {
    animes: Anime[];
    genres: string[];
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
};