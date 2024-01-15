import { GrUserAdd } from "react-icons/gr"
import { CreateTwurForm } from "./CreateTwurForm"
import { useDisclosure } from "@chakra-ui/react"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

export function CreateTwur(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <button className="flex items-center gap-3 p-4 text-white/80 bg-gradient-to-r from-blue-800 to-blue-600 hover:scale-105 rounded-xl transition duration-200 drop-shadow-2xl"
                onClick={onOpen}
            >
                <GrUserAdd className="w-5 h-5" />
                <span className="text-lg text-white/90">
                    Create a Twur
                </span>
            </button>

            <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
                <ModalOverlay backdropFilter='blur(10px)' bg='blackAlpha.300'/>
                <ModalContent bg="rgb(31 41 55)">
                    <ModalHeader color="rgba(255, 255, 255, 0.9)">Create a Twur</ModalHeader>
                    <ModalCloseButton m={1} />
                    <ModalBody>
                        <CreateTwurForm close={onClose}/>
                    </ModalBody>

                    <ModalFooter>
                        <button onClick={onClose}>
                            Close
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
