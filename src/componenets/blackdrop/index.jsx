import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .Backdrop {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.48);
  }
  .BackdropOpen {
    display: block;
  }

  .BackdropClosed {
    display: none;
  }
`;

export function Backdrop({ show }) {
  const cssClasses = ['Backdrop', show ? 'BackdropOpen' : 'BackdropClosed'];

  return (
    <Wrapper>
      <div className={cssClasses.join(' ')}></div>
    </Wrapper>
  );
}
