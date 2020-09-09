import Link from "next/link";
import Head from "next/head";

const Nav = ({ children }) => (
  <div className="flex flex-col w-screen min-h-screen antialiased text-gray-900">
    <Head>
      <title>Responsive Loader</title>
    </Head>
    <nav className="p-4 shadow-xs w-full">
      <ul className="flex space-x-4 text-indigo-700 font-bold max-w-screen-lg mx-auto">
        <li>
          <Link href="/">
            <a>Simple</a>
          </Link>
        </li>
        <li>
          <Link href="/gatsby-image">
            <a>Gatsby Image</a>
          </Link>
        </li>
        <li>
          <Link href="/classic">
            <a>Classic</a>
          </Link>
        </li>
      </ul>
    </nav>
    <main>{children}</main>
  </div>
);
export default Nav;
