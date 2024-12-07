"use client";

import dynamic from "next/dynamic";
const OurBlog = dynamic(() => import('@/features/our-blog'), { ssr: false })
 
export default function OurBlogPage() {
  return (
    <>
      <OurBlog />
    </>
  );
}
