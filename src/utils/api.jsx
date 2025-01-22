const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchEpicImages(date) {
  const url = `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`;
  return fetchData(url, 'Failed to fetch EPIC data');
}

export async function fetchApod(date) {
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;
  return fetchData(url, 'Failed to fetch APOD data');
}

export async function fetchMarsRoverPhotos(roverName, sol) {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&api_key=${apiKey}`;
  return fetchData(url, 'Failed to fetch Mars Rover photos');
}

// Common fetch function to reuse across APIs
async function fetchData(url, errorMessage) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(errorMessage || 'Failed to fetch data');
  }
  return response.json();
}
