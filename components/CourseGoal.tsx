import React from "react";

type CourseGoalprops = {
  id: number;
  title: string;
  children: React.ReactNode;
  onDelete: (id: number) => void;
};

//altenative way of defining choldren props
// type CourseGoalprops = PropsWithChildren<{ title: string }>;

const CourseGoal = ({ title, children, onDelete, id }: CourseGoalprops) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
