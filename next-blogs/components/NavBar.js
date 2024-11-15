// File: components/NavBar.js
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ThemeSwitch />
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;