import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoals: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoals];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoal) => prevGoal.filter((goal) => goal.id !== id));
  };
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
};

export default App;
