import { Tasks } from "../interfaces/TaskInterface";

interface Props {
  task: Tasks;
}

export const TaskCard = ({ task }: Props) => {
  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header">{task.title}</div>
      <div className="card-body">
        <h4 className="card-title">Primary card title</h4>
        <p className="card-text">{task.description}</p>
      </div>
      <div>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};
