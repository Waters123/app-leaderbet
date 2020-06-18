import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as ExitIcon } from '../../assets/icons/exit.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/usersmall.svg';
import xmas from '../../assets/images/xmas.png';

const Wrapper = styled.div`
  .Modal {
    position: fixed;
    display: flex;
    z-index: 200;
    background-color: white;
    top: 20%;
    left: 25%;
    height: 497px;
    border-radius: 10px;
    overflow: hidden;
    opacity: ${(props) => (props.show ? 1 : 0)};
    z-index: ${(props) => (props.show ? 500 : -500)};
    transition: opacity 0.2s;
  }

  .ModalOpen {
  }

  .ModalClosed {
    opacity: 0;
    z-index: -500;
  }

  .modal-left {
    display: flex;
    flex: 0 50%;
    padding: 25px;
    background-color: #201932;
    flex-direction: column;
    h3 {
      font-size: 17px;
      color: #eceffe;
      padding-bottom: 43px;
    }
    li {
      display: flex;
      justify-content: space-between;
      list-style: none;
      width: 365px;
      padding: 17px 0 17px 0;
      border-top: 1px solid #312946;
      &:last-child {
        border-bottom: 1px solid #312946;
      }
      span {
        font-size: 15px;
        color: #fff;
      }
      p {
        font-size: 15px;
        color: #ffe926;
      }
    }
    h5 {
      font-size: 13px;
      color: #b2aac5;
      width: 100%;
      text-align: center;
      padding-top: 50px;
    }
  }

  .modal-right {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #352d4b;
    width: 380px;
  }

  .btn-exit {
    position: absolute;
    outline: none;
    top: 20px;
    right: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .modal-right-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-box {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 223px;
    height: 133px;
    border: 2px solid #56bec9;
    border-radius: 10px;
    P {
      position: absolute;
      width: 119px;
      background-color: #352d4b;
      font-size: 16px;
      color: #ffffff;
      bottom: -10px;
      text-align: center;
    }
  }
  .prize-pool {
    display: inline-block;
    font-size: 40px;
    color: #ffe926;
    margin: 20px 0 20px 10px;
    p {
      display: inline-block;
      font-size: 15px;
    }
  }

  .possible-winners {
    li {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      font-size: 14px;
      width: 225px;
      height: 35px;
      background-color: #413858;
      border-radius: 18px;
      margin-bottom: 5px;
      div {
        display: flex;
        align-items: center;
      }
      p {
        margin-left: 5px;
        color: #fff;
      }
      span {
        color: #ffe926;
      }
    }
  }

  .modal-button-start {
    position: absolute;
    bottom: 15px;
    right: 15px;
    padding: 15px 28px;
    background-color: #2dbfb5;
    text-decoration: none;
    color: #fff;
    font-size: 19px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export function PopupMain({ show, close, children }) {
  const cssClasses = ['Modal', show ? 'ModalOpen' : 'ModalClosed'];

  const onClose = () => {
    close(false);
  };

  return (
    <Wrapper show={show}>
      <div className={cssClasses.join(' ')}>
        <div className="modal-left">
          <h3>თამაში დაიწყო</h3>
          <li>
            <span>ხანგრძლივობა</span>
            <p>2 საათი</p>
          </li>
          <li>
            <span>ქოინების რაოდენობა</span>
            <p>2 ცალი</p>
          </li>
          <li>
            <span>მინიმალური ფსო</span>
            <p>2 ლარი</p>
          </li>
          <li>
            <span>მაქსიმალური ფსონი</span>
            <p>2 საათი</p>
          </li>
          <h5>რამე ტექსტი</h5>
        </div>
        <div className="modal-right">
          <button onClick={onClose} className="btn-exit">
            <ExitIcon />
          </button>
          <div className="modal-right-content">
            <div className="img-box">
              <img src={xmas} alt="Xmas photo" />
              <p>JAMING JARS</p>
            </div>
            <h3 className="prize-pool">
              500 <p>GEL</p>
            </h3>
            <div className="possible-winners">
              <li>
                <div>
                  <UserIcon />
                  <p>1 ადგილი</p>
                </div>
                <span>2000 GEL</span>
              </li>
              <li>
                <div>
                  <UserIcon />
                  <p>1 ადგილი</p>
                </div>
                <span>2000 GEL</span>
              </li>
              <li>
                <div>
                  <UserIcon />
                  <p>1 ადგილი</p>
                </div>
                <span>2000 GEL</span>
              </li>
            </div>
          </div>
          <Link to={'/game'} className="modal-button-start">
            დაწყება
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
