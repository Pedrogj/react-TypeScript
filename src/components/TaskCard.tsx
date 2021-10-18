import { Task } from "../interfaces/TaskInterface";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

export const TaskCard = ({ task, deleteATask }: Props) => {
  return (
    <div
      className="mb-3 card border-primary text-dark"
      style={{ maxWidth: "20rem" }}
    >
      <div className="card-header">
        <h2 style={{ fontSize: "20px" }}>{task.title}</h2>
      </div>
      <div className="card-body">
        <p className="card-text">{task.description}</p>
      </div>
      <div
        style={{
          paddingBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => task.id && deleteATask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
