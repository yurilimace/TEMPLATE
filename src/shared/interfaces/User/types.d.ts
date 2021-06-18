export default interface User {
  id: number;
  cargo: { id: number; descricao: string; nivel: number };
  email: string;
  expiraEm: string | Date;
  foto: string | null;
  funcao: { id: number; descricao: string };
  gestaoDesempenho: boolean;
  matricula: number;
  nomeCompleto: string;
  portalAdmin: false;
  token: string;
  username: string;
}
