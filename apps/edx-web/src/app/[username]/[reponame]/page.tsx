import Image from "next/image";
import WorkingImage from "@/assets/working.svg";

export default function page({
  params,
}: {
  params: { username: string; reponame: string };
}) {
  return (
    <div>
      page of Reponame: {params.reponame}, username: {params.username}
    </div>
  );
}
