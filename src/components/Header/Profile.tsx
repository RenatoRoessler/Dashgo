import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface profileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData }: profileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Renato Roessler</Text>
          <Text color="gray.300" fontSize="samll">
            renatoroessler@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Renato Roessler"
        src="https://github.com/renatoroessler.png"
      ></Avatar>
    </Flex>
  );
}
