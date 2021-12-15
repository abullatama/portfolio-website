import Head from "next/head";
import Header from "./header";

export default function Layout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      {props.children}
    </main>
  );
}
