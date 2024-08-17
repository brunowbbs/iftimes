import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="mt-5 mx-5">
        <h2 className="text-lg">Cruzeiro</h2>
      </div>
      <div className=" flex flex-1 ">
        <div className="p-5 flex flex-wrap">
          {MOCK.map((product) => (
            <div className="w-[160px] h-[250px] m-2 bg-[#454545] flex flex-col justify-center items-center rounded-md p-2 cursor-pointer hover:bg-[#323232] hover:transition-all">
              <img className="w-[80px]" src={product.img} />
              <p className="mt-5 text-center text-sm">{product.name}</p>
              <p className="mt-2 text-center text-lg">R$ {product.price}</p>
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
    name: "Camisa Cruzeiro I Adidas 24/25 Azul - P",
    img: "https://static.cruzeiro.com.br/produtos/camisa-cruzeiro-i-2425-sn-torcedor-adidas-masculina/10/FB9-4316-310/FB9-4316-310_zoom1.jpg?ts=1710173015?ims=400x",
    price: 299.0,
  },
  {
    id: 2,
    name: "Camisa Cruzeiro I Adidas 24/25 Azul - M",
    img: "https://static.cruzeiro.com.br/produtos/camisa-cruzeiro-i-2425-sn-torcedor-adidas-masculina/10/FB9-4316-310/FB9-4316-310_zoom1.jpg?ts=1710173015?ims=400x",
    price: 299.0,
  },
];
