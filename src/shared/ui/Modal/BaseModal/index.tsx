import { createPortal } from 'react-dom';

import { BackDrop, ModalBox, Title } from 'shared/ui/Modal/styled';
import { BaseModalProps } from 'shared/ui/Modal/type';

import { CloseButton } from './CloseButton';

/**
 * base modal을 사용해 모달을 확장
 */
const BaseModal = ({ open, children, onClose }: BaseModalProps) => {
  if (!open) return;

  return createPortal(
    <>
      <BackDrop onClick={onClose} />
      <ModalBox>{children}</ModalBox>
    </>,
    document.body,
  );
};

export const Modal = Object.assign(BaseModal, {
  Title,
  CloseButton,
});