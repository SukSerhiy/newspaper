export interface IApi {
  getTopHeadlines: (
    params: ITopHeadlinesParams
  ) => Promise<ITopHeadlinesResponse>;
  getGeolocation: () => Promise<any>;
}

export interface ITopHeadlinesParams {
  country: TCountryCode;
  category?: TCategory;
  sources?: string;
  q?: string;
  pageSize?: number;
  page?: number;
}

export interface ITopHeadlinesResponse {
  articles: IArticle[];
}

export interface IArticle {
  title: string;
}

export interface IGeolocation {
  country: {
    iso_code: string;
  };
}

// ==========================================================

export interface IEverythingParams {
  q: string;
  searchIn?: string;
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  from?: string;
  to?: string;
  language?: TLanguage;
  sortBy?: TSortBy;
  pageSize?: number;
  page?: string;
}

// ==========================================================

export interface ISourcesParams {
  category?: TCategory;
  language?: TLanguage;
  country?: TCountryCode;
}

// ==========================================================
export type TCountryCode =
  | 'ae'
  | 'ar'
  | 'at'
  | 'au'
  | 'be'
  | 'bg'
  | 'br'
  | 'ca'
  | 'ch'
  | 'cn'
  | 'co'
  | 'cu'
  | 'cz'
  | 'de'
  | 'eg'
  | 'fr'
  | 'gb'
  | 'gr'
  | 'hk'
  | 'hu'
  | 'id'
  | 'ie'
  | 'il'
  | 'in'
  | 'it'
  | 'jp'
  | 'kr'
  | 'lt'
  | 'lv'
  | 'ma'
  | 'mx'
  | 'my'
  | 'ng'
  | 'nl'
  | 'no'
  | 'nz'
  | 'ph'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'rs'
  | 'ru'
  | 'sa'
  | 'se'
  | 'sg'
  | 'si'
  | 'sk'
  | 'th'
  | 'tr'
  | 'tw'
  | 'ua'
  | 'us'
  | 've'
  | 'za';

export type TCategory =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';

export type TLanguage =
  | 'ar'
  | 'de'
  | 'en'
  | 'es'
  | 'fr'
  | 'he'
  | 'it'
  | 'nl'
  | 'no'
  | 'pt'
  | 'ru'
  | 'sv'
  | 'ud'
  | 'zh';

export type TSortBy = 'relevancy' | 'popularity' | 'publishedAt';
