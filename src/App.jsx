import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function App() {
  return (
    <main>
      <section className="bg-slate-500 min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1>Patricio Tamés</h1>
          <ul>
            <li>
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a href="#">Linkedln</a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
