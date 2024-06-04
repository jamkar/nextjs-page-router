import Link from 'next/link';

function NewsPage() {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href='/news/awesome-news'>Great News</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
