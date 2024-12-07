import { IDataBlog } from "@/features/blog/interfaces";
import { fetcherPost, optionsOnceTime } from "@/utils/axios";
import { useState } from "react";
import useSWR from "swr";

const useOurBlog = () => {
    const [filter, setFilter] = useState({
        search: "",
        community_id: ''
      });
    const URL = [`/blog/me`, filter];
    const { data, isLoading, mutate } = useSWR<IDataBlog[]>(
      URL,
      fetcherPost,
      {
        ...optionsOnceTime,
      }
    );
    return { setFilter, data, isLoading, mutate }
}

export default useOurBlog;