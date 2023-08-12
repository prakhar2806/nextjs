import { NextPage } from "next";
import NextLink from "next/link";
import { Heading, Link, Flex } from "@chakra-ui/core";

const AboutPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        This is about page
      </Heading>
      <NextLink href="/" passHref> 
        <Link>Go to home page</Link>
      </NextLink>
      <NextLink href="/about/me">Go to About Me page</NextLink>
    </Flex>
  );
};

export default AboutPage;
