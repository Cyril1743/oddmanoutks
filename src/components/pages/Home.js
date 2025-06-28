import React from "react";
import { Divider, Grid, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import profilePicture from "../../images/profile picture.jpg"
import ServiceCard from "../ServiceCard";
import { GiHandSaw, GiRake } from "react-icons/gi";
import { FaFaucetDrip, FaFireFlameCurved, FaTrowelBricks } from "react-icons/fa6";
import { FaBolt, FaPhoneAlt } from "react-icons/fa";
import logo from "../../images/oddman-logo.gif"
import { IoIosSend } from "react-icons/io";

export default function Home() {
    return (
        <div>
            <Grid>
                <Image src={logo} m={"auto"} />
                <Heading m={"auto"} mb={5}>Odd Man Out</Heading>
                <Image m={"auto"} src={profilePicture} boxSize={"500px"} borderRadius={'full'} />
                <Text m={"auto"} fontStyle={"italic"}>Serving the greater Topeka area for 15 years</Text>
                <Divider />
            </Grid>
            <Stack spacing={3} alignItems={"center"}>
                <Heading m={"auto"} mt={4}>
                    Services
                </Heading>
                <ServiceCard icon={GiHandSaw} title={"Carpentry"} tasks={["Deck repairs", "Custom trim installations", "Bespoke woodworking projects"]} />
                <ServiceCard icon={FaFaucetDrip} title={"Plumbing"} tasks={["Fixing leaky faucets", "Unclogging drains", "Installations"]} />
                <ServiceCard icon={FaBolt} title={"Eletrical"} tasks={["Outlet replacements", "Lighting upgrades", "Ceiling fan installations"]} />
                <ServiceCard icon={GiRake} title={"Exterior"} tasks={["Fence repairs/installations", "Yard work", "Small concrete jobs"]} />
                <ServiceCard icon={FaTrowelBricks} title={"Drywall"} tasks={["Patching holes", "Small sheetrock repairs"]} />
                <ServiceCard icon={FaFireFlameCurved} title={"Welding"} tasks={["Repair", "Modification", "Light custom manufacturing", "Most kinds of Steel/Aluminum"]} />
                <Divider />
            </Stack>
            <Grid mt={4} m={"auto"}>
                <Heading m={"auto"}>
                    Contact
                </Heading>
                <Text m={"auto"}>Bruce can be contacted at:</Text>
                <Text m={"auto"}> <Icon as={FaPhoneAlt} />: "620.757.1286"</Text>
                <Text m={"auto"}><Icon as={IoIosSend} />: <a
                    href="mailto:blove@g.emporia.edu">blove@g.emporia.edu</a> </Text>
            </Grid>
        </div>
    )
}