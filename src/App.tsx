import { useState } from "react";
import { TaskList } from "./components/TaskList";
import { Tasks } from "./interfaces/TaskInterface";
import logo from "./logo.svg";

export function App() {
  const [task, setTask] = useState<Tasks[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false,
    },
  ]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React Logo" style={{ width: "4rem" }} />
            React.Tsx
          </a>
        </div>
      </nav>
      {/* Main */}
      <main className="container p-4">
        <TaskList tasks={task} />
      </main>
    </>
  );
}
