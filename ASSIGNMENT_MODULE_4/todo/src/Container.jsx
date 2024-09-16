import React, { useRef, useState } from "react";

const EditComp = ({ task, editTask, index, setEditstate }) => {
  const [val, setVal] = useState(task.task);
  return (
    <>
      <form
      className="editContainer"
        onSubmit={(e) => {
          e.preventDefault();
          editTask(index, val);
          setEditstate(false)
        }}
      >
        <input
          type="text"
          autoFocus
          required
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button type="submit">Done</button>
      </form>
    </>
  );
};

const TaskComp = ({ index, handleDelete, task, setEditstate }) => {
  return (
    <>
      <div className="task" id="task">
        <label htmlFor={index}>{task.task}</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000"
          onClick={() => {
            handleDelete(index);
          }}
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000"
          onClick={() => {
            setEditstate(true);
          }}
        >
          <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
        </svg>
      </div>
    </>
  );
};

const Task = ({ task, index, handleDelete, editTask }) => {
  const [editstate, setEditstate] = useState(false);
  return (
    <>
      {!editstate ? (
        <TaskComp
          setEditstate={setEditstate}
          index={index}
          task={task}
          handleDelete={handleDelete}
        />
      ) : (
        <EditComp task={task} setEditstate={setEditstate} editTask={editTask} index={index} />
      )}
    </>
  );
};

export const Container = () => {
  const [tasks, setTasks] = useState([
    { task: "Eggs" },
    { task: "Mils" },
    { task: "Cheese" }
  ]);
  const [input, setInput] = useState("");

  const editTask = (id, newtask) => {
    let arr = [...tasks];
    arr[id].task = newtask;
    setTasks(arr);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input) return;
    let newarr = [...tasks];
    let task = {
      task: input,
    };
    newarr.push(task);
    setTasks(newarr);
    setInput("");
    console.log(tasks);
  };

  const handleDelete = (id) => {
    let newarr = [...tasks].filter((item, i) => {
      if (i !== id) return item;
    });
    setTasks(newarr);
    console.log(newarr);
  };

  return (
    <div className="container">
      <h3>Grocery Shopping</h3>
      <div className="tasks">
        {tasks.map((item, i) => (
          <Task
            key={item}
            task={item}
            index={i}
            editTask={editTask}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <form className="addContainer" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add something to your list"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="deleteContainer">
        <button
          onClick={() => {
            setTasks([]);
          }}
        >
          Delete List
        </button>
      </div>
    </div>
  );
};
