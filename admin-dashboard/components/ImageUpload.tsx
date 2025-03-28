"use client"

import { IKImage,ImageKitProvider, IKUpload, } from "imagekitio-next";
import config from "@/lib/config";
import { useRef, useState } from "react";
import ImageKit from "imagekit";
import Image from "next/image";
import { toast } from "sonner"



const { 
  env: { 
      imagekit: { publicKey, urlEndpoint },
  },
} = config



const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.json();

    const { signature, expire, token } = data;

    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const ImageUpload = ({ 
  onFileChange,
 }: {onFileChange: (filePath:string) => void}) => {
  const ikUploadRef = useRef(null)
  const [file, setfile] = useState<{ filePath: string | null }>(null)

const onError = (error : any) => {
 console.log(error)

 toast("Image upload failed", {
  description: `Your image could not be uploaded.please try again.`,

  })
}

const onSuccess = (res: any) => {
   setfile(res)
   onFileChange(res.filePath)

    toast("Image uploaded successfully", {
      description: `${res.filePath} uploaded successfully`,
      })
}

  return (
     <ImageKitProvider 
       publicKey={publicKey}
       urlEndpoint={urlEndpoint}
       authenticator={authenticator}
       
       >
        <IKUpload 
          className="hidden bg-white text-sm w-42 text-gray-600 "
          ref={ikUploadRef}
          onError={onError}
          onSuccess={onSuccess}
          fileName="test-upload.png"
        />
         
         <button 
          className="bg-[#232839] flex min-h-14 w-full items-center justify-center gap-1.5 rounded-md"
          onClick={(e) =>{e.preventDefault()
            //@ts-expect-ignore

            if(ikUploadRef.current){
              ikUploadRef.current?.click()
            }
          }}
          >
          <Image className="object-contain" src='/icons/upload.svg' alt="upload icon" width={20} height={20} />
          <p className="text-base  text-[#D6E0FF]">Upload a file</p>
          {file && <p className="mt-1 text-center text-xs">{file.filePath}</p>}
         </button>
          {file && (
            <IKImage
            alt={file.filePath}
            path={file.filePath}
            width={500}
            height={300}
            />
          )}
     </ImageKitProvider>
  )
}

export default ImageUpload