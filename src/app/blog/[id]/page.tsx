import BackButton from "@/components/global/BackButton";
import BlogDetailPage from "@/features/blogDetail";

export default function BlogDetialPage() {
  return (
    <>
      <BackButton sx={{ mt: "36px", mb: "40px" }} />
      <BlogDetailPage />
    </>
  );
}
