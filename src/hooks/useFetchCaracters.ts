// src/hooks/useFetchCharacters.ts
import { useState, useEffect } from "react";

interface Character {
  _id: number;
  name: string;
  films: string[];
  imageUrl: string;
}

export const useFetchCharacters = (page: number, pageSize: number = 9) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://api.disneyapi.dev/character?page=${page}&pageSize=${pageSize}`);
        const data = await response.json();
        setCharacters(data.data);
      } catch (err) {
        setError("Failed to fetch characters");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page, pageSize]);

  return { characters, loading, error };
};
