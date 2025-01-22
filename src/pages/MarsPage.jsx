import { useState, useEffect } from 'react';
import { fetchMarsRoverPhotos } from '../utils/api'; // Import the API function
import Navbar from '../components/navbar';

const MarsGallery = () => {
  const [photos, setPhotos] = useState([]); // State to store fetched photos
  const [loading, setLoading] = useState(false); // State to manage loading
  const [error, setError] = useState(null); // State to handle errors

  const [rover, setRover] = useState('curiosity'); // Selected rover
  const [sol, setSol] = useState(1000); // Sol (Martian day)

  // Function to fetch photos from API
  const fetchPhotos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMarsRoverPhotos(rover, sol);
      setPhotos(data.photos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch photos on component mount or when rover/sol changes
  useEffect(() => {
    fetchPhotos();
  }, [rover, sol]);

  return (
    <div className="min-h-screen px-4">
        <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-center mb-8">Mars Rover Gallery</h1>

      {/* Rover and Sol Filters */}
      <div className="flex justify-center items-center mb-6 gap-4">
        <select
          className="border text-black rounded px-4 py-2"
          value={rover}
          onChange={(e) => setRover(e.target.value)}
        >
          <option value="curiosity">Curiosity</option>
          <option value="opportunity">Opportunity</option>
          <option value="spirit">Spirit</option>
        </select>

        <input
          type="number"
          className="border rounded px-4 text-black"
          value={sol}
          onChange={(e) => setSol(e.target.value)}
          placeholder="Enter Sol"
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={fetchPhotos}
        >
          Fetch Photos
        </button>
      </div>

      {/* Loading and Error Messages */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="border rounded shadow">
            <img
              src={photo.img_src}
              alt={`Mars Rover - ${photo.rover.name}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <p className="text-sm font-bold">Rover: {photo.rover.name}</p>
              <p className="text-sm">Camera: {photo.camera.full_name}</p>
              <p className="text-sm">Date: {photo.earth_date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No Photos Message */}
      {!loading && photos.length === 0 && !error && (
        <p className="text-center mt-6">No photos available for the selected rover and sol.</p>
      )}
    </div>
  );
};

export default MarsGallery;
