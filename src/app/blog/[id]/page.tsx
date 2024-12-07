import dynamic from "next/dynamic";
const BlogDetailPage = dynamic(() => import('@/features/blog-detail'), { ssr: false })
const BackButton = dynamic(() => import('@/components/common/BackButton'), { ssr: false })

export default function BlogDetialPage() {
  return (
    <>
      <BackButton sx={{ mt: "36px", mb: "40px" }} />
      <BlogDetailPage />
    </>
  );
}
