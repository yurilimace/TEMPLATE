import { AxiosInstance } from "axios"
import { ODataCargoResponse } from "src/shared/interfaces/Cargo/types"
import backend from ".."

class CargoRepository {

  private http: AxiosInstance

  constructor() {
    this.http = backend
  }

  async listAll() {
    return await this.http.get<ODataCargoResponse>('odata/Cargo?$count=true')
  }
}

export default new CargoRepository()
