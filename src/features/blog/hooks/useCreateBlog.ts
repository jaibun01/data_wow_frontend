import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup"

export type IFormValues = {
    title: string;
    description: string;
    community: string;
  }
const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    community: yup.string().required(),
  })
  .required()
const useCreateBlog = () => {
    const [openModelCreate, setOpenModelCreate] = useState(false);
    const methods = useForm<IFormValues>({
        resolver: yupResolver(schema),
      })
   
      
      const onSubmit = (data: IFormValues) => console.log(data)
    
    return { 
        openModelCreate, 
        setOpenModelCreate,
        onSubmit,
        methods
    }
}

export default useCreateBlog;