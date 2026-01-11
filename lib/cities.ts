import { supabase } from './supabase';

export interface City {
  id: number;
  name: string;
  slug: string;
  country: string;
  country_code: string;
  lat: number;
  lon: number;
  population?: number;
  description?: string;
  search_rank?: number;
}

export async function searchCities(query: string, limit = 5) {
  const { data } = await supabase
    .from('cities')
    .select('id, name, slug, country, lat, lon')
    .ilike('name', `%${query}%`)
    .order('search_rank', { ascending: false })
    .limit(limit);
  
  return data || [];
}

export async function getCityBySlug(slug: string) {
  const { data } = await supabase
    .from('cities')
    .select('*')
    .eq('slug', slug)
    .single();
  
  return data;
}

export function createPairSlug(cityA: string, cityB: string): string {
  return [cityA, cityB].sort().join('-to-');
}

export function parsePairSlug(slug: string): { cityA: string; cityB: string } | null {
  if (!slug || typeof slug !== 'string') return null;
  const parts = slug.split('-to-');
  if (parts.length !== 2) return null;
  return { cityA: parts[0], cityB: parts[1] };
}

export async function getTopCityPairs(limit = 10) {
  const { data: cities } = await supabase
    .from('cities')
    .select('slug')
    .order('search_rank', { ascending: false })
    .limit(10);
  
  if (!cities || cities.length < 2) return [];
  
  const pairs: string[] = [];
  for (let i = 0; i < Math.min(cities.length - 1, limit); i++) {
    pairs.push(createPairSlug(cities[i].slug, cities[i + 1].slug));
  }
  
  return pairs;
}