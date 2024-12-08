import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { IDataBlog } from "@/features/blog/interfaces";
import { fetcher, optionsOnceTime } from "@/utils/axios";
import useProfileStore from "@/stores/useProfileStore";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { CommentMutation } from "../services";
import toast from "react-hot-toast";
import { IResGetComment } from "../interfaces";

// Extend dayjs with the duration plugin
dayjs.extend(duration);
const schema = yup
  .object({
    content: yup.string().required(),
  })
  .required()
export type InputsFomrComment = {
  content: string
  }
  
const commentMutation = new CommentMutation()
const useFormComment = () => {
    const [openComment, setOpenComment] = useState(false)
    const [loading, setLoading] = useState(false)

    const param = useParams()
    const blogId = param?.id
    const URLBlog = [`/blog/${blogId}`];
    const { data: blog, mutate } = useSWR<IDataBlog>(
      URLBlog,
      fetcher,
      {
        ...optionsOnceTime,
      }
    );

    const URLComment = [`/comment/${blogId}`];
    const { data: comments, mutate: mutateComment } = useSWR<IResGetComment[]>(
      URLComment,
      fetcher,
      {
        ...optionsOnceTime,
      }
    );
    
    const methods = useForm<InputsFomrComment>(
        {
          resolver: yupResolver(schema),
        }
    )
    const onSubmit: SubmitHandler<InputsFomrComment> = (data) => {
      setLoading(true)
      commentMutation.createComment({ ...data, blog_id: blogId as string }).then((res) => {
        if (res._id) {
          setOpenComment(false)
          mutate()
          mutateComment()
          methods.reset()
          toast.success('Create comment success')
        }
        setLoading(false)
      }).catch((err: Error) => {
        console.log(err)
        toast.error(err?.message || 'Create comment failed')
        setLoading(false)
      })
    }

    const handleOpenComment = () => setOpenComment(!openComment)

    const { data } = useProfileStore();
    const x = dayjs();
    const y = dayjs(data.iat * 1000);
    const durations = dayjs.duration(x.diff(y));
    const showTime =
      durations.asHours() > 1
        ? `${durations.asHours()?.toFixed(0)}h`
        : durations.asHours() > 24
        ? `${durations.asDays()?.toFixed(0)}d`
        : `${durations.asMinutes()?.toFixed(0)}m`;
    return {
      methods,
      onSubmit,
      handleOpenComment,
      openComment,
      setOpenComment,
      blog,
      showTime,
      loading,
      comments
    }
}

export default useFormComment;