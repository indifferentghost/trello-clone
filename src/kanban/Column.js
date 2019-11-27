import React from 'react';
import PropTypes from 'prop-types';

export function Column({ children }) {
  return <div>{children}</div>;
}

Column.propTypes = {
  children: PropTypes.element,
};
