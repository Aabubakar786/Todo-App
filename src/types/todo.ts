export type Todo = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  };

  export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    width?: string;
    height?: string;
  }
  export interface TodoAddTaskProps {
    isModalOpen: boolean;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
    handleSubmit: (values: { title: string; description: string; status: string }) => void;
    editTask: any;
  }
  export interface ViewTaskProps {
    isViewModalOpen: boolean;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
    editTask: any;
  }
  export interface TodoTask {
    id: number;
    title: string;
    desc: string;
    status: string;
    date: string;
  }
  