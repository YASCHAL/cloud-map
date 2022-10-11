import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import SearchIcon from "@mui/icons-material/Search";
import "./map.css";
import DehazeIcon from '@mui/icons-material/Dehaze';

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 36.750889,
  lng: 5.056733,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAoXOg4jSEkbibZJuxLbCW6i8JJ8VT-y54",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="map">
      <div className="searchBar">
        <DehazeIcon className="searchIcon" />
        <input
          type="text"
          className="search"
          placeholder=" search place in Google maps"
        />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="carte">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <></>
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
