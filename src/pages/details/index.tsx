import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Details() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mt-5 mx-5">
        <h2 className="text-lg">Cruzeiro</h2>
      </div>

      <div className="flex gap-5 flex-1 mt-5">
        <div className="">
          <img
            className="w-[250px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold">Nome do produto</h3>
          <p className="text-sm font-light">Fabricante</p>

          <p className="text-2xl font-bold mt-2">R$ 299.00</p>

          <p className="text-xs font-light mt-5">Descrição</p>

          <p className="flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ut sollicitudin ex. Nullam varius dapibus nulla, ut consectetur arcu
            convallis et. Nunc ipsum lectus, ultricies eu lorem in, pretium
            euismod mauris. Sed metus ante, laoreet ut consectetur et, euismod
            at lectus. Ut mattis rhoncus nulla nec efficitur. Mauris sagittis
            lacus in quam semper, ac malesuada nunc bibendum. Sed placerat
            placerat justo id egestas. Mauris vitae dui quis purus maximus
            fermentum. Duis laoreet odio vitae nibh gravida, a iaculis augue
            pretium. Praesent mollis neque vel sapien porta, id ultricies sapien
            tristique.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
