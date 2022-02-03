import useTranslation from "next-translate/useTranslation";
import { useMediaQuery, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
export function useChangeLanguage(type?: string) {
  const { t, lang } = useTranslation(type ?? "common");
  const [isLessThan600px] = useMediaQuery("(max-width: 600px)");

  const toast = useToast();

  useEffect(() => {
    toast.closeAll();

    toast({
      title: t("general.availableLanguages.message"),
      description: t(`general.availableLanguages.${lang}`),
      status: "info",
      duration: 3000,
      isClosable: true,
      position: isLessThan600px ? "top-left" : "bottom-right",
    });
  }, [lang]);

  return {
    t,
    lang,
  };
}
