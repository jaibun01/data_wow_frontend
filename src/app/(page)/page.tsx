"use client";
import dynamic from "next/dynamic";
const Post = dynamic(() => import('@/features/blog'), { ssr: false })
const Home = dynamic(() => import('@/features/home'), { ssr: false })

export default function HomePage() {
  return (
    <>
      <Home />
      <Post />
    </>
  );
}
