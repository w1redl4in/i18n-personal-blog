import Link from "next/link";
import { Button, Image, useColorModeValue, Text } from "@chakra-ui/react";
import { useChangeLanguage } from "../../../../hooks/change-language.hook";

interface IconButtonProps {
  locale: "pt" | "en" | "es";
  text?: string;
  imagePath: string;
  responsive: boolean;
}

export function IconButton({
  locale,
  imagePath,
  text,
  responsive,
}: IconButtonProps) {
  const { lang } = useChangeLanguage();

  const background = useColorModeValue("facebook.200", "whatsapp.200");
  const color = useColorModeValue("facebook.300", "whatsapp.800");

  return responsive ? (
    <Link href="/" locale={locale} passHref>
      <Button background={locale === lang && background}>
        <Image width={5} src={imagePath} alt={imagePath} />
      </Button>
    </Link>
  ) : (
    <Link href="/" locale={locale} passHref>
      <Button background={locale === lang && background}>
        <Text color={locale === lang && color}>{text} &nbsp;</Text>
        <Image width={5} src={imagePath} alt={imagePath} />
      </Button>
    </Link>
  );
}
