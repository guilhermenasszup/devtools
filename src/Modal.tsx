/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  margin-top: 20px;
`;

const Modal = ({ isOpen, onClose, children }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef && modalRef.current) {
      modalRef?.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <ModalContainer
        ref={modalRef}
        tabIndex={-1}
        role='dialog'
        aria-modal='true'
      >
        <CloseButton onClick={onClose} aria-label='Close modal'>
          &times;
        </CloseButton>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
