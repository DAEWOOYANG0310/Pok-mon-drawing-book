import { detailFetch } from "@/app/apis/Pokemon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemon = await detailFetch(params.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              {pokemon.korean_name}
            </h1>
            <span className="text-xl font-semibold text-gray-600">
              #{pokemon.id.toString().padStart(4, "0")}
            </span>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.korean_name}
              width={240}
              height={240}
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">키</p>
              <p className="text-xl font-bold text-gray-800">
                {pokemon.height / 10}m
              </p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">몸무게</p>
              <p className="text-xl font-bold text-gray-800">
                {pokemon.weight / 10}kg
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">타입</h2>
              <div className="flex flex-wrap gap-2">
                {pokemon.types.map((type: any) => (
                  <div
                    key={type.id}
                    className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {type.type.korean_name}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">특성</h2>
              <div className="flex flex-wrap gap-2">
                {pokemon.abilities.map((ability: any) => (
                  <div
                    key={ability.id}
                    className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {ability.ability.korean_name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">기술</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {pokemon.moves.map((move: any) => (
                <div
                  key={move.move.name}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full text-center"
                >
                  {move.move.korean_name}
                </div>
              ))}
            </div>
          </div>

          <Link href="/">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
              뒤로가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
