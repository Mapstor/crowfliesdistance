export async function geocodeAddress(address: string) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`;
  
  const res = await fetch(url, {
    headers: { 'User-Agent': 'CrowFliesDistance/1.0' }
  });
  
  const data = await res.json();
  if (!data.length) return null;
  
  return {
    lat: parseFloat(data[0].lat),
    lon: parseFloat(data[0].lon),
    display: data[0].display_name
  };
}