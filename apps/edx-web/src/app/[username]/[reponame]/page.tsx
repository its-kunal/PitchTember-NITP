export default function page({
  params,
}: {
  params: { username: string; reponame: string };
}) {
  return (
    <div>
      page of {params.reponame}, {params.username}
    </div>
  );
}
