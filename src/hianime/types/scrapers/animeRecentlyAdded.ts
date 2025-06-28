import type { Anime } from "../anime.js";

export type ScrapedRecentlyAddedAnime = {
    animes: Anime[];
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
};