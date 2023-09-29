import { todoData } from "@/app/data/todoData";
import Button from "../Button";
import TaskCard from "./TaskCard";

type Props = {};

export default function TaskSection({}: Props) {
  const taskType = [
    {
      id: 1,
      type: "To-Do List",
    },
    {
      id: 2,
      type: "In Progress",
    },
    {
      id: 3,
      type: "Done",
    },
    {
      id: 4,
      type: "Revised",
    },
  ];
  return (
    <section className="mt-4 px-6 overflow-auto overflow-x-scroll w-full">
      <div className=" grid  grid-cols-1 md:grid-cols-3 xl:flex gap-10">
        {taskType.map((task) => {
          let taskData = todoData.filter((todo) => todo.taskTypeId === task.id);
          return (
            <div key={task.id}>
              <div className="flex justify-between py-3">
                <p className="text-white text-xl">
                  {task.type} ({taskData.length})
                </p>
                <Button
                  disable={task.id === 1 ? false : true}
                  type="button"
                  danger
                >
                  +
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center">
                {/* map all the task card  */}
                {taskData.map((data) => (
                  <TaskCard key={data.id} data={data} />
                ))}
                {
                    task.id === 4 && <div className="w-64 p-4 bg-secondary rounded-xl text-white space-y-5 my-3">
                        <p className="text-center bg-primary rounded-full py-2">Move card here</p>
                    </div>
                }
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
