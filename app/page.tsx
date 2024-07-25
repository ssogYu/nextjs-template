import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center h-screen items-center">
      <Link href="/photography">图集</Link>
      <Link href="/photography/collection/">收藏页面</Link>
      <Link href="/photography/travel/">旅游</Link>
    </div>
  );
}
