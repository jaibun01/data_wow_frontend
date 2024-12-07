import serviceApi from "@/utils/axios"
import { IRequsetLogin, IResGetProfile, IResLogin } from "../interfaces"

export class SignInMutation {
  public async login(
    request: IRequsetLogin,
  ): Promise<IResLogin> {
    try {
      const res = await serviceApi.post<IResLogin>(
        `/auth/login`,
        request,
      )
      const data = res.data

      if (!data || !data.access_token) throw new Error()

      return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error)
    }
  }

  public async getProfile(
  ): Promise<IResGetProfile> {
    try {
      const res = await serviceApi.get<IResGetProfile>(
        `/auth/profile`,
      )
      const data = res.data

      if (!data || !data.sub) throw new Error()

      return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error)
    }
  }
}
