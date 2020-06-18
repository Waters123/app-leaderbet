import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Trophy } from '../../assets/icons/trophy.svg';

const Wrapper = styled.div`
  .popup {
    position: fixed;
    z-index: 200;
    background-color: #241e36;
    text-align: center;
    box-sizing: border-box;
    top: 30%;
    left: 40%;
    width: 446px;
    height: 377px;
    box-shadow: 0px 0px 40px #00000096;
    border-radius: 10px;
    i {
      display: block;
      margin: 85px 0 15px 0px;
    }
  }

  .prize {
    display: flex;
    flex-direction: column;
    background-color: #201a31;
    justify-content: center;
    align-items: center;
    width: 299px;
    height: 88px;
    border-radius: 44px;
    margin: 0 auto;
    h3 {
      color: #ffff00;
      font-size: 50px;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      p {
        display: inline-block;
        font-size: 20px;
        color: #ffff00;
      }
    }

    h4 {
      font-size: 14px;
      color: #fff;
    }
  }
  h1 {
    font-size: 40px;
    color: #fff;
    margin: 0 0 10px 0px;
  }
  p {
    font-size: 13px;
    color: #fff;
    margin: 0 0 10px 0px;
  }
  button {
    width: 135px;
    height: 62px;
    color: #ffff;
    font-size: 19px;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #2f2847;
    margin: 15px 0 0 290px;
    cursor: pointer;
  }
`;

export function Popup() {
  return (
    <Wrapper>
      <div className="popup">
        <i>
          <Trophy />
        </i>
        <h1>გილოცავთ!</h1>
        <p>თქვენ დაიკავეთ 1 ადგილი</p>
        <div className="prize">
          <div>
            <h3>
              500<p>GEL</p>
            </h3>
          </div>
          <h4>მოგებული თანხა</h4>
        </div>
        <button>დახურვა</button>
      </div>
    </Wrapper>
  );
}
