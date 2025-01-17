import Head from "next/head";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_ROOT,
  SITE_IMAGE,
  TWITTER,
  OWNER,
} from "../../lib/constants";

export function SEO({ post, category, tag }) {
  const title = post ? `${post.title} | ${SITE_NAME}` : SITE_NAME;
  const description = post ? post.description ?? "" : SITE_DESCRIPTION;
  const ogpType = post ? "website" : "article";
  const image = post ? post.coverImage : SITE_IMAGE;
  const url =
    SITE_ROOT +
    (post
      ? `post/${post.slug}`
      : category
      ? `categories/${category}/1`
      : tag
      ? `tags/${tag}/1`
      : "");

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#7f9cf5" />

      <meta property="og:locale" content="ja_JP" />
      <meta property="og:type" content={ogpType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content={"@" + TWITTER} />
      <meta property="twitter:creator" content={OWNER} />

      <link href={url} rel="canonical" />
      <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
    </Head>
  );
}
