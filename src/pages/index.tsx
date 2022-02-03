import { Flex } from "@chakra-ui/react";
import { Article } from "../components/article";
import { Navbar } from "../components/navbar";
import { IArticle } from "../types/article";
import { useChangeLanguage } from "./hooks/change-language.hook";
import { useMemo } from "react";

export default function IndexPage() {
  const { t, lang } = useChangeLanguage();

  const articles = useMemo(
    () => t("articles", {}, { returnObjects: true }) as IArticle[],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang, t]
  );

  return (
    <>
      <Navbar />
      <Flex
        alignItems="top"
        flexWrap="wrap"
        justifyContent={["center", "center", "center", "space-evenly"]}
        minHeight="100vh"
      >
        {articles.map((article, i) =>
          Array(15)
            .fill("")
            .map(() => <Article key={i} article={article} />)
        )}
      </Flex>
    </>
  );
}
