export const HomePage = () => {
  return (
    <div className="text-blue-700">
      <h1 className="font-bold">Bienvenido a GameStore</h1>
      <div className="bg-white flex items-center gap-5">
        <div className="shadow-md bg-white flex items-center">
          <p className="text-gray-400">Juegos Disponibles</p>
        </div>
        <div className="shadow-md bg-white flex items-center">
          <p className="text-gray-400">Ofertas Activas</p>
        </div>
      </div>
    </div>
  );
};
