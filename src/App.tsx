import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <main className="main-container p-4 max-w-screen-lg mx-auto">
      <div className="nav-section flex flex-col gap-2">
        <Link to="/">
          <h1 className="text-xl">Game Box</h1>
        </Link>
        <div className="border p-2 flex-grow">
          <ul>
            <li>
              <Link to="/2048">2048</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </main>
  );
}

export default App;
