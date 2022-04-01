import { getTokenFromLocalstorage } from '../utils';
import { useState, useEffect } from 'react';
import { getProfile } from '../services/profileService';

export function useProfile() {
  const token = getTokenFromLocalstorage('uAccessToken');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const profile = await getProfile(token);
        if (!profile) return;

        setError(null);
        setProfile(profile);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [token]);

  return [profile, error];
}