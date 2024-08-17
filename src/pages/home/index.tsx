import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className=" flex flex-1 ">
        <div className="p-5 flex flex-wrap">
          {MOCK.map((time) => (
            <div
              onClick={() => navigate("/products")}
              className="w-[160px] h-[180px] m-2 bg-[#454545] flex flex-col justify-center items-center rounded-md p-2 cursor-pointer hover:bg-[#323232] hover:transition-all"
            >
              <img className="w-[100px]" src={time.img} />
              <p className="mt-5 text-center">{time.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const MOCK = [
  {
    id: 1,
    name: "Cruzeiro",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/1200px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png",
  },
  {
    id: 2,
    name: "Palmeiras",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png",
  },
  {
    id: 3,
    name: "Red Bull Bragantino",
    img: "https://upload.wikimedia.org/wikipedia/pt/9/9e/RedBullBragantino.png",
  },
];
