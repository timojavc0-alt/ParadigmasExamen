import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold">GameStore</span>
          </div>
          <div>
            <div className="hidden md:flex items-center space-x-4 ">
              <Link to={"/"}>Inicio</Link>
              <Link to={"/catalog"}>Catálogo</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
