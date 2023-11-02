export default function Sidebar() {
  const repoNames = [
    "History of Ice Cream",
    "History of Cake",
    "Geography and World Atlas",
    "Functioning of the Government",
  ];
  return (
    <div className="bg-gray-950 bg-opacity-50 min-h-screen col-span-3 -z-10 overflow-y-auto flex flex-col py-4 pl-4 overflow-x-hidden gap-y-5">
      {/* Profile Bar */}
      <div className="flex gap-x-4 items-center">
        <div className="h-10 w-10 rounded-full bg-white animate-pulse"></div>
        <div>Lorem Ipsum</div>
      </div>
      {/* Top Learing Repos */}
      <div>
        <h1 className="text-lg font-normal">Top Learning Repos</h1>
        <ul className="flex flex-col">
          {repoNames.map((v, key) => {
            return <li key={key}></li>;
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
