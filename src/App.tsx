import CourseGoal from "../components/CourseGoal.tsx";
import GoalImage from "../public/goals.jpg";
import Header from "../components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "../components/CourseGoalList.tsx";
import NewGoal from "../components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // altenative <Array<CourseGoal>>
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevState) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
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
      <NewGoal handleAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
