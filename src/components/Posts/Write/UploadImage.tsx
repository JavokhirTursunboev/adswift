'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";


const storage = getStorage(app);

export default function UploadImage() {
   const [open, setopen] = useState(false);
   const [file, setFile] = useState<File | null>(null);
   const [media, setMedia] = useState('');
   
  
   
   useEffect(()=>{
    const upload = () => {
      if (file) {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            // Handle unsuccessful uploads
            console.error('Upload failed:', error);
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
             setMedia(downloadURL)
            });
          }
        );
      }
    };
    upload();
  }, [file]);
  
  return <div className='flex gap-3'>
  <div className='border-1 p-3 border-zinc-700  rounded-full'  onClick={()=>setopen(!open)} >
    <Image src='/write/plus.png' alt="img" width={20} 
    height={20}   />
    </div>
  {
    open && <div className="flex gap-4 " >
      <input  type='file' id='image' onChange={(e) => {
  if (e.target.files && e.target.files.length > 0) {
    setFile(e.target.files[0]);
      }
    }} 
className='hidden'/>
      <div className='border-1 p-3 border-zinc-700  rounded-full  ' >
       <label htmlFor="image">
       <Image src='/write/image.png' alt="img" width={20} 
    height={20} />
    </label>
    </div>
    <div className='border-1 p-3 border-zinc-700  rounded-full ' >
     <Image src='/write/video.png' alt="img" width={20} 
    height={20} />
    </div>
    <div className='border-1 p-3 border-zinc-700  rounded-full ' >
     <Image src='/write/external.png' alt="img" width={20} 
    height={20} />
    </div>
    </div>
  }

  </div>;
}
