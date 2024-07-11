import React, { useEffect, useState } from 'react';
import { todoData } from '../utils/todoUtils';
import StyledButton from '../components/StyledButton';
import { FaCalendarPlus } from 'react-icons/fa';
import styled from 'styled-components';
import StyledFilterButton from '../components/Filterdropdown';
import TodoForm from '../components/TodoForm';
import { TodoTask } from '../types/todo';
import TodoItem from '../components/TodoItem';
import TodoList from '../components/TodoList';

interface FilterOption {
  value: 'all' | 'completed' | 'incomplete';
  label: string;
}

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [todoListing, setTodoListing] = useState(todoData);
  const [listing, setListing] = useState(todoListing)
  const [editTask, setEditTask] = useState<TodoTask | undefined>(undefined);

  const handleSubmit = (values: any) => {
    console.log('values', values)

    if (values?.id) {
      const updatedTodoListing = todoListing.map((task) => {
        if (task.id === values.id) {
          return {
            ...task,
            title: values.title,
            desc: values.description,
            status: values.status,
            date: new Date().toLocaleDateString(),
          };
        }
        return task;
      });

      setTodoListing(updatedTodoListing);
      setIsModalOpen(false);
    } else {
      const newTask: TodoTask = {
        id: generateUniqueId(),
        title: values.title,
        desc: values.description,
        status: values.status,
        date: new Date().toLocaleDateString(),
      };

      setTodoListing([...todoListing, newTask]);
      setIsModalOpen(false);
    }
  };

  const generateUniqueId = () => {

    let id: number;
    do {
      id = Math.floor(10000000 + Math.random() * 90000000);
    } while (todoListing.some((task) => task.id === id));
    return id;
  };
  const deleteTask = (task: TodoTask) => {
    const updatedTodoListing = todoListing.filter((t) => t.id !== task.id);
    setTodoListing(updatedTodoListing);
  };
  const handleFilterSelect = (option: FilterOption) => {
    let updatedTodoListing;
    if (option.value === 'all') {
      updatedTodoListing = [...todoListing];
    } else {
      updatedTodoListing = todoListing.filter((t) => t.status === option.value);
    }
    setListing(updatedTodoListing);
  };

  useEffect(() => {
    setListing(todoListing);
  }, [todoListing]);

  return (
    <div>
      <h1>Todo Jira Portal </h1>
      <HeadingBtns>
        <StyledButton text="Add Task" icon={<FaCalendarPlus className='' />} onClick={() => setIsModalOpen(true)} />
        
        <StyledFilterButton handleFilterSelect={handleFilterSelect} />
      </HeadingBtns>
      <div>
        <div className="wrapper">
          <TodoList
            todoListing={todoListing}
            setEditTask={setEditTask}
            setIsModalOpen={setIsModalOpen}
            deleteTask={deleteTask}
            listing={listing}
            setIsViewModelOpen={setIsViewModalOpen}
          />

          <TodoForm
            isModalOpen={isModalOpen}
            handleOpenModal={() => setIsModalOpen(true)}
            handleCloseModal={() => {
              setIsModalOpen(false);
              setEditTask(undefined);
            }}
            handleSubmit={handleSubmit}
            editTask={editTask}
          />

          <TodoItem
            isViewModalOpen={isViewModalOpen}
            handleOpenModal={() => setIsViewModalOpen(true)}
            handleCloseModal={() => {setIsViewModalOpen(false);
              
              setEditTask(undefined);
            }}
            editTask={editTask}
          />
        </div>
      </div>
    </div>
  );
};

const HeadingBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 1rem;

`;
export default Dashboard;

