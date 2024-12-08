import serviceApi from "@/utils/axios"
import { IDataBlog, IRequestCreateBlog, IRequestEditBlog, IResCreateBlog } from "../interfaces"

export class BlogServices {
  public async getAll(
  ): Promise<IDataBlog[]> {
    try {
      const res = await serviceApi.get<IDataBlog[]>(
        `/blog`,
      )
      const data = res.data

      if (!data) throw new Error()

      return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error)
    }
  }

   public async getById(request: {
    id: string}
  ): Promise<IDataBlog> {
    try {
      const res = await serviceApi.get<IDataBlog>(
        `/blog/${request.id}`,
      )
      const data = res.data

      if (!data) throw new Error()

      return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error)
    }
  }

  public async create(request: IRequestCreateBlog
  ): Promise<IResCreateBlog> {
    try {
      const res = await serviceApi.post<IResCreateBlog>(
        `/blog`,
        request
      )
      const data = res.data

      if (!data) throw new Error()

      return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error)
    }
  }
  public async edit(request: IRequestEditBlog
  ): Promise<IResCreateBlog> {
    try {
      const res = await serviceApi.patch<IResCreateBlog>(
        `/blog/${request._id}`,
        request
      )
      const data = res.data

      if (!data) throw new Error()

      return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error)
    }
  }

  public async delete(request: {
    _id: string}
  ): Promise<IResCreateBlog> {
    try {
      const res = await serviceApi.delete<IResCreateBlog>(
        `/blog/${request._id}`,
      )
      const data = res.data

      if (!data) throw new Error()

      return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error)
    }
  }
}
