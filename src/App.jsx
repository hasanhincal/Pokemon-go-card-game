import "./App.css";
import PokemonGame from "./components/PokemonGame";

function App() {
  return (
    <>
      <div className="p-5 font-mono max-w-[1240px] h-screen m-auto">
        <h1 className="text-3xl">Pokemon Go Card Game</h1>
        <PokemonGame />
      </div>
    </>
  );
}

export default App;
