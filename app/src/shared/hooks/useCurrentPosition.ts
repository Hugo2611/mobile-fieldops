import { useCallback } from 'react';
import { Geolocation } from '@capacitor/geolocation';

// Necessite @capacitor/geolocation (npm i @capacitor/geolocation) et la permission
// de localisation declaree sur iOS/Android.
export function useCurrentPosition() {
  const getCurrentPosition = useCallback(async () => {
    // TODO récupérer la position actuelle à l'aide de @capacitor/geolocation :
    try {
      const coordinates = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
      });
      return {
        longitude: coordinates.coords.longitude,
        latitude: coordinates.coords.latitude,
      };
    } catch (e) {
      console.warn('Geolocation error, falling back to default position:', e);
      return { longitude: 4.8095159, latitude: 45.7648829 };
    }
  }, []);

  return { getCurrentPosition };
}
