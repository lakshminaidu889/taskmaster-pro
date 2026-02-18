import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Tasks() {
  const { tasks, addTask, updateTaskStatus, deleteTask } = useTasks();

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({ title, priority, category, dueDate });
    setTitle("");
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    updateTaskStatus(
      result.draggableId,
      result.destination.droppableId
    );
  };

  const columns = ["todo", "inprogress", "done"];

  return (
    <div>
      <h2>Enterprise Kanban</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
        />
        <select onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option>Work</option>
          <option>Personal</option>
          <option>Study</option>
        </select>
        <input type="date" onChange={(e) => setDueDate(e.target.value)} />
        <button>Add</button>
      </form>

      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: "flex", gap: 20 }}>
          {columns.map(col => (
            <Droppable droppableId={col} key={col}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.1)",
                    padding: 15,
                    borderRadius: 15,
                    minHeight: 400
                  }}
                >
                  <h3 style={{ textTransform: "capitalize" }}>
                    {col}
                  </h3>

                  {tasks
                    .filter(t => t.status === col)
                    .map((task, index) => (
                      <Draggable
                        draggableId={task.id}
                        index={index}
                        key={task.id}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              padding: 12,
                              marginBottom: 10,
                              borderRadius: 10,
                              background: "#1e293b",
                              color: "#22dc11",
                              ...provided.draggableProps.style
                            }}
                          >
                            <strong>{task.title}</strong>
                            <div>{task.category}</div>
                            <div>Due: {task.dueDate}</div>
                            <button
                              onClick={() => deleteTask(task.id)}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
