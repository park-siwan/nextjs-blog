import Image from 'next/image';
import Link from 'next/link';
import image from '../../public/images/profile.jpeg';
import image2 from '../../public/images/profile.jpeg';
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
      <img src={image.src} height={144} width={144} alt='2' />
      <Image src={image2.src} height={144} width={144} alt='test'></Image>
    </>
  );
}
