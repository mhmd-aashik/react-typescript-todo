import CourseGoal from "../components/CourseGoal.tsx";
import GoalImage from "../public/goals.jpg";
import Header from "../components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "../components/CourseGoalList.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // altenative <Array<CourseGoal>>
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal() {
    setGoals((prevState) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it from the ground up",
      };
      return [...prevState, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevState) => prevState.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: GoalImage, alt: "Goal Logo" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
