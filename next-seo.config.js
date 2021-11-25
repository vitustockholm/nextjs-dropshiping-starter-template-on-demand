const description =
  "Fully automated store with Snipcart, Printful, and Next.js";
const title = "Mystore";
const url = "https://my.nextdropshippingstarter.com";

const seo = {
  title,
  titleTemplate: "Your | Next.js Dropshipping Starter",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "",
    site: "",
  },
};

export { seo as defaultSeo, url as defaultUrl };
