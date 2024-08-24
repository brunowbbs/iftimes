import { useState } from "react";
import RegisterView from "./view";
import { useQuery } from "@tanstack/react-query";
import { registerServices } from "./services";

export default function Register() {
  const [nome, setNome] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["@usuario"],
    queryFn: registerServices,
  });

  return (
    <RegisterView
      isLoading={isLoading}
      nome={nome}
      setNome={setNome}
      users={data?.data}
    />
  );
}
