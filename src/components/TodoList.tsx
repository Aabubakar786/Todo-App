import React, { FC } from 'react';
import { FaEye, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

interface TodoTask {
  title: string;
  desc: string;
}

interface TodoListProps {
  todoListing: TodoTask[];
  setEditTask: any;
  setIsModalOpen: any;
  deleteTask: any;
  listing: TodoTask[];
  setIsViewModelOpen: any;
}

const TodoList: FC<TodoListProps> = ({
  todoListing,
  setEditTask,
  setIsModalOpen,
  deleteTask,
  listing,
  setIsViewModelOpen,
}) => {

  return (
    <React.Fragment>
      {listing.length > 0 ? (
        listing.map((task, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{task.title}</h3>
            <p className="card-content">{task.desc}</p>
            <div className="card-actions">
              <button
                className="card-btn"
                onClick={() => {
                  setIsViewModelOpen(true);
                  setEditTask(task);
                }}
              >
                <FaEye /> View
              </button>
              <button
                className="card-btn"
                onClick={() => {
                  setEditTask(task);
                  setIsModalOpen(true);
                }}
              >
                <FaPencilAlt /> Edit
              </button>
              <button
                className="card-btn"
                onClick={() => deleteTask(task)}
              >
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="no-tasks">
          <h3>Hurrah! There are no tasks to display.</h3>
        </div>
      )}
    </React.Fragment>
  );
};

export default TodoList;