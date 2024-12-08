import serviceApi from "@/utils/axios"
import { IRequsetComment, IResponseComment } from "../interfaces"

export class CommentMutation {
    public async createComment(
      request: IRequsetComment,
    ): Promise<IResponseComment> {
      try {
        const res = await serviceApi.post<IResponseComment>(
          `/comment`,
          request,
        )
        const data = res.data
  
        if (!data || !data._id) throw new Error()
  
        return data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        throw new Error(error)
      }
    }
  }