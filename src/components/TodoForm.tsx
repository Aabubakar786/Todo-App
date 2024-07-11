import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';
import { TodoAddTaskProps } from '../types/todo';
import FormikInputField from './FormikFields/FormikInputField';
import FormikSelectField from './FormikFields/FormikSelect';
import StyledText from './StyledText';
import styled from 'styled-components';


const TodoForm: React.FC<TodoAddTaskProps> = ({
    isModalOpen,
    handleCloseModal,
    handleSubmit,
    editTask
}) => {

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        status: editTask
          ? Yup.string().oneOf(['complete', 'incomplete']).required('Status is required')
          : Yup.string(),
      });

    return (
        <div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={`${editTask ? 'Edit' : 'Add'} Todo Task`}
                width="60%"
                height="auto"
            >
                <Formik
                    initialValues={{
                        ...editTask,
                        title: editTask ? editTask?.title : '',
                        description: editTask ? editTask?.desc : '',
                        status: editTask ? editTask?.status : '',
                    }}
                    onSubmit={handleSubmit}
                    enableReinitialize
                    validationSchema={validationSchema}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <StyledForm className=''>
                                <StyledText className='label'>Title</StyledText>
                                <FormikInputField
                                    name="title"
                                    id="title"
                                    placeholder="Enter title here..."
                                />
                                <StyledText className='label'>Description</StyledText>
                                <FormikInputField
                                    name="description"
                                    id="description"
                                    placeholder="Enter description here..."
                                />
                                {editTask ?
                                    <>
                                        <StyledText className='label'>Status</StyledText>
                                        <Field
                                            component={FormikSelectField}
                                            name="status"
                                            id="status"
                                        />
                                    </> : ''
                                }

                                <button type="submit">Submit</button>
                            </StyledForm>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    );
};

const StyledForm = styled.div`
   .label{
     display: flex
   }
`
export default TodoForm;