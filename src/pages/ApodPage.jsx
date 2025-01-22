import { useState, useEffect } from "react";
import NavBar from "../components/navbar";

const APOD = () => {
  const [apodData, setApodData] = useState(null);
  const [date, setDate] = useState("");

  const apiKey = "dXjYZ2WhSDl2SPkXYx7BV2uridSQOpUA8XNIdXtf";

  useEffect(() => {
    fetchAPOD();
  }, [date]);

  const fetchAPOD = async () => {
    const url = date
      ? `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`
      : `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setApodData(data);
    } catch (error) {
      console.error("Error fetching APOD data:", error);
    }
  };

  return (
    <div className="min-h-screen px-4">
      <NavBar></NavBar>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Astronomy Picture of the Day
        </h1>
        <input
          type="date"
          className="mb-4 p-2 bg-gray-800 border border-gray-700 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {apodData ? (
          <div className="max-w-4xl text-center">
            <h2 className="text-2xl font-semibold mb-2">{apodData.title}</h2>
            {apodData.media_type === "image" ? (
              <img
                src={apodData.url}
                alt={apodData.title}
                className="w-full rounded-lg shadow-lg mb-4"
              />
            ) : (
              <iframe
                src={apodData.url}
                title={apodData.title}
                className="w-full aspect-video rounded-lg shadow-lg mb-4"
                allowFullScreen
              ></iframe>
            )}
            <p className="text-gray-400 text-sm mb-2">{apodData.date}</p>
            <p className="text-lg">{apodData.explanation}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default APOD;
