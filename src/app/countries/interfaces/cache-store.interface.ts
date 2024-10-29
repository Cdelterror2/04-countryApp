import { CountryI } from "./country";
import { Region } from "./region.type";

export interface CacheStore {
  byCapital:   TermCountries;
  byCountries: TermCountries;
  byRegion:    RegionCountries;
}

export interface TermCountries{
  term: string;
  countries: CountryI[];
}

export interface RegionCountries{
  region:    Region;
  countries: CountryI[];
}
