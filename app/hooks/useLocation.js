import  { useState,useEffect } from "react";
import * as Location from "expo-location";

export default function useLocation() {

    const [location, setLocation] = useState();
  
    const getLocation = async () => {
      try {
          const { granted } = await Location.requestForegroundPermissionsAsync();
          if (!granted) return;
          const {
            coords: { latitude, longitude },
          } = await Location.getLastKnownPositionAsync(); // we use this (getLastKnownPositionAsync) rathre (currentLocation) because the latter takes few seconds to respond.
          
            setLocation({ latitude, longitude });
          
      } catch (error) {
          console.log(error)
      }
  };
  useEffect(() => {
    getLocation(); // we cannot pass async function to useEffect, we put it in a function then call it here
  }, []);
    
    return location;
};
