import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors</h1>
      {actors.map((actor) => {
        return( 
          <div>
            <h3>{actor.name}</h3>
            <ul>{actor.movies.map((movie) => {
              return <li>{movie}</li>
            })}
            </ul>
          </div>
        )
      })}

    </div>)
}

export default Actors;
