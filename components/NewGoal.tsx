import React, { FormEvent, useRef } from "react";

const NewGoal = () => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!goalRef.current?.value && !summaryRef.current?.value) return;
    const enteredGoal = goalRef.current?.value;
    const summaryEntered = summaryRef.current?.value;
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
