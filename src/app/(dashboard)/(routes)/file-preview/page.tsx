import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col gap-5  min-w-[300px] max-w-[900px] mx-auto w-full bg-amber-200">
      <div>
        <ArrowLeft />
        Go to Upload
      </div>
      <div>
        <Image
          src="https://ayxfvdmgmcrawijvkjqt.supabase.co/storage/v1/object/public/files/0.9201162045840143-logoipsum-330.svg"
          alt="Image"
          width={50}
          height={50}
        />
        <p>Image name</p>
        <p>image format and size</p>
      </div>
      <div></div>
    </div>
  );
};

export default page;
