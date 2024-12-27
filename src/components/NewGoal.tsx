import { FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};
const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    onAddGoal(enteredGoal, enteredSummary);
    event.currentTarget.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" name="goal" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" name="summary" id="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
