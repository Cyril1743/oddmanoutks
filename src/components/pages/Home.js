import React from "react";
import {Divider, Grid, Heading, Image, Spacer, Stack, Text} from "@chakra-ui/react";
import profilePicture from "../../images/profile picture.jpg"
import ServiceCard from "../ServiceCard";
import { GiHandSaw } from "react-icons/gi";
import { FaFaucetDrip, FaTrowelBricks } from "react-icons/fa6";
import { FaBolt, FaPaintRoller } from "react-icons/fa";

export default function Home() {
    return (
        <div>
            <Grid>
                <Heading m={"auto"} mb={5}>Odd Man Out</Heading>

                <Image m={"auto"} src={profilePicture} boxSize={"500px"} borderRadius={'full'} />
                <Text m={"auto"} fontStyle={"italic"}>Serving the greater Topeka area for 15 years</Text>
                <Divider/>
            </Grid>
            <Stack spacing={3} alignItems={"center"}>
                <Heading m={"auto"} mt={4}>
                    Services
                </Heading>
                <ServiceCard icon={GiHandSaw} title={"Carpentry"} tasks={["Deck Repairs", "Custom trim installations", "Bespoke woodworking projects"]}/>
                <ServiceCard icon={FaFaucetDrip} title={"Plumbing"} tasks={["Fixing Leaky Faucets", "Unclogging drains", "Installations"]} />
                <ServiceCard icon={FaBolt} title={"Eletrical"} tasks={["Outlet replacements", "Lighting Upgrades", "Ceiling Fan Installations"]}/>
                <ServiceCard icon={FaPaintRoller} title={"Painting"} tasks={["Interior", "Exterior"]}/>
                <ServiceCard icon={FaTrowelBricks} title={"Drywall"} tasks={["Patching holes", "Fixing Water Damage", "Taping and Texturing"]}/>
                <Divider/>
            </Stack>
            <Grid mt={4}>
            <Heading m={"auto"}>
                Contact
            </Heading>
            </Grid>
        </div>
    )
}