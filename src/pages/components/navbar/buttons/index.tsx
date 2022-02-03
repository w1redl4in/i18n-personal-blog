import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  useMediaQuery,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useChangeLanguage } from "../../../hooks/change-language.hook";
import { NavbarDrawer } from "../drawer";
import { IconButton } from "./icon-button";

export function NavbarButtons() {
  const [isLessThen800px] = useMediaQuery("(max-width: 800px)");
  const [isLessThan600px] = useMediaQuery("(max-width: 600px)");

  const { toggleColorMode, colorMode } = useColorMode();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const { t } = useChangeLanguage();

  return (
    <>
      <NavbarDrawer isOpen={isOpen} onClose={onClose} />
      {isLessThan600px ? (
        <Button>
          <HamburgerIcon onClick={onOpen} />
        </Button>
      ) : (
        <HStack>
          {isLessThen800px ? (
            <Button onClick={toggleColorMode}>
              {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
            </Button>
          ) : (
            <Button
              onClick={toggleColorMode}
              leftIcon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
            >
              {t("general.changeColorText")}
            </Button>
          )}
          <HStack>
            {isLessThen800px ? (
              <IconButton responsive locale="pt" imagePath="images/br.svg" />
            ) : (
              <IconButton
                responsive={false}
                locale="pt"
                imagePath="images/br.svg"
                text="Português"
              />
            )}

            {isLessThen800px ? (
              <IconButton responsive locale="en" imagePath="images/en.svg" />
            ) : (
              <IconButton
                responsive={false}
                locale="en"
                imagePath="images/en.svg"
                text="Inglês"
              />
            )}

            {isLessThen800px ? (
              <IconButton responsive locale="es" imagePath="images/es.svg" />
            ) : (
              <IconButton
                responsive={false}
                locale="es"
                imagePath="images/es.svg"
                text="Espanhol"
              />
            )}
          </HStack>
        </HStack>
      )}
    </>
  );
}
