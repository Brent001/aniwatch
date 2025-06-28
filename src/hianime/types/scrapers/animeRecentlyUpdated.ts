import type { Anime } from "../anime.js";

export type ScrapedRecentlyUpdatedAnime = {
    animes: Anime[];
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
};