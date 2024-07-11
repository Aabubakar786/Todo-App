import React from 'react';
import Modal from './Modal';
import { ViewTaskProps } from '../types/todo';
import styled from 'styled-components';



const ViewTask: React.FC<ViewTaskProps> = ({
  isViewModalOpen,
  handleCloseModal,
  editTask,
}) => {
  console.log('edit Task', editTask);

  return (
    <div>
      <Modal
        isOpen={isViewModalOpen}
        onClose={handleCloseModal}
        title="View Task Details"
        width="60%"
        height="auto"
      >
        <TaskDetailsContainer>
          <TaskTitle>{editTask?.title}</TaskTitle>
          <TaskDetail>
            <strong>Description:</strong> {editTask?.desc}
          </TaskDetail>
          <TaskDetail>
            <strong>Status:</strong> {editTask?.status}
          </TaskDetail>
          <TaskDetail>
            <strong>Date:</strong> {editTask?.date}
          </TaskDetail>
          <CloseButton onClick={handleCloseModal}>Close</CloseButton>
        </TaskDetailsContainer>
      </Modal>
    </div>
  );
};


const TaskDetailsContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TaskTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const TaskDetail = styled.p`
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;
export default ViewTask;