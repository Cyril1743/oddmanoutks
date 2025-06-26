import React from "react";
import { Center, Flex, Grid, Heading, Image, List, ListItem, Spacer, Text, UnorderedList } from "@chakra-ui/react";
import profilePicture from "../../images/profile picture.jpg"

export default function Home() {
    return (
        <div>
            <Grid>
                <Heading m={"auto"} >Odd Man Out</Heading>
                <Text m={"auto"}>No job too small!</Text>
                <Image m={"auto"} src={profilePicture} boxSize={"500px"} borderRadius={'full'} />
                <Text m={"auto"}>Serving the greater Topeka area for 15 years</Text>
                <Spacer s/>
            </Grid>
            <Grid>
                <Heading m={"auto"}>
                    Services
                </Heading>
                <UnorderedList>
                    <ListItem>
                        Carpentry:
                        <UnorderedList>
                            <ListItem>
                                Deck repairs
                            </ListItem>
                            <ListItem>
                                Custom trim installations
                            </ListItem>
                            <ListItem>
                                Bespoke woodworking projects
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        Plumbing
                        <UnorderedList>
                            <ListItem>
                                Fixing leaky fauces
                            </ListItem>
                            <ListItem>
                                Unclogging drains
                            </ListItem>
                            <ListItem>
                                Installations
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        Electrical
                        <UnorderedList>
                            <ListItem>
                                Outlet replacements
                            </ListItem>
                            <ListItem>
                                Lighting Upgrades
                            </ListItem>
                            <ListItem>
                                Ceiling fan installations
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        Painting
                        <UnorderedList>
                            <ListItem>
                                Interior/Exterior
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        Drywall repair
                        <UnorderedList>
                            <ListItem>
                                Patching holes
                            </ListItem>
                            <ListItem>
                                Fixing water damage to walls
                            </ListItem>
                            <ListItem>
                                Taping and Texturing
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>

                    </ListItem>
                </UnorderedList>
            </Grid>
        </div>
    )
}