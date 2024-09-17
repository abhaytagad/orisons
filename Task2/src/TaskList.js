const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <ul className="max-w-lg mx-auto mt-6">
      {tasks.length === 0 ? (
        <li className="text-center text-gray-500">No tasks available</li>
      ) : (
        tasks.map((task) => (
          <li
            key={task._id}
            className="flex justify-between items-center bg-white p-4 mb-2 rounded-md shadow-md"
          >
            <span
              className={`flex-1 ${task.isCompleted ? 'line-through text-gray-400' : ''}`}
            >
              <strong>{task.taskName}:</strong> {task.taskDescription}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => onCompleteTask(task._id)}
                className={`px-3 py-1 rounded-md ${
                  task.isCompleted ? 'bg-green-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
                } text-white`}
                disabled={task.isCompleted}
              >
                {task.isCompleted ? 'Completed' : 'Complete'}
              </button>
              <button
                onClick={() => onDeleteTask(task._id)}
                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;
