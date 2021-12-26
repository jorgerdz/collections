import cheerio from "cheerio";

export async function get({ query }) {
  console.log(query);
  const url = query.get("url");
  console.log(url);

  if (!url) {
    return {
      status: 400,
      body: { message: "missing parameter 'url'" }
    };
  }
  const response = await fetch(url);
  const text = await response.text();
  const $ = cheerio.load(text);
  const tags = {
    title:
      $('meta[property="og:title"]').attr("content") ||
      $("title").text() ||
      $('meta[name="title"]').attr("content"),
    description:
      $('meta[property="og:description"]').attr("content") ||
      $('meta[name="description"]').attr("content"),
    url: $('meta[property="og:url"]').attr("content"),
    site_name: $('meta[property="og:site_name"]').attr("content"),
    image:
      $('meta[property="og:image"]').attr("content") ||
      $('meta[property="og:image:url"]').attr("content"),
    icon:
      $('link[rel="icon"]').attr("href") ||
      $('link[rel="shortcut icon"]').attr("href"),
    keywords:
      $('meta[property="og:keywords"]').attr("content") ||
      $('meta[name="keywords"]').attr("content")
  };
  return {
    body: tags
  };
}
