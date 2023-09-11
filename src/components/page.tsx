import React, { ReactNode } from 'react'
import {  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Heading, Button, useDisclosure, Text,} from '@chakra-ui/react'
import arvore from './img/ipê-amarelo.png'
import pdv from './img/pata-de-vaca.jpg'
import rasteira from './img/rasteira.jpg'
import rueliavermelha from './img/ruelia-vermelha.png'
import frutifera from './img/guatambu.png'
import guarana from './img/guarana.jpg'
export default function Home (){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
<Accordion zIndex={10}>
  <AccordionItem>
    <h2>
      <AccordionButton bgImage={(arvore)} px={4} bgPosition="center" w='100%' h='75px' bgRepeat="no-repeat" bgSize={'100%'} borderRadius={'full'} _hover={{}}>
        <Box as="span" flex='1' textAlign='left' >
          <Heading color={'white'} textShadow={'3px 1px #000000'}>Árvores</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Box as='button'  onClick={onOpen} bgImage={(arvore)} px={4} bgPosition="center" w='100%' h='50px' bgRepeat="no-repeat" bgSize={'100%'} _hover={{}}><Heading textAlign='left' color={'white'}>Ipê-Amarelo</Heading></Box>
    </AccordionPanel>
    <AccordionPanel pb={4}>
      <Box as='button'  onClick={onOpen} bgImage={(pdv)} px={4} bgPosition="center" w='100%' h='50px' bgRepeat="no-repeat" bgSize={'100%'} _hover={{}}><Heading textAlign='left' color={'white'}>Pata de Vaca</Heading></Box>
    </AccordionPanel>
  </AccordionItem>



  <AccordionItem>
    <h2>
      <AccordionButton bgImage={(rasteira)} px={4} bgPosition="center" w='100%' h='75px' bgRepeat="no-repeat" bgSize={'100%'} borderRadius={'full'} marginTop={'10px'} _hover={{}}>
        <Box as="span" flex='1' textAlign='left'  >
          <Heading color={'white'} textShadow={'3px 1px #000000'}>Rasteiras</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} marginTop={'10px'}>
      <Box as='button'  onClick={onOpen} bgImage={(rasteira)} px={4} bgPosition="center" w='100%' h='50px' bgRepeat="no-repeat" bgSize={'100%'} _hover={{}}><Heading textAlign='left' color={'white'}>Botão-de-Lapela</Heading></Box>
    </AccordionPanel>
    <AccordionPanel pb={4}>
      <Box as='button'  onClick={onOpen} bgImage={(rueliavermelha)} px={4} bgPosition="center" w='100%' h='50px' bgRepeat="no-repeat" bgSize={'100%'} _hover={{}}><Heading textAlign='left' color={'white'}>Ruélia-Vermelha</Heading></Box>
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
          <ModalHeader><Box bgImage={(pdv)} px={4} bgPosition="center" w='100%' h='75px' bgRepeat="no-repeat" bgSize={'100%'}><Heading color={'white'} textShadow={'3px 3px #000000'}>A ser adicionado!</Heading></Box></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>A ser adicionado!</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </AccordionPanel>
  </AccordionItem>




  <AccordionItem>
    <h2>
      <AccordionButton bgImage={(frutifera)} px={4} bgPosition="center" w='100%' h='75px' bgRepeat="no-repeat" bgSize={'100%'} borderRadius={'full'} marginTop={'10px'} _hover={{}}>
        <Box as="span" flex='1' textAlign='left'  >
          <Heading color={'white'} textShadow={'3px 1px #000000'}>Frutíferas</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} marginTop={'10px'}>
      <Box as='button'  onClick={onOpen} bgImage={(frutifera)} px={4} bgPosition="center" w='100%' h='50px' bgRepeat="no-repeat" bgSize={'100%'} _hover={{}}><Heading textAlign='left' color={'white'}>Guatambu</Heading></Box>
    </AccordionPanel>
    <AccordionPanel pb={4}>
      <Box as='button'  onClick={onOpen} bgImage={(guarana)} px={4} bgPosition="center" w='100%' h='50px' bgRepeat="no-repeat" bgSize={'100%'} _hover={{}}><Heading textAlign='left' color={'white'}>Guaraná</Heading></Box>
    </AccordionPanel>
  </AccordionItem>
</Accordion>)}