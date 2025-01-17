import { MoreArticles } from "../components/template/MoreArticles";
import { getAllPostsFrontMatter } from "../lib/posts";
import { PER_PAGE } from "../lib/constants";
import { SEO } from "../components/organisms/SEO";

export default function Home({ posts, totalPosts }) {
  return (
    <>
      <SEO />

      <MoreArticles posts={posts} totalPosts={totalPosts} currentPage={1} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPostsFrontMatter();
  const posts = allPosts.slice(0, PER_PAGE);

  return {
    props: { posts, totalPosts: allPosts.length },
  };
}

Home.isHome = true;
