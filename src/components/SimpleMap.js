import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Box } from '@chakra-ui/react';

function MyComponent({ first, second }) {
  const center = {
    lat: first,
    lng: second,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDoQbL_paQvMmzGLuKhOLjqiOgaaXeOxDw"
  });

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  return isLoaded ? (
    <Box>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </Box>
  ) : (
    <></>
  );
}

export default MyComponent;
