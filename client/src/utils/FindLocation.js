import React, { useState, useEffect } from "react";

const LocationButton = () => {
  const [location, setLocation] = useState(null);
  const apiKey = "Ag1oRvw3BjVXh8qqJvM7b2LGlq4Dw07pmTjCR3aJxC2VLCJZy2fvX2s2-2QmqN_a";
  const [mapData, setMapData] = useState(null);
  console.log(mapData);
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Error getting location. Please try again.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };


  useEffect(() => {
    const fetchMapData = async () => {
      try {
        if (location && location.latitude && location.longitude) {
          const url = `https://dev.virtualearth.net/REST/v1/LocationRecog/${location.latitude},${location.longitude}?key=${apiKey}`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Error fetching map data");
          }
          const data = await response.json();
          setMapData(data);
        }
      } catch (e) {
        console.error(e);
        console.log("Error in fetching data from bing api");
      }
    };

    fetchMapData();
  }, [location, apiKey]);

  return (
    <div>
      <button onClick={handleGetLocation} className="text-white">
        Know Your Location
      </button>
      {location && (
        <>
          <div className="text-white">
            <h2>Your Location:</h2>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
          {
            // <div className="text-white">{mapData}</div>
        }
        </>
      )}
    </div>
  );
};

export default LocationButton;
