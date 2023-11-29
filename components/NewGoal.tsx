import { FormEvent, useRef } from "react";

type NewGoalProps = {
  handleAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ handleAddGoal }: NewGoalProps) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!goalRef.current!.value) return;
    if (!summaryRef.current!.value) return;
    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;
    handleAddGoal(enteredGoal, enteredSummary);

    e.currentTarget.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" placeholder="Your Goal..." id="goal" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input
          type="text"
          placeholder="Short Summary..."
          id="summary"
          ref={summaryRef}
        />
      </p>
      <button>Add Goal</button>
    </form>
  );
};

export default NewGoal;
