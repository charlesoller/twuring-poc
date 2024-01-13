import { GrUserAdd } from "react-icons/gr"
import { CreateTwurForm } from "./CreateTwurForm"
import { useState } from "react"
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
            <button className="flex items-center gap-3 p-4 text-white/80 hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent rounded-xl transition transition-duration-200"
                onClick={onOpen}
            >
                <GrUserAdd className="w-5 h-5" />
                <span className="text-lg text-white/90">
                    Create a Twur
                </span>
            </button>

            <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
                <ModalOverlay backdropFilter='blur(10px)' />
                <ModalContent className="bg-red-500" bg="darkgray">
                    <ModalHeader>Create a Twur</ModalHeader>
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
