import React, { FC, PropsWithChildren } from "react";

// type CourseGoalprops = {
//   title: string;
//   children: React.ReactNode;
// };

//altenative way of defining choldren props
type CourseGoalprops = PropsWithChildren<{ title: string }>;

//altenative way of defining  props using FC
const CourseGoal: FC<CourseGoalprops> = ({ title, children }) => {
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
