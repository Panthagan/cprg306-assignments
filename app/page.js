import Link from 'next/link';

export default function Page() {
  return (
    <main>
<div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link href="http://localhost:3000/week-2">week-2</Link></li>
        <li><Link href="http://localhost:3000/week-3">week-3</Link></li>
        <li><Link href="/week-4">Week 4 </Link></li> 
      </ul>
    </div>
    </main>

  );
}
