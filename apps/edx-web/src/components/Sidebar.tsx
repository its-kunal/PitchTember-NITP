import { REPOS } from "@/seed/repos";
import { sampleUser } from "@/seed/user";
import RepoTile from "./RepoTile";
const repoNames = [
  "History of Ice Cream",
  "History of Cake",
  "Geography and World Atlas",
  "Functioning of the Government",
];
export default function Sidebar() {
  return (
    <div className="bg-gray-950 bg-opacity-50 min-h-screen col-span-3 -z-10 overflow-y-auto flex flex-col py-4 pl-4 overflow-x-hidden gap-y-5">
      {/* Profile Bar */}
      <div className="flex gap-x-4 items-center">
        <div className="h-10 w-10 rounded-full bg-white animate-pulse"></div>
        <div>{sampleUser.name}</div>
      </div>
      {/* Top Learing Repos */}
      <div>
        <h1 className="text-lg font-normal">Top Learning Repos</h1>
        <div className="h-5"></div>
        <ul className="flex flex-col">
          {/* {repoNames.map((v, key) => {
            return <li key={key}></li>;
          })} */}
          {REPOS.map((v) => {
            return <RepoTile title={v.name} id={v.id} />;
          })}
        </ul>
      </div>
      {/* Recent Activity */}
      <div>
        <h1 className="text-lg font-normal">Recent Activity</h1>
        <ul></ul>
      </div>
    </div>
  );
}
