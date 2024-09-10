import Hero from "./pages/Hero";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <header className="dark:bg-black">
        <NavBar />
      </header>
      <main>
        <section className="bg-[#F6F6F6] dark:bg-[#1D1C20]">
          <Hero />
          <Dashboard />
        </section>
        <section>
          <Nav />
        </section>
        <section>paln</section>
        <footer>footer</footer>
      </main>
    </>
  );
}

export default App;
