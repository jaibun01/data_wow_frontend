import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react";

const schema = yup
  .object({
    description: yup.string().required(),
  })
  .required()
export type InputsFomrComment = {
    description: string
  }
  
const useFormComment = () => {
    const [openComment, setOpenComment] = useState(false)
    const methods = useForm<InputsFomrComment>(
        {
            resolver: yupResolver(schema),
        }
    )
    const onSubmit: SubmitHandler<InputsFomrComment> = (data) => console.log(data)

    const handleOpenComment = () => setOpenComment(!openComment)
    return {
        methods,
        onSubmit,
        handleOpenComment,
        openComment
    }
}

export default useFormComment;