import { Inter } from "next/font/google";
import { Button, Flex, Stack, Text, Image, Box, Grid } from "@chakra-ui/react";
import "@fontsource/roboto-condensed";
import "@fontsource/dm-serif-text";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Flex
        width="100%"
        pt={{ base: 8, md: "10vh" }}
        pb={{ base: 8, md: "10vh" }}
        backgroundColor="#f0f0f0"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Flex ml={10} mr={10}>
          <Flex flexWrap="wrap">
            <Text
              mr={3}
              color="black"
              fontFamily={"Roboto Condensed"}
              fontSize={40}
            >
              Unlock
            </Text>
            <Text
              mr={3}
              color="black"
              fontFamily={"Roboto Condensed"}
              fontSize={40}
            >
              Your
            </Text>
            <Text
              mr={3}
              backgroundImage="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(87,157,153,0.7989320728291316) 38%, rgba(44,153,236,0.6488413547237077) 62%);"
              backgroundClip="text"
              color="transparent"
              fontWeight={800}
              fontFamily={"DM Serif Text"}
              fontSize={40}
            >
              Potential
            </Text>
            <Text
              mr={3}
              color="black"
              fontFamily={"Roboto Condensed"}
              fontSize={40}
            >
              with
            </Text>
            <Text
              mr={3}
              backgroundImage="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(87,157,153,0.7989320728291316) 38%, rgba(44,153,236,0.6488413547237077) 62%);"
              backgroundClip="text"
              color="transparent"
              fontWeight={800}
              fontFamily={"DM Serif Text"}
              fontSize={40}
            >
              Coach.ai
            </Text>
            <Text mt={4} color="#878787">
              Coach.ai is an intelligent coach that leverages AI to give you
              feedback on your sports performance. Upload a video and give it a
              try!
            </Text>
            <Flex mt={6} gap={4}>
              <Button variant={"main"} onClick={() => router.push("/try")}>
                Get Started
              </Button>
              <Link offset={0} smooth={true} duration={500} to={"technology"}>
                <Button
                  backgroundColor="#d9d9d9"
                  color="black"
                  _hover={{ color: "#185c8f" }}
                >
                  How it Works
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex></Flex>
        </Flex>
        <Flex>
          <Box
            m={10}
            as="iframe"
            src={"https://www.youtube.com/embed/qXuP9bv_LYU"}
            width={{ base: "373", md: "500px" }}
            height={{ base: "210", md: "315" }}
          ></Box>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        backgroundColor="#143a57"
        direction={{ base: "column", md: "row" }}
      >
        <Flex align="center" m={10} width={{ base: "unset", md: "60%" }}>
          <Stack>
            <Text id="technology" color="#878787" mb={-2}>
              TECHNOLOGY
            </Text>
            <Text fontSize={30} fontWeight={700}>
              Intelligent coaching, brought to you
            </Text>
            <Text color="#d6d6d6">
              Coach.ai revolutionizes sports coaching through artificial
              intelligence. By uploading your performance videos, you can tap
              into a world of data-driven feedback, enhancing your skills and
              achieving your goals. We deciphers nuances in your technique,
              dissect your movements, and detect patterns in your performance
              that might have otherwise remained hidden. Every kick, every
              swing, every sprint – all are meticulously scrutinized by
              Coach.ai's AI engine.
            </Text>
            <Grid
              mt={4}
              templateRows="repeat(2, 1fr)" // Create 4 rows
              templateColumns="repeat(2, 1fr)" // Create 4 columns
              gap={4} // Add gap between grid items (adjust as needed)
            >
              <Stack>
                <Text fontWeight={700} mb={-2}>
                  Live Webcam Analysis
                </Text>
                <Text color="#d6d6d6" fontSize={13}>
                  Capture real-time video footage through your webcam and
                  harness the power of AI to receive instant, data-driven
                  feedback on your performance.
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight={700} mb={-2}>
                  Post-Performance Report
                </Text>
                <Text color="#d6d6d6" fontSize={13}>
                  After your training or game, access a comprehensive analysis
                  of your performance, complete with personalized insights and
                  actionable recommendations.
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight={700} mb={-2}>
                  Multi-Sport Support
                </Text>
                <Text color="#d6d6d6" fontSize={13}>
                  Enjoy tailored coaching and analysis across a range of sports,
                  all in one place, empowering you to excel in your athletic
                  pursuits like never before.
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight={700} mb={-2}>
                  Replayability
                </Text>
                <Text color="#d6d6d6" fontSize={13}>
                  Review your past sessions, analyze your progress, and relive
                  your achievements with ease. This feature empowers you to
                  continuously refine your skills.
                </Text>
              </Stack>
            </Grid>
          </Stack>
        </Flex>

        <Image width={{ base: "unset", md: "40%" }} src="runningGuy.png" />
      </Flex>
    </>
  );
}
