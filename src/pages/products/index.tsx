import { Link, useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./services";

export default function Products() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["@Products"],
    queryFn: () => getProducts(id),
    refetchOnWindowFocus: true,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 ">
        <div className="p-5 flex flex-wrap">
          {data?.data.map((product, index) => (
            <Link to={`/products/${product?.id}`} key={index}>
              <div className="w-[160px] h-[250px] m-2 bg-[#454545] flex flex-col justify-center items-center rounded-md p-2 cursor-pointer hover:bg-[#323232] hover:transition-all">
                <img className="w-[80px]" src={product.img} />
                <p className="mt-5 text-center text-sm">{product.nome}</p>
                <p className="mt-2 text-center text-lg">R$ {product.preco}</p>
              </div>
            </Link>
          ))}

          {!isLoading && data?.data && data?.data.length < 1 ? (
            <p>Nenhum produto encontrado</p>
          ) : null}
        </div>
      </div>

      <Footer />
    </div>
  );
}
