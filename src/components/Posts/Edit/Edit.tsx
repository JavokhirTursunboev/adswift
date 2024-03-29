"use client";
import editServer from "@/actions";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
interface typeEdit {
  id: string;
  slug: string;
  createdAt: Date;
  title: string;
  desc: string;
  img: string | null;
  views: number;
}
interface QuillEditorProps {
  editPost: typeEdit; // Define editPost prop
}
export default function QuillEditor({ editPost }: QuillEditorProps) {
  const [title, setTitle] = useState(editPost.title);
  const [description, setDescription] = useState(editPost.desc);
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescrChange = (value: string = "") => {
    setDescription(value);
  };
  const editPostServer = editServer.bind(null, editPost.slug, title, description);
  return (
    <div className="flex flex-col gap-[20px] max-h-[700px]">
      <div className='flex flex-col md:flex-row items-center md:justify-between ' >
        <input
          type="text"
          placeholder="Title"
          className="py-[30px] text-[25px] lg:text-[50px]   border-none outline-none "
          onChange={handleTitleChange}
          defaultValue={editPost.title}
        />
        <form action={editPostServer}>
          <button type="submit" className='bg-green-500 py-2 px-4 border-none rounded-xl text-white ' >Publish</button>
        </form>
      </div>

      <ReactQuill
        theme="bubble"
        placeholder="Write your"
        className="w-full text-[18px]"
        onChange={handleDescrChange}
        defaultValue={editPost.desc}
      />
    </div>
  );
}
