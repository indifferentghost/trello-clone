import React from 'react';
import PropTypes from 'prop-types';

export function Card({ children }) {
  return <div>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.element,
};
