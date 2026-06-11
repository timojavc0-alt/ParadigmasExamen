
interface Props{
    title: string,
    genre: string,
    price: number,
    available: boolean,
    icon?: React.ReactNode
}

export const GameCard = ({ title, genre, price, available = true, icon}: Props) => {
  return (
    <div className="bg-gray-50 border rounded-lg shadow-md p-4">
        {icon}
        <h2 className="font-bold text-black">
          {title}
        </h2>
        <p className="text-gray-300">{genre}</p>
        {price}
        
        <p className={`${available? "text-white bg-green-500" : "text-white bg-red-500"}`}>
          Disponible
        </p>
    </div>
  )
}
