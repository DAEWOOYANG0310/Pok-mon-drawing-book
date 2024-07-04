"use client";
import { Pokemon } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {pokemons.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          <p className="text-xl font-semibold mt-4 text-gray-700">
            불러오는 중입니다...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {pokemons.map((pokemon) => (
            <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300">
                <div className="p-4 flex flex-col items-center">
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.korean_name}
                    width={120}
                    height={120}
                  />
                  <p className="text-lg font-semibold text-gray-800 mt-2">
                    {pokemon.korean_name}
                  </p>
                  <p className="text-sm text-gray-600">
                    도감번호: {pokemon.id.toString().padStart(3, "0")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
