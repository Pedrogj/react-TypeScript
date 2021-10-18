import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../interfaces/TaskInterface";

interface Props {
  addANewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

export const TaskForm = ({ addANewTask }: Props) => {
  const [task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addANewTask(task);
    setTask(initialState);
  };

  return (
    <div className="mb-3 card card-body text-dark">
      <h1 style={{ fontSize: "20px" }}>Add Task</h1>

      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="mb-3 form-control text-dark"
          onChange={handleInputChange}
          value={task.title}
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Write a Description"
          className="mb-3 form-control text-dark"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>
        <button className="btn btn-outline-primary btn-sm">Save</button>
      </form>
    </div>
  );
};
