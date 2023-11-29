import CourseGoal from "./CourseGoal";
import { CourseGoal as GCProps } from "../src/App";

type CourseGoalProps = {
  goals: GCProps[];
};

const CourseGoalList = ({ goals }: CourseGoalProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
