type CourseGoalprops = {
  title: string;
  description: string;
};

const CourseGoal = ({ title, description }: CourseGoalprops) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
