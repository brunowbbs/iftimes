import { Link, useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  preco: number;
  nome: string;
  img: string;
};

export default function Products() {
  const { id } = useParams();

  const [products, setProducts] = useState<Product[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  async function getProductsByTime() {
    const token = localStorage.getItem("@token");

    try {
      const response = await api.get(`/times/${id}`, {
        headers: { Authorization: token },
      });

      setProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProductsByTime();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* <div className="mt-5 mx-5">
        <h2 className="text-lg">Cruzeiro {id}</h2>
      </div> */}
      <div className=" flex flex-1 ">
        <div className="p-5 flex flex-wrap">
          {products.map((product, index) => (
            <Link to="/products/id" key={index}>
              <div className="w-[160px] h-[250px] m-2 bg-[#454545] flex flex-col justify-center items-center rounded-md p-2 cursor-pointer hover:bg-[#323232] hover:transition-all">
                <img className="w-[80px]" src={product.img} />
                <p className="mt-5 text-center text-sm">{product.nome}</p>
                <p className="mt-2 text-center text-lg">R$ {product.preco}</p>
              </div>
            </Link>
          ))}

          {!isLoading && products.length < 1 ? (
            <p>Nenhum produto encontrado</p>
          ) : null}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// const MOCK = [
//   {
//     id: 1,
//     name: "Camisa Cruzeiro I Adidas 24/25 Azul - P",
//     img: "https://static.cruzeiro.com.br/produtos/camisa-cruzeiro-i-2425-sn-torcedor-adidas-masculina/10/FB9-4316-310/FB9-4316-310_zoom1.jpg?ts=1710173015?ims=400x",
//     price: 299.0,
//   },
//   {
//     id: 2,
//     name: "Camisa Cruzeiro I Adidas 24/25 Azul - M",
//     img: "https://static.cruzeiro.com.br/produtos/camisa-cruzeiro-i-2425-sn-torcedor-adidas-masculina/10/FB9-4316-310/FB9-4316-310_zoom1.jpg?ts=1710173015?ims=400x",
//     price: 299.0,
//   },
// ];
