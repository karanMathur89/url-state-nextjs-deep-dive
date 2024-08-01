import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="mb-8 rounded bg-gray-100 p-4">
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link href="/">useState</Link>
        </li>
        <li>
          <Link href="/useRouter">useRouter</Link>
        </li>
        <li>
          <Link href="/useSearchParams">useSearchParams</Link>
        </li>
      </ul>
    </nav>
  )
}
