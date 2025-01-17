const apiKey = 'dXjYZ2WhSDl2SPkXYx7BV2uridSQOpUA8XNIdXtf';

export async function fetchEpicImages(date) {
    const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`);
    if (!response.ok) {
        throw new Error('Failed to fetch EPIC data');
    }
    return response.json();
}
