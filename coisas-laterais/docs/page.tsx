import Button from "./button";

export default function Docs({
  searchParams,
}: {
  searchParams: { name: string };
}) {
  console.log(searchParams.name);

  return (
    <>
      <h1>Viewing docs!!</h1>
      <Button />
    </>
  );
}
