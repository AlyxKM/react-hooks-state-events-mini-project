import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text, setText] = useState(" ");
  const [category, setCategory] = useState("Code")

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({text, category});
    setCategory("Code");
    setText(" ");
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text"  value={text} onChange={(event) => setText(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
         {categories.map((selectedCategory) => (<option key={selectedCategory}>{selectedCategory}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
