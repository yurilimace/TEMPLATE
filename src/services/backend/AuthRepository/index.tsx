import { AxiosInstance } from "axios"
import { LoginResponse } from "src/shared/interfaces/Auth/types"
import backend from ".."

class AuthRepository {

  private http: AxiosInstance

  constructor() {
    this.http = backend
  }

  async login() {
    return await this.http.get<LoginResponse>('/api/Auth/LoggedUser?username=juan.neto')
  }
}

export default new AuthRepository()
