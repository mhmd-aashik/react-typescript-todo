import CourseGoal from "../components/CourseGoal.tsx";
import GoalImage from "../public/goals.jpg";
import Header from "../components/Header.tsx";

export default function App() {
  return (
    <main>
      <Header image={{ src: GoalImage, alt: "Goal Logo" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learn React + TS">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}
