import { useState } from "react";

const MoonData = [
  {
    timestamp: "2025-04-20T00:00:00Z",
    location: "New York, USA",
    moon_angle: 179.3,
    visibility: 0.92,
  },
  {
    timestamp: "2025-04-20T00:15:00Z",
    location: "Tokyo, Japan",
    moon_angle: 182.1,
    visibility: 0.89,
  },
  {
    timestamp: "2025-04-20T00:30:00Z",
    location: "Cairo, Egypt",
    moon_angle: 177.6,
    visibility: 0.85,
  },
  {
    timestamp: "2025-04-20T00:45:00Z",
    location: "Sydney, Australia",
    moon_angle: 180.4,
    visibility: 0.94,
  },
  {
    timestamp: "2025-04-20T01:00:00Z",
    location: "Paris, France",
    moon_angle: 176.9,
    visibility: 0.81,
  },
];

export const Body = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(MoonData);
  const [selectedData, setSelectedData] = useState(null);

  const handleSearch = () => {
    const query = search.trim().toLowerCase();
    if (query === "") {
      setFilteredData(MoonData);
    } else {
      setFilteredData(
        MoonData.filter((data) => data.location.toLowerCase().includes(query))
      );
    }
    setSelectedData(null);
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by location"
        />
        <button onClick={handleSearch}>Search</button>
        <button
          className="darkbutton"
          onClick={() => {
            document.body.style.backgroundColor = "black";
          }}
        >
          Dark Mode
        </button>
        <button
          className="whitebutton"
          onClick={() => {
            document.body.style.backgroundColor = "white";
          }}
        >
          light Mode
        </button>
      </div>
      <div className="main-div">
        {selectedData ? (
          <>
            <button onClick={() => setSelectedData(null)}>Back</button>
            <div className="moon-container">
              <h2 className="location">{selectedData.location}</h2>
              <p>Time: {selectedData.timestamp}</p>
              <p>Moon Angle: {selectedData.moon_angle}°</p>
              <p>Visibility: {selectedData.visibility}%</p>
            </div>
          </>
        ) : (
          filteredData.map((data, index) => (
            <div
              key={index}
              className="moon-container"
              onClick={() => setSelectedData(data)}
              style={{ cursor: "pointer" }}
            >
              <h2 className="location">{data.location}</h2>
              <p>Time: {data.timestamp}</p>
              <p>Moon Angle: {data.moon_angle}°</p>
              <p>Visibility: {data.visibility}%</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};
