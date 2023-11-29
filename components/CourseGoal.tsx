import React from "react";

type CourseGoalprops = {
  title: string;
  children: React.ReactNode;
};

//altenative way of defining choldren props
// type CourseGoalprops = PropsWithChildren<{ title: string }>;

const CourseGoal = ({ title, children }: CourseGoalprops) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
