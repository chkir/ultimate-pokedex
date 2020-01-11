import React from "react";
import { Highlight, connectCurrentRefinements } from "react-instantsearch-dom";

import { TypeIcon } from "../TypeIcon";
import { useShiny } from "../ShinyMode";
import { PokemonLink } from "../PokemonLink";
import {
  Card,
  CardFrame,
  CardTitle,
  Dcard,
  PokemonArtwork,
  PokemonName,
  Trigger
} from "./styles";

export const PokemonHit = connectCurrentRefinements(({ pokemon }) => {
  const spriteUrl = useShiny(pokemon.artworkUrl, pokemon.spriteShinyUrl);
  const type = pokemon.types[0];

  return (
    <Dcard className="w-1/2 md:w-1/4 xl:w-1/5 mt-24">
      <PokemonLink pokemonId={pokemon.id}>
        <Trigger />
        <Trigger />
        <Trigger />
        <Trigger />
        <Trigger />
        <Trigger />
        <Trigger />
        <Trigger />
        <Trigger />

        <Card type={type} className="p-6 mx-3 bg-gray-900 rounded-lg">
          <CardFrame>
            <PokemonArtwork
              className="-mt-20"
              artworkUrl={spriteUrl}
              alt={pokemon.names.en}
            />
            <CardTitle>
              <PokemonName
                type={type}
                className={`font-pokemon text-center text-2xl text-type-${type.name.toLowerCase()}`}
              >
                <Highlight tagName="mark" attribute="names.en" hit={pokemon} />
              </PokemonName>

              <div className="text-center whitespace-no-wrap text-xs italic mt-0 mb-6 text-gray-600">
                <Highlight tagName="mark" attribute="names.fr" hit={pokemon} />
                {" - "}
                <Highlight tagName="mark" attribute="names.ja" hit={pokemon} />
              </div>
            </CardTitle>
            <div className="absolute pl-2 pt-1">
              <span className="text-xl font-bold text-gray-900">
                {pokemon.id}
              </span>
            </div>
            <ul className="absolute top-0 right-0 p-2">
              {pokemon.types.map(type => (
                <li className="mb-2" key={type.name}>
                  <TypeIcon type={type.name} />
                </li>
              ))}
            </ul>
          </CardFrame>
        </Card>
      </PokemonLink>
    </Dcard>
  );
});
