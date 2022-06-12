import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import image from '../../public/images/profile.jpeg';
import image2 from '../../public/images/profile.jpeg';
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>제목2</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='next.js study' />
        <meta name='author' content='siwan' />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
      <img src={image.src} height={144} width={144} alt='2' />
      <Image src={image2.src} height={144} width={144} alt='test'></Image>
    </Layout>
  );
}
