import Head from "next/head";

interface Props {
  description: string;
  keywords: string;
  title: string;
  type: string;
  image: string;
  twitterCard: string;
}

const SEO: React.FC<Props> = ({
  description,
  keywords,
  title,
  type,
  image,
  twitterCard,
}) => {
  const metaDescription = description;
  const metaType = type || "website";
  const metaImage = image;
  // const metaUrl = url ?
  //     `https://www.ekrut.com${url}` : 'https://www.ekrut.com/media';
  const metaTwitterCard = twitterCard || `summary`;
  const metas = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: `keywords`,
      content: keywords,
    },
    // {
    //     name: `og:url`,
    //     content: metaUrl,
    // },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:image`,
      content: metaImage,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: metaType,
    },
    {
      name: `twitter:card`,
      content: metaTwitterCard,
    },
    {
      name: `twitter:site`,
      content: "@naofalleoagusta",
    },
    {
      name: `twitter:creator`,
      content: "@naofalleoagusta",
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];
  return (
    <Head>
      <title>{title}</title>
      {metas.map((item, index) => (
        <meta
          {...(item?.name
            ? { name: item?.name }
            : { property: item?.property })}
          content={item?.content}
          key={`${index}-${item?.name}`}
        />
      ))}
    </Head>
  );
};

export default SEO;
