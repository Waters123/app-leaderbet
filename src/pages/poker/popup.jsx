import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { PopupMain } from '../../componenets/popupmain';
import { ReactComponent as UserActive } from '../../assets/icons/userbigonline.svg';
import { ReactComponent as UserOff } from '../../assets/icons/useroffbig.svg';
import { ReactComponent as UserMed } from '../../assets/icons/usermedium.svg';
import Xmas from '../../assets/images/xmas.png';

const Wrapper = styled.div`
  .popup {
    position: absolute;
    background-color: #198a9c;
    padding: 10px;
    border-radius: 5px;
    top: 0;
    left: 0;
    width: 49.5%;
    height: 341px;
    transition: opacity 0.2s ease-out;
    opacity: 1;
    z-index: -200;
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.2);
  }

  .popupOpen {
    opacity: 1;
    z-index: 200;
  }

  .popupClosed {
    opacity: 0;
  }
  .card-popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .popup-header-left {
    h5 {
      color: #fff;
      font-size: 16px;
      margin-bottom: 22px;
    }
    div {
      display: flex;
      align-items: center;
      .line {
        width: 77px;
        height: 4px;
        background-color: #95c7ee;
        border-radius: 4px;
        margin-right: 5px;
      }

      .circle {
        width: 6px;
        height: 6px;
        background-color: #6ff27b;
        border-radius: 50%;
      }
    }
  }

  .popup-header-right {
    display: flex;
    align-items: center;
    h5 {
      width: 114px;
      padding-top: 1px;
      display: inline-block;
      font-size: 40px;
      color: #fff;
      margin-left: 37px;
    }
    p {
      display: inline-block;
      font-size: 15px;
    }
  }

  .card-popup-content {
    position: relative;
    display: flex;
    justify-content: center;
    h3 {
      position: absolute;
      font-size: 20px;
      top: 50px;
      opacity: ${(props) => (props.time === 0 ? 0 : 1)};
    }
  }
  .card-popup-icons {
    position: absolute;
    top: 115px;
    transform: ${(props) => (props.time === 0 ? 'translateY(350%) translateX(-25%);' : 'none')};
    transition: transform 0.3s;
    i:not(:last-child) {
      margin-right: ${(props) => (props.time === 0 ? '52px' : '65px')};
      transition: margin 0.2s ease-out;
    }
  }

  .user-loading {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 170px;
    opacity: ${(props) => (props.time === 0 ? 0 : 1)};
    p {
      font-size: 14px;
      color: #fff;
      margin-bottom: 15px;
    }
  }

  .loading-bar {
    width: 314px;
    height: 3px;
    background-color: #26c6df;
    border-radius: 6px;
  }

  .game-description {
    display: flex;
    margin-top: 35px;
    opacity: ${(props) => (props.time === 0 ? 1 : 0)};
    transition: opacity 0.3s ease-out;
  }

  .game-description-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 223px;
    height: 133px;
    border: 2px solid #56bec9;
    border-radius: 10px;
    &:not(:last-child) {
      margin-right: 20px;
    }
    span {
      color: #fff;
      font-size: 60px;
    }
    p {
      position: absolute;
      top: 124px;
      text-align: center;
      color: #fff;
      font-size: 16px;
      width: 131px;
      height: 24px;
      background-color: #198a9c;
    }
  }

  .btn-cancel {
    position: absolute;
    bottom: 10px;
    right: 12px;
    padding: 15px 25px;
    background-color: ${(props) => (props.time === 0 ? '#2DBFB5' : '#1a6f7d')};
    border: none;
    font-size: 19px;
    color: #fff;
    border-radius: 5px;
    transition: background-color 0.2s;
    cursor: pointer;
  }
`;

const users = ['online', 'online', 'online', 'offline', 'offline'];
let interval;

export function Popup({ show, starInterval, closePopup }) {
  const [timer, setTimer] = useState(2);
  const [popupMainOpen, setPopupMainOpen] = useState(false);
  const cssClasses = ['popup', show ? 'popupOpen' : 'popupClosed'];

  useEffect(() => {
    if (starInterval) {
      interval = setInterval(() => {
        setTimer((seconds) => seconds - 1);
        if (timer === 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [starInterval]);

  useEffect(() => {
    if (timer == 0) {
      clearInterval(interval);
    }
  }, [timer]);

  const onButtonClick = () => {
    if (timer <= 0) {
      setPopupMainOpen(true);
    } else {
      closePopup(false);
      clearInterval(interval);
      setTimer(2);
    }
  };

  return (
    <Wrapper time={timer}>
      <PopupMain show={popupMainOpen} close={setPopupMainOpen}></PopupMain>
      <div className={cssClasses.join(' ')}>
        <div className="card-popup-header">
          <div className="popup-header-left">
            <h5>5 კაციანი</h5>
            <div>
              <span className="line"></span>
              <span className="circle"></span>
            </div>
          </div>
          <div className="popup-header-right">
            <button className="btn-primary-small">5 ლარი</button>
            <h5>
              5000 <p>GEL</p>
            </h5>
          </div>
        </div>
        <div className="card-popup-content">
          <h3>გთხოვთ დაელოდოთ მოწინააღმდეგეს</h3>
          <div className="card-popup-icons">
            {timer !== 0
              ? users.map((user, i) =>
                  user == 'online' ? (
                    <i key={i}>
                      <UserActive />
                    </i>
                  ) : (
                    <i key={i}>
                      <UserOff />
                    </i>
                  )
                )
              : users.map((user, i) => (
                  <i key={i}>
                    <UserMed />
                  </i>
                ))}
          </div>
          <div className="user-loading">
            <p>სავარაუდო მოლოდინის დრო: {timer} წამი</p>
            <div className="loading-bar"></div>
          </div>
          <div className="game-description">
            <div className="game-description-box">
              <span>5X</span>
              <p>კოეფიციენტი</p>
            </div>
            <div className="game-description-box">
              <img src={Xmas} alt="" />
              <p>JAMING JARS</p>
            </div>
          </div>
        </div>
        <button className="btn-cancel btn-start" onClick={onButtonClick}>
          {timer === 0 ? 'დაწყება' : 'გაუქმება'}
        </button>
      </div>
    </Wrapper>
  );
}
