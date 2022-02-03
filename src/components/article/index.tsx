import { ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Heading,
  Badge,
  Stack,
  useColorModeValue,
  Button,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import { IArticle } from "../../types/article";
import { useChangeLanguage } from "../../hooks/change-language.hook";
import { ArticleInfo } from "./article-info";

interface ArticleProps {
  article: IArticle;
}

export function Article({ article }: ArticleProps) {
  const background = useColorModeValue("gray.100", "gray.700");
  const colorScheme = useColorModeValue("facebook", "whatsapp");

  const { isOpen, onClose, onOpen } = useDisclosure();

  const { t } = useChangeLanguage();

  const { description, title, author, date } = article;

  return (
    <>
      <ArticleInfo isOpen={isOpen} onClose={onClose} article={article} />
      <Box
        background={background}
        m={5}
        p={5}
        maxW="20em"
        maxH="md"
        height="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box>
          <Stack>
            <Tooltip placement="right-end" label={title}>
              <Heading isTruncated>{title}</Heading>
            </Tooltip>
            <Stack direction="row" alignItems="center">
              <Badge
                py={1}
                px={4}
                borderRadius="full"
                colorScheme={colorScheme}
              >
                {author}
              </Badge>
              <Text
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                ml="2"
              >
                {date}
              </Text>
            </Stack>
            <Text isTruncated>{description}</Text>
            <Stack
              justifyContent="space-between"
              direction="row"
              alignItems="center"
            >
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={"gray.300"} />
                ))}
              <Button rightIcon={<ExternalLinkIcon />} onClick={onOpen}>
                {t("general.detailsText")}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
