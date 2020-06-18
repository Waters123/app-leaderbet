import React, { useState } from 'react';
import styled from 'styled-components';

import { Table } from './table';
import { Backdrop } from '../blackdrop';
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg';
import { ReactComponent as CherryIcon } from '../../assets/icons/cherry.svg';
import { ReactComponent as CoinsIcons } from '../../assets/icons/coins.svg';
import { ReactComponent as CashIcon } from '../../assets/icons/cash.svg';
import { ReactComponent as ClockSm } from '../../assets/icons/clocksmall.svg';
import { ReactComponent as UserSm } from '../../assets/icons/usericonsmall.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 10px;
  .sidebar-header {
    background-color: #3b354a;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .button-box {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    button {
      display: flex;
      width: ${(props) => (props.shouldSlide ? '130px' : '118px')};
      font-size: 15px;
      outline: none;
      color: #b2a2d8;
      background-color: transparent;
      border: 1px solid #60667e;
      border-radius: 18px;
      padding: 5px 12px 5px;
      align-items: center;
      justify-content: space-between;
      transition: width 0.3s;
      cursor: pointer;
    }
  }

  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 127px;
    height: 127px;
    background-color: #5936b1;
    border-radius: 50%;
    border: 8px solid #9c75f8;
  }

  h2 {
    font-size: 26px;
    color: #ffffff;
    margin: 16px 0 16px 0;
  }

  .info-box {
    width: 290px;
    height: 48px;
    border-radius: 27px;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 15px;
    color: #ffffff;
    margin-bottom: 10px;
    cursor: pointer;
    p {
      margin-left: 10px;
    }
  }
  .info-box-grey {
    background-color: #6e717e;
  }

  .info-box-green {
    background-color: #217c8b;
  }

  .sidebar-bottom {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #35364a;
    border-radius: 5px;
    padding: 20px 15px;
  }
  .sidebar-bottom-title {
    h3 {
      font-size: 14px;
      color: #c5d8f9;
      margin-bottom: 5px;
    }
    div {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
    }
    .line {
      width: 98px;
      height: 4px;
      background-color: #bdc63e;
      border-radius: 4px;
      margin-right: 5px;
    }
    .circle {
      width: 6px;
      height: 6px;
      background-color: #9a6ff2;
      border-radius: 50%;
    }
  }

  .top-spin-box {
    background-color: #444563;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }

  .top-spin-desc {
    display: flex;
    justify-content: space-between;
    height: 45px;
  }

  .top-spin-gel {
    display: flex;
    color: #39b7ff;

    h5 {
      display: inline-block;
      font-size: 37px;
      margin-right: 5px;
      align-self: flex-end;
    }
    p {
      font-size: 12px;
      display: inline-block;
      align-self: flex-end;
    }
  }
  .top-spin-time {
    span {
      font-size: 15px;
      color: #b5b7be;
      margin-left: 10px;
    }
  }
  .top-spin-users {
    display: flex;
    align-items: center;
    p {
      font-size: 15px;
      color: #ffffff;
      margin-left: 5px;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #575875;
      border-radius: 3px;
      width: 19px;
      height: 19px;
      margin-left: 10px;
      span {
        font-size: 20px;
        font-weight: 800;
        color: #9899af;
      }
    }
  }
  .top-spin-score {
    display: block;
    font-size: 18px;
    color: #d2efff;
    margin-top: 10px;
  }
`;

const topSpins = [1, 2, 3, 4, 5];

export function Sidebar({ shouldSlide }) {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  return (
    <Wrapper shouldSlide={shouldSlide}>
      <Backdrop show={showPopup} />
      <Table show={showPopup} closePopup={setShowPopup} />
      <Table />
      <div className="sidebar-header">
        <div class="button-box">
          <button onClick={handlePopup}>
            <i>
              <ClockIcon />
            </i>
            ისტორია
          </button>
        </div>
        <div className="icon-box">
          <CherryIcon />
        </div>
        <h2>Muscul Bones</h2>
        <div className="info-box info-box-grey ">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CoinsIcons />
            <p>ბალანსი</p>
          </div>
          <p>1995.56 GEL</p>
        </div>
        <div className="info-box info-box-green">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CashIcon />
            <p>უფასო სპინები</p>
          </div>
          <p>18 GEL</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-bottom-title">
          <h3>ტოპ სპინები</h3>
          <div>
            <span className="line"></span>
            <span className="circle"></span>
          </div>
        </div>
        {topSpins.map((x, i) => (
          <div className="top-spin-box">
            <div className="top-spin-desc">
              <div className="top-spin-gel">
                <h5>
                  500 <p>GEL</p>
                </h5>
              </div>
              <div className="top-spin-time">
                <ClockSm />
                <span>23.04.19</span>
                <span>20:33</span>
              </div>
            </div>
            <div className="top-spin-users">
              <i>
                <UserSm />
              </i>
              <p>ნოდარა, ელდარა, ემზარა</p>
              <div>
                <span>+</span>
              </div>
            </div>
            <span className="top-spin-score">100 X 2</span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
