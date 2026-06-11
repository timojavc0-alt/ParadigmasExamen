import { GameCard } from "../../games/GameCard";

export const CatalogPage = () => {
  return (
    <div>
      <h1 className="text-blue-700">Catalogo</h1>
      <div className="bg-white px-5 gap-5">
        <GameCard title="The Legend of Zelda" genre="Aventura" price={59.99} available/>
        <GameCard title="Fifa 25" genre="Deportes" price={49.99} available/>
        <GameCard title="Elden Ring" genre="Aventura" price={59.99} available={false}/>
      </div>
    </div>
  );
};
