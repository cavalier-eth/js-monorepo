import { FC, ReactNode, SyntheticEvent } from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import styled from 'styled-components';
import { zIndex } from '@snx-v1/constantsUi';

type FullScreenModalProps = {
  title?: ReactNode;
  isOpen: boolean;
  children: ReactNode;
  onDismiss?: (event?: SyntheticEvent<Element, Event> | undefined) => void;
};

export const FullScreenModal: FC<FullScreenModalProps> = ({
  title,
  children,
  isOpen,
  onDismiss,
  ...rest
}) => (
  <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismiss} {...rest}>
    <StyledDialogContent aria-label="modal">
      {title && <Title className="title">{title}</Title>}
      <Content className="content">{children}</Content>
    </StyledDialogContent>
  </StyledDialogOverlay>
);

const StyledDialogOverlay = styled(DialogOverlay)`
  z-index: ${zIndex.DIALOG_OVERLAY};
  background: ${(props) => props.theme.colors.black};
`;

const StyledDialogContent = styled(DialogContent)`
  padding: 0;
  border: 0;
  background: none;
`;

const Title = styled.div`
  text-transform: capitalize;
  font-family: ${(props) => props.theme.fonts.condensedBold};
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
  line-height: 24px;
  padding-bottom: 24px;
`;
const Content = styled.div``;

export default FullScreenModal;
