import { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h2 className="text-green-700 mt-3">Winning Player</h2>;
    } else {
      title = <h2 className="text-red-700 mt-3">Losing Player</h2>;
    }
    return (
      <div>
        {title}
        <h4 className="text-xl my-2">Total Experience: {this.props.exp}</h4>
        <div className="flex gap-10 flex-wrap items-center justify-center">
          {this.props.pokemons.map((p) => (
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
