import {
  About,
  Contact,
  Header,
  Services,
  Team,
  Testimonies,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full bg-[#fcfcfc]">
      <div className="container mx-auto">
        <section className="p-5" id="home">
          <Header />
        </section>

        <section className="p-5 border-t border-gray-200" id="about">
          <About />
        </section>
      </div>

      <section className="" id="services">
        <div className="bg-[#003060]">
          <Services />
        </div>
      </section>

      <section className="p-5">
        <Team />
      </section>

      <section className="p-5">
        <Testimonies />
      </section>

      <section className="relative" id="contact">
        <Contact />
      </section>
    </main>
  );
}
