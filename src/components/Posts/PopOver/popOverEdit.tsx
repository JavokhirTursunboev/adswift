"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { RiDeleteBin5Line } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import Link from "next/link";
import { deleteServer } from "@/actions";

export default function PopOverEdit({ slug }: { slug: string }) {
  const deleteSingePost = deleteServer.bind(null, slug);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="px-1 py-2 flex gap-3">
      <Link
        href={`/posts/${slug}/edit`}
        className="text-small font-bold flex items-center  text-black
             gap-1 cursor-pointer hover:text-blue-500 "
      >
        <LiaEdit className="text-[20px]" />
      </Link>
      <div
        className="text-small font-bold flex items-center gap-1 text-black
             cursor-pointer  hover:text-red-500 "
        onClick={onOpen}
      >
        <RiDeleteBin5Line className="text-[20px]  " />
      </div>

      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <p>Are you sure delete the Post ?</p>
              </ModalBody>
              <ModalFooter>
                <button className="text-black mr-5 hover:text-blue-500 hover:font-bold">
                  Close
                </button>
                <form action={deleteSingePost}>
                  <button className="text-red-400 hover:text-red-600 hover:font-bold">Yes</button>
                </form>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
