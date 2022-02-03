import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Stack,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { IArticle } from "../../../../types/article";
import { useChangeLanguage } from "../../../hooks/change-language.hook";

interface ArticleInfoProps {
  isOpen: boolean;
  onClose: () => void;
  article: IArticle;
}

export function ArticleInfo({ onClose, isOpen, article }: ArticleInfoProps) {
  const color = useColorModeValue("facebook.300", "whatsapp.200");

  const { title, textBody, originalSource, originalSourceText } = article;

  const { t } = useChangeLanguage();

  return (
    <Modal
      size="xl"
      scrollBehavior="inside"
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {textBody.map((textB, key) => (
            <Stack my={5} key={key}>
              <Text fontWeight="bold" fontSize="2xl">
                {textB.subtitle}
              </Text>
              <Text>{textB.text}</Text>
            </Stack>
          ))}
          <Flex mt={10} justifyContent="center">
            <Link href={originalSource} target="_blank" color={color}>
              {originalSourceText}
            </Link>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            {t("general.closeText")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
