import { detailFetch } from "@/app/apis/Pokemon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemon = await detailFetch(params.id);
  console.log(pokemon);

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <p className="text-2xl font-bold text-gray-800">
            {pokemon.korean_name}
          </p>
          <p className="text-lg text-gray-600">
            #{pokemon.id.toString().padStart(4, "0")}
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.korean_name}
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">키</p>
            <p className="text-lg font-semibold">{pokemon.height / 10}m</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">몸무게</p>
            <p className="text-lg font-semibold">{pokemon.weight / 10}kg</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">기술</h3>
          <div className="grid grid-cols-2 gap-2">
            {pokemon.moves.slice(0, 20).map((move) => (
              <div
                key={move.move.name}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded"
              >
                {move.move.korean_name}
              </div>
            ))}
            <Link href={"/"}>
              <button className="bg-blue-800 text-blue-100 text-sm font-medium px-2 py-1 rounded  ">
                뒤로가기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
