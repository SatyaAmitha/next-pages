// File: pages/index.js
import Link from 'next/link';
import NavBar from '../components/NavBar';
function HomePage() {
  console.log('[HomePage] render');
  return (
    <main>
      <h1>My Blog</h1>
    </main>
  );
}
export default HomePage;