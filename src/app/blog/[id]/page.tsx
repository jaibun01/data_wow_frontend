import BackButton from "@/components/common/BackButton";
import BlogDetailPage from "@/features/blog-detail";

export default function BlogDetialPage() {
  return (
    <>
      <BackButton sx={{ mt: "36px", mb: "40px" }} />
      <BlogDetailPage />
    </>
  );
}
