import { NextPage } from "next";
import Link from "next/link";
import { Heading } from "@chakra-ui/core";

const IndexPage = () => {
  return (
    <>
      <Heading as="h1" size="2xl">
        This is Student Page
      </Heading>
      <Link href="/about">Go to about page</Link>
    </>
  );
};

export default IndexPage;
