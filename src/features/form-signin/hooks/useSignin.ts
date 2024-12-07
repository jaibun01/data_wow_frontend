
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
const schema = yup.object().shape({
    username: yup
        .string()
        .required("Email is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
}); 

export type InputsFomrSignIn = {
    username: string
    password: string
  }
const useSignIn = () => {
    const methods = useForm<InputsFomrSignIn>(
        {
            resolver: yupResolver(schema),
        }
    )
    const onSubmit: SubmitHandler<InputsFomrSignIn> = (data) => console.log(data)
    return { methods, onSubmit } 
}   

export default useSignIn;