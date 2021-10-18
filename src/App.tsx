import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Task } from "./interfaces/TaskInterface";
import logo from "./logo.svg";

export function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false,
    },
  ]);

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addANewTask = (task: Task) => {
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimestamp(), completed: false },
    ]);
  };

  const deleteATask = (id: number) =>
    setTasks(tasks.filter((task) => task.id !== id));

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
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
