function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li style={{ margin: '8px 0' }}>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '10px' }}>❌</button>
    </li>
  );
}

export default TaskItem;
