import Button from '../../components/button';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
        <title >First Post</title>
      <h1 className="text-4xl text-gray-300 font-bold underline">hello</h1>
      <Button label="hello"/>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}