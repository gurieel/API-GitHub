import React from 'react';
import PropTypes from 'prop-types';

import { MdOutlineClear } from 'react-icons/md';

import { Container, Selector, Cleaner } from './styles';

export default function Filter({ languages, currentLanguage, onClick }) {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected' : ''}
      onClick={() => onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick(undefined)}>
        <MdOutlineClear size={15} /> Limpar
      </Cleaner>
    </Container>
  );
}

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
};

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};
