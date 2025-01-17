import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";
type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  return (
    <>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
