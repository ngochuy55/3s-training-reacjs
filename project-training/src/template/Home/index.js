import Sidebar from "../../components/Sidebar";
import { Navbar } from "../../components/common/Navigation";

function Home() {
  return (
    <section className="mt-[106px]">
      <Navbar />

      <main className="mt-[106px] ">
        <Sidebar></Sidebar>
      </main>
    </section>
  );
}

export default Home;
