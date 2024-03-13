import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Product List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
      <Link href={{
        pathname: '/docs',
        query: {
            name: 'Henrique'
        }
      }}>Go to Docs</Link>
    </>
  );
}
