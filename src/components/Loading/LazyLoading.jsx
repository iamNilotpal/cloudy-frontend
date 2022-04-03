import React from 'react';
import styled from 'styled-components';

const LazyLoading = () => {
  return (
    <Wrapper className="spinner">
      <span className="spinner-part-0"></span>
      <span className="spinner-part-1"></span>
      <span className="spinner-part-2"></span>
      <span className="spinner-part-3"></span>
      <span className="spinner-part-0"></span>
      <span className="spinner-part-1"></span>
      <span className="spinner-part-2"></span>
      <span className="spinner-part-3"></span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .spinner {
    --accent: fuchsia;
    --max-scale: 4;
    --speed: 0.2;
    display: flex;
    gap: 0.3em;
    transform: skew(15deg, 10deg);
  }

  .spinner span {
    display: block;
    background-color: var(--accent);
    box-shadow: 1px 1px 5px 0.2px var(--accent);
    width: 0.7px;
    height: 0.6em;
  }

  .spinner .spinner-part-0 {
    animation: load432 calc(1s / var(--speed)) linear infinite;
  }

  .spinner .spinner-part-1 {
    animation: load432 calc(0.16s / var(--speed)) linear infinite;
  }

  .spinner .spinner-part-2 {
    animation: load432 calc(0.4s / var(--speed)) linear infinite;
  }

  .spinner .spinner-part-3 {
    animation: load432 calc(0.5s / var(--speed)) linear infinite;
  }

  @keyframes load432 {
    50% {
      transform: scaleY(var(--max-scale));
    }
  }
`;

export default LazyLoading;
