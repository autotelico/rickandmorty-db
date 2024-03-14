import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Opa, aventureiro!</h1>
      <h3>Acho que você se perdeu. Que tal <Link href='/'>voltar pra casa</Link>?</h3>
    </>
  );
}
