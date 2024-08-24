import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

import { getTimes } from "./services";

export default function Home() {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["@times"],
    queryFn: getTimes,
    refetchOnMount: true,
  });

  function getInfoUserLogged() {
    const token = localStorage.getItem("@token");

    if (!token) {
      navigate("/", { replace: true });
    }
  }

  console.log(data);

  useEffect(() => {
    getInfoUserLogged();
  }, []);

  useEffect(() => {
    if (error) {
      alert("Houve um erro ao buscar os times");
    }
  }, [error]);

  // async function getTimes() {
  //   const token = localStorage.getItem("@token");

  //   try {
  //     const response = await api.get("/times", {
  //       headers: { Authorization: token },
  //     });
  //     setTimes(response.data);
  //   } catch (error) {
  //     alert("Houve um erro ao buscar os times");
  //   }
  // }

  // useEffect(() => {
  //   getTimes();
  // }, []);

  if (isLoading) {
    return <h4>Loading....</h4>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className=" flex flex-1 ">
        <div className="p-5 flex flex-wrap">
          {data?.data.map((time) => (
            <div
              onClick={() => navigate(`/products/${time.id}`)}
              className="w-[160px] h-[180px] m-2 bg-[#454545] flex flex-col justify-center items-center rounded-md p-2 cursor-pointer hover:bg-[#323232] hover:transition-all"
            >
              <img className="w-[100px]" src={time.img} />
              <p className="mt-5 text-center">{time.nome}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// const MOCK = [
//   {
//     id: 1,
//     name: "Cruzeiro",
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/1200px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png",
//   },
//   {
//     id: 2,
//     name: "Palmeiras",
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png",
//   },
//   {
//     id: 3,
//     name: "Red Bull Bragantino",
//     img: "https://upload.wikimedia.org/wikipedia/pt/9/9e/RedBullBragantino.png",
//   },
// ];
