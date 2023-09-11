import {Box, Flex, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, useColorMode, Center, Img,} from '@chakra-ui/react'
import { FaMoon, FaSun } from "react-icons/fa"
import img from './img/pfp.png'
import headerimg from './img/header.png'
interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box as="a" px={2} py={1}
      rounded={'lg'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bgImage={(headerimg)} px={4} bgPosition="center" w='100%' h='75px' bgRepeat="no-repeat" bgSize={'100%'} pos='fixed' zIndex={2}> 
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={10}>
              <Button onClick={toggleColorMode} marginTop = '35px' boxSize='50px'>
                {colorMode === 'light' ? <FaMoon size={50}/> : <FaSun size={50}/>}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Img
                    marginTop = '25px'
                    boxSize= '65px'
                    borderRadius= 'full'
                    src={img}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                  <Img
                    boxSize= '65px'
                    borderRadius= 'full'
                    src={img}
                  />
                  </Center>
                  <br />
                  <Center>
                    <p>USUÁRIO</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Editar Conta</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}