import { type ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
  id: number;
  //   description: string;
};
const CourseGoal = ({ title, children, onDelete, id }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {/* <p>{description}</p> */}
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
