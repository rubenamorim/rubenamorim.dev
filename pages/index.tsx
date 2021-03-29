import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex justify-center items-center w-screen h-screen">
                <h1>
                    Welcome to <a href="https://nextjs.org">Next.js</a> 👋
                </h1>
            </main>
        </>
    );
}
