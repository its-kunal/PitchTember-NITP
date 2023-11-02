export default function page({ params }: { params: { username: string } }) {
  return <div>page: {params.username}</div>;
}
