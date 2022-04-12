import Layout from "../components/layout";
import Hero3D from "../components/hero3D.js";

export default function Index() {
  return (
    <>
      <Layout title="Maqbul Arif Latama - Homepage">
        <main className="max-w-2xl mx-auto">
          <Hero3D />
        </main>
      </Layout>
    </>
  );
}
