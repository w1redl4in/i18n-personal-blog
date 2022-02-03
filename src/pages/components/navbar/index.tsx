import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { useChangeLanguage } from "../../hooks/change-language.hook";
import { NavbarButtons } from "./buttons";
export function Navbar() {
  const background = useColorModeValue("gray.200", "gray.700");
  const { t } = useChangeLanguage();

  return (
    <Box background={background} height="5em">
      <Flex
        justifyContent="space-between"
        px={6}
        height="100%"
        alignItems="center"
      >
        <Box>
          <Heading>{t("general.appName")}</Heading>
        </Box>
        <NavbarButtons />
      </Flex>
    </Box>
  );
}
