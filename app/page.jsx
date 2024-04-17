import Devices from "@/components/Devices";
import Fonctionnalités from "@/components/Fonctionnalités";
import Traductions from "@/components/Traductions";
import testimony from "@/components/testimony";

const Home = () => {
  return (
    <main className="bg-gray-400 bg-opacity-10 h-screen">
        <section>
          <Fonctionnalités/>
        </section>
        <section className="">
          <Traductions/>
        </section>
        <section className="">
          <Devices/>
        </section>
        <section className="">
          <testimony/>
        </section>
    </main>
  )
}

export default Home
