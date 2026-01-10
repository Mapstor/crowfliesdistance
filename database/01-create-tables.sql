-- Enable fuzzy search extension
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Drop existing table if exists
DROP TABLE IF EXISTS cities;

-- Create cities table
CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  country VARCHAR(100) NOT NULL,
  country_code CHAR(2),
  lat DECIMAL(10, 6) NOT NULL,
  lon DECIMAL(10, 6) NOT NULL,
  population INTEGER,
  description TEXT,
  search_rank INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for efficient searching
CREATE INDEX idx_cities_slug ON cities(slug);
CREATE INDEX idx_cities_search_rank ON cities(search_rank DESC);
CREATE INDEX idx_cities_name_trgm ON cities USING gin(name gin_trgm_ops);
CREATE INDEX idx_cities_country ON cities(country);
CREATE INDEX idx_cities_location ON cities(lat, lon);