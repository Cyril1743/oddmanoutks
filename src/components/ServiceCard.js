import React from "react";
import { Box, Heading, Icon, ListItem, Stack, UnorderedList, useColorModeValue } from "@chakra-ui/react"
import { FaCheckCircle } from "react-icons/fa";


export default function ServiceCard({ icon, title, tasks }) {
    return (
        <Box
            minW={"sm"}
            borderWidth={"1px"}
            borderRadius={"lg"}
            overflow={"hidden"}
            bg={useColorModeValue("white", "gray.700")}
            _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
            transition={"all 0.2s"}

        >
            <Stack spacing={4} align={"center"}>
                {icon && <Icon mt={4} as={icon} w={10} h={10} />}
                <Heading size="md" textAlign={"center"}>
                    {title}
                </Heading>
                <UnorderedList
                    styleType={"none"}
                    ml={0}
                    pl={0}
                    spacing={2}
                    w={"100%"}
                >
                    {tasks.map((item) => (
                        <ListItem mb={3} key={item}>
                            <Icon as={FaCheckCircle} /> {item}
                        </ListItem>
                    ))}
                </UnorderedList>
            </Stack>
        </Box>
    )
}