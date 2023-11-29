import React, { FormEvent } from "react";

const NewGoal = () => {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" placeholder="Your Goal..." id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" placeholder="Short Summary..." id="summary" />
      </p>
      <button>Add Goal</button>
    </form>
  );
};

export default NewGoal;
