import { useState, useEffect } from 'react';

import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) 
{
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error, setError] = useState();

// By using async and await 
  useEffect(() => {
    async function fetchPlaces() 
    {
      setIsLoading(true);
      try{
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places,position.coords.latitude, position.coords.longitude);

          setAvailablePlaces(sortedPlaces);
          setIsLoading(false);
        })
      }catch(error){
        setError({message: error.message || 'Could not fetch places, please try again later.'});
      }
    }
    fetchPlaces();
  },[])

  if(error)
  {
    return <Error title="An error occured! " message={error.message} />
  }


  // useEffect(() => {
  //   fetch('http://localhost:3000/places').then((response) => {
  //   return response.json();
  // }).then((resData) => {
  //   setAvailablePlaces(resData.places);
  // })
  // },[])

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
