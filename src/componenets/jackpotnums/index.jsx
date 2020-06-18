import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 100px 0 0;
`;

const JackpotText = styled.p`
  font-size: 15px;
  color: #98aac2;
  padding: 13px 0 0 13px;
`;

const NumbersWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  .number {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #505081;
    width: 27px;
    height: 34px;
    border-radius: 3px;
    margin-right: 3px;
    span {
      color: #d6d9d9;
      font-size: 20px;
    }
  }

  .decimal {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #505081;
    width: 23px;
    height: 29px;
    border-radius: 3px;
    margin-right: 3px;
    span {
      font-size: 16px;
      color: #9aaacf;
    }
  }

  .comma {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #505081;
    margin-right: 3px;
  }
`;

export function JackpotNums({ jackpot }) {
  let isComma = false;

  return (
    <Wrapper>
      <NumbersWrapper>
        {Array.from(jackpot).map((num, i) => {
          if (num == ',') {
            isComma = true;
          }
          if (isComma) {
            return num === ',' ? (
              <div key={i} className="comma"></div>
            ) : (
              <div key={i} className="decimal">
                <span>{num}</span>
              </div>
            );
          } else {
            return (
              <div key={i} className="number">
                <span>{num}</span>
              </div>
            );
          }
        })}
      </NumbersWrapper>
      <JackpotText className="jackpot-text">LEADER JACKPOT</JackpotText>
    </Wrapper>
  );
}
