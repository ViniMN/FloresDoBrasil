import React, { ReactNode } from 'react'
import {  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Heading, Button, useDisclosure, Text, Flex, VStack,} from '@chakra-ui/react'
import arvore from './img/ipê-amarelo.png'
import pdv from './img/pata-de-vaca.jpg'
import rasteira from './img/rasteira.jpg'
import rueliavermelha from './img/ruelia-vermelha.png'
import frutifera from './img/guatambu.png'
import guarana from './img/guarana.jpg'
export default function ForYou (){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <VStack>
      <Box as='button'  onClick={onOpen} bgImage={(arvore)} px={4} bgPosition="center" w='100%' h='75px' bgRepeat="no-repeat" bgSize={'100%'} _hover={{}}><Heading textAlign='left' color={'white'}>Ipê-Amarelo</Heading></Box>
      <Box as='button'  onClick={onOpen} bgImage={(pdv)} px={4} bgPosition="center" w='100%' h='75px' bgRepeat="no-repeat" bgSize={'100%'} _hover={{}}><Heading textAlign='left' color={'white'}>Pata de Vaca</Heading></Box>
      <Box as='button'  onClick={onOpen} bgImage={(rasteira)} px={4} bgPosition="center" w='100%' h='75px' bgRepeat="no-repeat" bgSize={'100%'} _hover={{}}><Heading textAlign='left' color={'white'}>Botão-de-Lapela</Heading></Box>
      <Box as='button'  onClick={onOpen} bgImage={(rueliavermelha)} px={4} bgPosition="center" w='100%' h='75px' bgRepeat="no-repeat" bgSize={'100%'} _hover={{}}><Heading textAlign='left' color={'white'}>Ruélia-Vermelha</Heading></Box>
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
          <ModalHeader><Box bgImage={(pdv)} px={4} bgPosition="center" w='100%' h='75px' bgRepeat="no-repeat" bgSize={'100%'}><Heading textShadow={'3px 3px #000000'} color={'white'}>A ser adicionado!</Heading></Box></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            A ser adicionado!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box as='button'  onClick={onOpen} bgImage={(frutifera)} px={4} bgPosition="center" w='100%' h='75px' bgRepeat="no-repeat" bgSize={'100%'} _hover={{}}><Heading textAlign='left' color={'white'}>Guatambu</Heading></Box>
      <Box as='button'  onClick={onOpen} bgImage={(guarana)} px={4} bgPosition="center" w='100%' h='75px' bgRepeat="no-repeat" bgSize={'100%'} _hover={{}}><Heading textAlign='left' color={'white'}>Guaraná</Heading></Box>
      </VStack>)}