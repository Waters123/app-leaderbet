import React from 'react';
import styled from 'styled-components';

import { JackpotNums } from '../jackpotnums';

import { ReactComponent as LeaderIcon } from '../../assets/icons/leaderbetlogo.svg';
import { ReactComponent as ChipsIcon } from '../../assets/icons/chipsicon.svg';
import { ReactComponent as OptionsIcon } from '../../assets/icons/options.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;

  .option-icons {
    display: inline-block;
    min-width: 200px;
    margin: 0 0 0 35px;
  }

  .icon {
    display: inline-block;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .icon:not(:last-child) {
    margin-right: 25px;
  }
`;

export function Header() {
  let isComma = false;

  return (
    <Wrapper>
      <LeaderIcon />
      <div style={{ display: 'flex' }}>
        <JackpotNums jackpot={'13232,23'} />
        <JackpotNums jackpot={'13232,23'} />
      </div>
      <div className="header-options">
        <button className="btn-primary btn-dark">
          <ChipsIcon style={{ margin: '0 5px 0 0 ' }} />
          Cashier
        </button>
        <div className="option-icons">
          <button className="icon">
            <OptionsIcon />
          </button>
          <button className="icon">
            <OptionsIcon />
          </button>
          <button className="icon">
            <OptionsIcon />
          </button>
          <button className="icon">
            <OptionsIcon />
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
