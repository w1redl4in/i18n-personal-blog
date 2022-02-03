import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { useChangeLanguage } from "../../../hooks/change-language.hook";
import { buttons } from "../../../types/navbar.buttons";
import { IconButton } from "../buttons/icon-button";

interface NavbarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
export function NavbarDrawer({ isOpen, onClose }: NavbarDrawerProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  const { t } = useChangeLanguage();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <Stack>
            <Button
              onClick={toggleColorMode}
              leftIcon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
            >
              {t("general.changeColorText")}
            </Button>
            {buttons.map((button, key) => (
              <IconButton
                key={key}
                responsive={button.responsive}
                locale={button.locale as "pt" | "en" | "es"}
                imagePath={button.imagePath}
                text={button.text}
              />
            ))}
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            {t("general.closeText")}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
