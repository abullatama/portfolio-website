import Layout from "../components/layout";
import Hero3D from "../components/hero3D.js";

export default function Index() {
  return (
    <>
      <Layout title="Maqbul Arif Latama - Homepage">
        <main className="max-w-2xl mx-auto pt-[58px]">
          <Hero3D />
          <article className="max-w-lg mx-auto px-5">
            <div className="flex justify-center bg-gray-50/50 dark:bg-gray-50/10 rounded-lg py-3 mb-6 text-center">
              Hello, I'm a full-stack developer based in Indonesia!
            </div>
            <div className="heading-container md:flex md:justify-between">
              <div className="heading">
                <div className="text-3xl font-mplus font-bold leading-snug">
                  <p>Maqbul Arif Latama</p>
                </div>
                <div>
                  <p>Digital Craftsman ( Artist / Developer / Designer )</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="mx-auto w-[100px] h-[100px] rounded-full border-2 border-solid border-slate-800">
                  <img
                    src="webpic.jpeg"
                    alt="webpic"
                    className="rounded-full w-full h-full box-border object-cover"
                  />
                </div>
              </div>
            </div>
          </article>
        </main>
      </Layout>
    </>
  );
}
