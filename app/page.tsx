import Link from "next/link";

export default function Page() {
  return (
    <ul>
      <li>
        <Link href="/suspense">Suspense</Link>
      </li>
      <li>
        <Link href="/suspense-2">Suspense 2</Link>
      </li>
      <li>
        <Link href="/page-data-fetching">Page data fetching</Link>
      </li>
      <li>
        <Link href="/page-data-fetching-2">Page data fetching 2</Link>
      </li>
      <li>
        <Link href="/page-data-import">Page data import</Link>
      </li>
      <li>
        <Link href="/page-data-import-2">Page data import 2</Link>
      </li>
    </ul>
  );
}
