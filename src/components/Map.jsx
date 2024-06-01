import React, { useState, useRef } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  Autocomplete,
  DirectionsRenderer,
  LoadScript,
} from "@react-google-maps/api";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import Footer from "./Footer";

const center = {
  name: "Vanvihar National Park & Zoo",
  lat: 23.229,
  lng: 77.364,
};

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();
  const destinationRef = useRef();

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <>
      <h1 className=" font-font-poppins font-bold text-[30px] text-center m-10 text-green-800">
        "Van Vihar National Park & Zoo"
      </h1>
      <LoadScript
        googleMapsApiKey="AIzaSyBn2U4uuM6cYvUiqtpv9njvPWhYH7veyXo"
        libraries={["places"]}
      >
        <Flex position="relative" flexDirection="column" alignItems="center">
          <Box position="absolute">
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: "100vw", height: "100vh" }}
              onLoad={(map) => setMap(map)}
            >
              <Marker
                position={center}
                onClick={() => setSelectedMarker(center)}
              />
              {selectedMarker && (
                <InfoWindow
                  position={{
                    lat: selectedMarker.lat,
                    lng: selectedMarker.lng,
                  }}
                  onCloseClick={() => setSelectedMarker(null)}
                >
                  <div>
                    <h1>Place: {selectedMarker.name}</h1>
                    <h1>Latitude: {selectedMarker.lat}</h1>
                    <h1>Longitude: {selectedMarker.lng}</h1>
                  </div>
                </InfoWindow>
              )}
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </Box>
          <Box
            p={4}
            borderRadius="lg"
            m={4}
            bgColor="white"
            shadow="base"
            minW="container.md"
            zIndex="1"
          >
            <HStack spacing={2} justifyContent="space-between">
              <Box flexGrow={1}>
                <Autocomplete>
                  <Input type="text" placeholder="Origin" ref={originRef} />
                </Autocomplete>
              </Box>
              <Box flexGrow={1}>
                <Autocomplete>
                  <Input
                    type="text"
                    placeholder="Destination"
                    ref={destinationRef}
                  />
                </Autocomplete>
              </Box>
              <ButtonGroup>
                <Button
                  colorScheme="pink"
                  type="submit"
                  onClick={calculateRoute}
                >
                  Calculate Route
                </Button>
                <IconButton
                  aria-label="center back"
                  icon={<FaTimes />}
                  onClick={clearRoute}
                />
              </ButtonGroup>
            </HStack>
            <HStack spacing={4} mt={4} justifyContent="space-between">
              <Text>Distance: {distance} </Text>
              <Text>Duration: {duration} </Text>
              <IconButton
                aria-label="center back"
                icon={<FaLocationArrow />}
                isRound
                onClick={() => {
                  map.panTo(center);
                  map.setZoom(15);
                }}
              />
            </HStack>
          </Box>
        </Flex>
      </LoadScript>
    </>
  );
};

export default Map;
