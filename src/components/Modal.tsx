import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ModalProps } from '../types/todo';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  width,
  height,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent width={width} height={height} onClick={(e) => e.stopPropagation()}>
        {title && (
          <ModalHeader>
            {title}
            <button onClick={onClose}>Close</button>
          </ModalHeader>
        )}
        <div>{children}</div>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div<{ width?: string; height?: string }>`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: ${({ width }) => width || '50%'};
  height: ${({ height }) => height || 'auto'};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`;

export default Modal;