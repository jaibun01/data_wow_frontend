import { useState } from "react";

const useOurBlog = () => {
    const [openModelCreate, setOpenModelCreate] = useState(false);
      
    return { openModelCreate, setOpenModelCreate }
}

export default useOurBlog;