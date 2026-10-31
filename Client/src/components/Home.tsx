import { Box, Container, Tabs, Text } from "@chakra-ui/react";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";

const Home = () => {
  return (
    <Container maxW="xl">
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15 px 0"
        borderRadius="lg"
        borderWidth="2px"
      >
        <Text fontSize="4xl" fontFamily="work sans">
          ChitChat App
        </Text>
      </Box>

      {/* LoginBox */}
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="2px">
        {/* tabs */}
        <Tabs.Root
          defaultValue="login"
          variant="plain"
          css={{
            "--tabs-indicator-bg": "colors.gray.subtle",
            "--tabs-indicator-shadow": "shadows.xs",
            "--tabs-trigger-radius": "radii.full",
          }}
        >
          <Tabs.List mb="1em">
            <Tabs.Trigger value="login">login</Tabs.Trigger>
            <Tabs.Trigger value="signup">signup</Tabs.Trigger>
            <Tabs.Indicator />
          </Tabs.List>

          {/* loginPage */}
          <Tabs.Content value="login"><Login /></Tabs.Content>
          {/* signup page */}
          <Tabs.Content value="signup"><Signup /></Tabs.Content>

        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default Home;
