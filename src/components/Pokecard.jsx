import { Component } from "react";
import { POKE_API } from "../assets/utils/api";

class Pokecard extends Component {
  render() {
    const imgSrc = `${POKE_API}${this.props.id}.png`;

    return (
      <div className="lineerColor rounded-md  w-40 p-3 cursor-pointer">
        <h3 className="font-bold text-2xl text-white">{this.props.name}</h3>
        <div className="my-2">
          <img
            className="w-28 m-auto hover:scale-[1.2] hover:opacity-100 opacity-90 transition-[500ms] p-1"
            src={imgSrc}
            alt={this.props.name}
          />
        </div>
        <div>Type: {this.props.type}</div>
        <div>EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
