import { ODataResponse } from "../OData/types";

export interface Cargo {
  id: number;
  descricao: string;
  gestor: boolean;
  nivel: number;
  codigoSAP: string;
}

export interface ODataCargoResponse extends ODataResponse<Cargo> {}
