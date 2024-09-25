import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex text-[#eee]">
      <header className="flex m-auto mt-4">
        <ul className="flex mr-4 text-2xl">
          <li className="mr-4 hover:text-[#cbc7c7]">
          <Link href="/signup">Signup</Link>
          </li>
          <li className="mr-4 hover:text-[#cbc7c7]">
          <Link href="/login">Login</Link>
          </li>
          <li>
          <Link className="hover:text-[#cbc7c7]" href="/profile">Profile</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
