import Image from "next/image";
import WorkingImage from "@/assets/working.svg";

export default function page({ params }: { params: { username: string } }) {
  return (
    <div>
      <div>page: {params.username}</div>
      <div className="h-10"></div>
      <div className="flex justify-center">
        <Image src={WorkingImage} alt="" className="h-56" />
      </div>
    </div>
  );
}
