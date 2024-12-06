import Home from "@/features/home";
import Post from "@/features/post";
import LayoutGlobal from "@/layout";

export default function HomePage() {
  return (
    <LayoutGlobal>
      <Home />

      <Post />
    </LayoutGlobal>
  );
}
