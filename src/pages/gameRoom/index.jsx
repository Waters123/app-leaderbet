import React from 'react';
import styled from 'styled-components';

import { Popup } from './popup';
import { ReactComponent as LeaderIcon } from '../../assets/icons/leaderbetlogo.svg';
import { ReactComponent as UserSmall } from '../../assets/icons/usersmall-2.svg';

const Wrapper = styled.div`
  display: flex;
  height: 99vh;
  .side-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 100%;
    background: #241e36;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
    h2 {
      font-size: 16px;
      margin: 40px;
      color: #ffffff;
    }
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 77px;
    width: 338px;
    height: 262px;
    background-color: #5834ac;
    border-radius: 10px;
    h3 {
      color: #fff;
      font-size: 60px;
      margin: 20px 0 20px 30px;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      p {
        display: inline-block;
        font-size: 20px;
      }
    }
    p {
      font-size: 16px;
      color: #fff;
    }
  }

  .player {
    display: flex;
    align-items: center;
    padding: 10px;
    width: 338px;
    height: 81px;
    background-color: #352d4b;
    border-radius: 41px;
    margin-bottom: 10px;
  }

  .number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 63px;
    height: 63px;
    margin-right: 16px;
    border-radius: 50%;
    background-color: #3f365a;
    span {
      font-size: 26px;
      color: #fff;
    }
  }
  .player-info {
    div {
      display: flex;
      align-items: center;
    }
    i {
      padding-right: 5px;
    }
    p {
      font-size: 14px;
      color: #fff;
    }
  }
  .user-id {
    font-size: 26px;
    color: #39b7ff;
  }

  .chips {
    text-align: center;
    margin-left: 110px;
    span {
      color: #c3dae8;
      font-size: 23px;
    }
    p {
      color: #c3dae8;
      font-size: 13px;
    }
  }

  .winner {
    background-color: #5834ac;
    .number {
      background-color: #ffca2a;
      span {
        color: black;
      }
    }
    .user-id {
      color: #ffff00;
    }
  }
`;

export function GameRoom() {
  return (
    <Wrapper>
      <Popup />
      <div className="side-left">
        <div className="box">
          <i>
            <LeaderIcon />
          </i>

          <h3>
            500 <p>GEL</p>
          </h3>
          <p>საპირზო ფონდი</p>
        </div>
        <h2>ლიდერბორდი</h2>
        <div>
          <div className="player">
            <div className="number">
              <span>1</span>
            </div>
            <div className="player-info">
              <div>
                <i>
                  <UserSmall />
                </i>
                <p>Alberto</p>
              </div>
              <span className="user-id">322145</span>
            </div>
            <div className="chips">
              <span>3264</span>
              <p>coin</p>
            </div>
          </div>
          <div className="player winner">
            <div className="number">
              <span>1</span>
            </div>
            <div className="player-info">
              <div>
                <i>
                  <UserSmall />
                </i>
                <p>Alberto</p>
              </div>
              <span className="user-id">322145</span>
            </div>
            <div className="chips">
              <span>3264</span>
              <p>coin</p>
            </div>
          </div>
          <div className="player">
            <div className="number">
              <span>1</span>
            </div>
            <div className="player-info">
              <div>
                <i>
                  <UserSmall />
                </i>
                <p>Alberto</p>
              </div>
              <span className="user-id">322145</span>
            </div>
            <div className="chips">
              <span>3264</span>
              <p>coin</p>
            </div>
          </div>
          <div className="player">
            <div className="number">
              <span>1</span>
            </div>
            <div className="player-info">
              <div>
                <i>
                  <UserSmall />
                </i>
                <p>Alberto</p>
              </div>
              <span className="user-id">322145</span>
            </div>
            <div className="chips">
              <span>3264</span>
              <p>coin</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
