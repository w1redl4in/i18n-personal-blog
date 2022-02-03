import useTranslation from "next-translate/useTranslation";

export function useChangeLanguage(type?: string) {
  const { t, lang } = useTranslation(type ?? "common");

  return {
    t,
    lang,
  };
}
