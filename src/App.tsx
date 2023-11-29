import CourseGoal from "../components/CourseGoal.tsx";
import GoalImage from "../public/goals.jpg";
import Header from "../components/Header.tsx";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // altenative <Array<CourseGoal>>
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal() {
    setGoals();
  }
  return (
    <main>
      <Header image={{ src: GoalImage, alt: "Goal Logo" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal title="Learn React + TS">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}
