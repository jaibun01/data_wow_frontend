import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR, { KeyedMutator } from "swr";
import * as yup from "yup"
import { IDataBlog, IDataCommunity } from "../interfaces";
import { fetcher, fetcherPost, optionsOnceTime } from "@/utils/axios";
import { BlogServices } from "../services";
import toast from "react-hot-toast";
const blogServices = new BlogServices()
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

 type IPropHoookCreate = {
  refreshMyBlog?: KeyedMutator<IDataBlog[]>
 }
const useCreateBlog = ({ refreshMyBlog }: IPropHoookCreate) => {
    const [openModelCreate, setOpenModelCreate] = useState<boolean | IDataBlog>(false);
    const [loadingForm, setOpenloadingForm] = useState(false);
    const [filter, setFilter] = useState({
      search: "",
      community_id: ''
    });

    const URLCommunity = [`/community`];
    const { data: community } = useSWR<IDataCommunity[]>(
      URLCommunity,
      fetcher,
      {
        ...optionsOnceTime,
      }
    );
    const URL = [`/blog/all`, filter];
    const { data, isLoading, mutate } = useSWR<IDataBlog[]>(
      URL,
      fetcherPost,
      {
        ...optionsOnceTime,
      }
    );
 
    const methods = useForm<IFormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
          title: "",
          description: "",
          community: "",
        }
      })

    useEffect(() => {
      const data = (openModelCreate as IDataBlog)
      methods.reset({
        title: openModelCreate? data?.title : "",
        description: openModelCreate? data?.description : "",
        community: openModelCreate? data?.community_id?._id : "",
      })
    }, [methods, openModelCreate])

    const onCreate = (data: IFormValues) => {
      setOpenloadingForm(true)
      blogServices.create({...data, community_id: data.community}).then((res) => {
        if (res._id) {
          setOpenModelCreate(false)
          mutate()
          refreshMyBlog?.()
          toast.success('Create blog success')
        } else {
          toast.error('Create blog failed')
        }
        setOpenloadingForm(false)
      }).catch((err: Error) => {
        console.log(err)
        toast.error(err.message || 'Create blog failed')
        setOpenloadingForm(false)
      })
    }

    const onEdit = (data: IFormValues) => {
      setOpenloadingForm(true)
      blogServices.edit({
        ...data, 
        community_id: data.community, 
        _id: (openModelCreate as IDataBlog)?._id
      }).then((res) => {
        if (res._id) {
          setOpenModelCreate(false)
          refreshMyBlog?.()
          toast.success('Update blog success')
        } else {
          toast.error('Update blog failed')
        }
        setOpenloadingForm(false)
      }).catch((err: Error) => {
        console.log(err)
        toast.error(err.message || 'Update blog failed')
        setOpenloadingForm(false)
      })
    }
    const onSubmit = (data: IFormValues) => {
      if (typeof openModelCreate !== 'boolean') {
        onEdit(data)
      } else {
        onCreate(data)
      }
    }
    
    return { 
      openModelCreate, 
      setOpenModelCreate,
      onSubmit,
      methods,
      data, 
      isLoading,
      loadingForm,
      community,
      setFilter
    }
}

export default useCreateBlog;