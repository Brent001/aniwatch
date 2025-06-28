import type { Anime } from "../anime.js";

export type ScrapedTopUpcomingAnimes = {
    animes: Anime[];
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
};