export type RegisterProps = {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  users?: string[];
  isLoading: boolean;
};
