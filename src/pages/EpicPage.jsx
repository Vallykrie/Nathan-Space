import { useState, useEffect } from 'react';
import { fetchEpicImages } from '../utils/api';
import Navbar from '../components/navbar';
import "../index.css"

export default function EpicPage() {
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        if (!selectedDate) return;

        const loadImages = async () => {
            try {
                const data = await fetchEpicImages(selectedDate);
                const formattedImages = data.map((img) => ({
                    url: `https://epic.gsfc.nasa.gov/archive/natural/${selectedDate.replace(/-/g, '/')}/jpg/${img.image}.jpg`,
                    caption: img.date,
                }));

                // Preload images
                formattedImages.forEach((img) => {
                    const imgLoader = new Image();
                    imgLoader.src = img.url;
                });

                setImages(formattedImages);
                setCurrentImageIndex(0);
            } catch (error) {
                console.error('Failed to fetch EPIC images:', error);
            }
        };

        loadImages();
    }, [selectedDate]);

    const handleSliderChange = (e) => {
        setCurrentImageIndex(parseInt(e.target.value, 10));
    };

    return (
        <div className="h-screen px-4">
            <Navbar></Navbar>
            <h1 className="text-3xl font-bold text-center mb-8">NASA EPIC Image Viewer</h1>
            {/* Date Selector */}
            <div className="flex items-center justify-center mb-6">
                <input
                    type="date"
                    min={new Date('2015-06-13').toISOString().split('T')[0]}
                    max={new Date().toISOString().split('T')[0]}
                    className="p-2 rounded border border-gray-700 bg-gray-800 text-white"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
            </div>

            {/* Image Slider */}
            {images.length > 0 && (
                <>
                    <div className="mb-4">
                        <img
                            src={images[currentImageIndex].url}
                            alt="EPIC"
                            className="w-full max-w-[600px] max-h-[400px] mx-auto rounded-lg shadow-lg object-contain selector"
                        />
                        <p className="text-center text-sm text-gray-500 mt-2">
                            {images[currentImageIndex].caption}
                        </p>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max={images.length - 1}
                        value={currentImageIndex}
                        onChange={handleSliderChange}
                        className="w-full"
                    />
                </>
            )}

            {images.length === 0 && selectedDate && (
                <p className="text-center text-gray-400">No images available for the selected date.</p>
            )}
        </div>
    );
}
