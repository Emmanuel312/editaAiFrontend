import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Box({
  color,
  children,
  borderRadiusTop,
  opacityColor,
}) {
  return (
    <Container
      borderRadiusTop={borderRadiusTop}
      opacityColor={opacityColor}
      color={color}
    >
      {children}
    </Container>
  );
}

Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  color: PropTypes.string,
  borderRadiusTop: PropTypes.bool,
  opacityColor: PropTypes.bool,
};

Box.defaultProps = {
  color: '#fff',
  borderRadiusTop: false,
  opacityColor: false,
};
