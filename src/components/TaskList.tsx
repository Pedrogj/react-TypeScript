import { Task } from "../interfaces/TaskInterface";
import { TaskCard } from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteATask: (id: number) => void;
}

export const TaskList = ({ tasks, deleteATask }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <div className="col-md-4" key={task.id}>
          <TaskCard task={task} deleteATask={deleteATask} />
        </div>
      ))}
    </>
  );
};
