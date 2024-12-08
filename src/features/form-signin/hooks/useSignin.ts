
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { SignInMutation } from "../services";
import { useState } from "react";
import { AxiosError } from "axios";
import { helper } from "@/utils/helpers";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useProfileStore from "@/stores/useProfileStore";
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

const signInMutation = new SignInMutation()
const useSignIn = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const { setDataProfile } = useProfileStore()
    const methods = useForm<InputsFomrSignIn>(
        {
            resolver: yupResolver(schema),
        }
    )
    const onSubmit: SubmitHandler<InputsFomrSignIn> = (data) => {
        console.log(data)
        setLoading(true)
        signInMutation.login(data).then((res) => {
            if (res.access_token) {
                toast.success('Sign in successfully')
                helper.setLocalStorage({ key: 'token', value: res.access_token })
                signInMutation.getProfile().then((res) => {
                    setDataProfile(res)
                    router.push(`/`)
                }).catch((err: AxiosError) => {
                    toast.error(err?.message || 'Sign in failed')
                    setLoading(false)
                })
            }
            setLoading(false)
        }).catch((err: AxiosError) => {
            toast.error(err?.message || 'Sign in failed')
            setLoading(false)
        })
        
    }
    return { methods, onSubmit, loading, setLoading } 
}   

export default useSignIn;