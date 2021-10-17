import { Tasks } from "../interfaces/TaskInterface";
import { TaskCard } from "./TaskCard";

interface Props {
  tasks: Tasks[];
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard task={task} />
        </div>
      ))}
    </>
  );
};
