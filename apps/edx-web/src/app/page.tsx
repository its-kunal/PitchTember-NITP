import Image from "next/image";
import WorkingImage from "@/assets/working.svg";

export default function Home() {
  return (
    <>
      <div className="h-10"></div>
      <div className="flex justify-center">
        <Image src={WorkingImage} alt="" className="h-56" />
      </div>
    </>
  );
}
