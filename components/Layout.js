import Link from "next/link";

const Nav = ({ children }) => (
  <div className="flex flex-col w-screen min-h-screen antialiased text-gray-900">
    <nav className="p-4 shadow-xs w-full">
      <ul className="flex space-x-6 text-orange-800 font-bold max-w-screen-lg mx-auto">
        <li>
          <Link href="/">
            <a>Simple</a>
          </Link>
        </li>
        <li>
          <Link href="/advance-image">
            <a>Advance Image</a>
          </Link>
        </li>
        <li>
          <Link href="/responsive-img">
            <a>Responsive Img</a>
          </Link>
        </li>
      </ul>
    </nav>
    <main>{children}</main>
  </div>
);
export default Nav;
