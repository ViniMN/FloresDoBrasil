import * as React from "react"
import {ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme, AbsoluteCenter, HStack, Flex, Spacer,  Tabs, TabList, TabPanels, Tab, TabPanel,} from "@chakra-ui/react"
import Nav from "./components/header"
import Home from "./components/page"
import Sidebar from "./components/sidebar"
import ForYou from "./components/foryou"

export const App = () => (
  <ChakraProvider>
  <Box w={100} height={'75px'} pos='fixed' zIndex={2}><Nav/></Box>
  <Flex zIndex={1}>
  <Box><Sidebar/></Box>
  <Box marginTop={'10px'} w='100%' zIndex={1}> 
  <Tabs marginTop={'75px'}>
  <TabList>
    <Tab>Home</Tab>
    <Tab>For You</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Home/>
    </TabPanel>
    <TabPanel>
    <ForYou/>
    </TabPanel>
  </TabPanels>
  </Tabs>
  </Box>
  </Flex>
  </ChakraProvider>
)
