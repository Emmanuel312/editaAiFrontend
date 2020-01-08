import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  border-radius: 15px;
  background: ${props => props.color};
  width: 100%;
  height: 100%;
  max-height: 400px;
  max-width: 660px;
  margin: 0 auto;
  overflow-y: auto;

  ${props =>
    props.borderRadiusTop &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}

  ${props =>
    props.opacityColor &&
    css`
      background: rgba(236, 0, 0, 0.5);
    `}
`;
