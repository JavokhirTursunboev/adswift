'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';
import slugify from "slugify"; // Import slugify library
import { useRouter } from "next/navigation";
import Progress from './../../components/Posts/Write/Progress';


const storage = getStorage(app);

export default function Write() {
 
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState('');
  const [value, setValue] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  useEffect(()=>{
    const upload = () => {
      if (!file) return;
      const name = new Date().getTime + file.name
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      
      
      uploadTask.on('state_changed', 
        (snapshot) => {
          
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        }, 
        (error) => {
          
        }, 
        () => {
         
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setMedia(downloadURL)
          });
        }
      );
    };
    file && upload() ;
  }, [file]);

  const router= useRouter()
  const handleSubmit= async () => {
    const res = await fetch("/api/posts",{
      method:"POST",
      body: JSON.stringify({
        title,
        desc:value,
        img:media,
        slug: slugify(title, { lower: true })
      })
    })
    router.push('/posts')
    router.refresh()
  }
  return (
    <div className="mx-auto container">
      <div>
        <div>
          <input
            type="text"
            className="py-[30px] px-[20px] text-[30px] md:text-[40px] xl:text-[50px] border-none outline-none w-full"
            placeholder="Title"
            name="title"
            onChange={(e) => {setTitle(e.target.value)}}
          />
        </div>
        <div className="flex gap-3 items-center">
          {/* ==== Button =========  */}
          <div
            className="border-1 p-2 border-zinc-700 rounded-full cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <Image src="/write/plus.png" alt="img" width={16} height={16} />
          </div>
          {open && (
            <div className="flex gap-4 items-center">
              <input type="file" id="image" className="hidden"
             onChange={(e) => {
              if (!e.target.files || e.target.files.length === 0) return;
              setFile(e.target.files[0]);
            }}
              />
              <label htmlFor="image">
                <div className="border-1 p-2 border-zinc-700 rounded-full cursor-pointer">
                  <Image src="/write/image.png" alt="img" width={16} height={16} />
                </div>
              </label>
             
              <Progress uploadProgress={uploadProgress}  />
            </div>
          )}
          {/* ==== Button =========  */}
        </div>
      <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder='Write your post...'/>
        <button
          type="submit"
          className=" border-none bg-green-400 rounded-md px-5 py-2 text-white hover:bg-green-600 ml-[20px]"
       onClick={handleSubmit}
       >
          Save
        </button>
      </div>
    </div>
  );
}
