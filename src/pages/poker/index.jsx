import React, { useState } from 'react';
import styled from 'styled-components';

import { Popup } from './popup';
import { Backdrop } from '../../componenets/blackdrop';
import { Header } from '../../componenets/header';
import { Sidebar } from '../../componenets/sidebar';
import { FooterTable } from './footerTable';
import { ReactComponent as UserActive } from '../../assets/icons/useractive.svg';
import { ReactComponent as UserOff } from '../../assets/icons/useroff.svg';

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;

  .content-header {
    width: 1237px;
    background-color: #3d2f60;
    border-radius: 5px;
    margin-bottom: 10px;
    height: 60px;

    ul {
      display: flex;
      li {
        width: 126px;
        list-style: none;
        margin-right: 50px;
        text-align: center;
        transition: all 0.3s;
        &:hover {
          border-bottom: 4px solid #ff00b2;
        }
        &:hover a {
          color: #ffff00;
        }
      }
      a {
        display: block;
        text-decoration: none;
        color: #ffffff;
        font-size: 15px;
        padding: 21px 0 21px 0;
      }
    }
  }

  .content-games {
    position: relative;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    max-width: 1248px;
  }

  .card-box {
    position: relative;
    width: 301px;
    height: 341px;
    background-color: #5f39b7;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .card-box:not(:last-child) {
    margin-right: 11px;
  }

  .excl-1 {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    color: red;
    z-index: 1;
  }

  .excl-1::before {
    content: '!';
    position: absolute;
    bottom: 6rem;
    left: 2rem;
    color: #45258e;
    font-size: 80px;
    transform: rotate(20deg);
    opacity: 0.26;
  }
  .excl-1::after {
    content: '!';
    position: absolute;
    bottom: 10rem;
    right: 3rem;
    color: #45258e;
    font-size: 80px;
    transform: rotate(200deg);
    opacity: 0.26;
  }
  .excl-2::before {
    content: '!';
    position: absolute;
    top: 6rem;
    left: 2rem;
    color: #45258e;
    font-size: 80px;
    transform: rotate(20deg);
    opacity: 0.26;
  }
  .excl-2::after {
    content: '!';
    position: absolute;
    top: 1rem;
    right: 3rem;
    color: #45258e;
    font-size: 80px;
    transform: rotate(200deg);
    opacity: 0.26;
  }

  .card-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 9px;
    z-index: 2;
  }
  .card-header {
    color: #ffffff;
    font-size: 16px;
    margin: 0 0 18px 0;
    .header-text {
      display: block;
    }
    .dot {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #6ff27b;
    }
    p {
      display: inline-block;
      background-color: #95c7ee;
      margin-top: 9px;
      width: ${(props) => (props.display ? '100px' : '78px')};
      height: 4px;
      border-radius: 4px;
      margin-right: 5px;
      transition: width 0.3s ease-out;
    }
  }
  .card-textbox {
    position: absolute;
    top: 0;
    text-align: center;
    transform: ${(props) => (props.display ? 'translateY(20%)' : 'translateY(0)')};
    transition: all 0.2s;
  }

  h3 {
    color: #fff;
    font-size: ${(props) => (props.display ? '57px' : '60px')};
    transition: all 0.3s;

    p {
      display: inline-block;
      font-size: ${(props) => (props.display ? '18px' : '20px')};
    }
  }

  .card-text {
    font-size: 16px;
    color: #fff;
  }

  .card-icons {
    position: absolute;
    top: 110px;
    display: flex;
    opacity: ${(props) => (props.display ? 0 : 1)};
    transition: opacity 0.3s;
    i:not(:last-child) {
      margin: 0 20px 0 0;
    }
  }

  .btn-card {
    position: absolute;
    top: 150px;
    transform: ${(props) => (props.display ? 'translateY(-20%)' : 'translateY(0)')};
    transition: transform 0.3s;
  }

  .btn-card-big {
    position: absolute;
    top: 21rem;
  }
`;

const FooterContent = styled.div`
  .footer-nav {
    display: flex;
    list-style: none;
    margin-top: 50px;
    margin-bottom: 15px;
    button {
      display: block;
      margin-bottom: 16px;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 17px;
      color: #ffffff;
      cursor: pointer;
    }

    li {
      margin-right: 76px;
    }
    li:first-child {
      margin-left: 20px;
    }

    div {
      display: flex;
      align-items: center;
    }
    .line {
      width: 132px;
      height: 4px;
      background-color: #6d728e;
      border-radius: 4px;
      margin-right: 5px;
    }

    .circle {
      width: 6px;
      height: 6px;
      background-color: #ffd919;
      border-radius: 50%;
    }
  }
`;

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export function Poker() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const openPopup = () => {
    setPopupIsOpen(true);
  };

  const closePopup = () => {
    setPopupIsOpen(false);
  };

  return (
    <div className="container">
      <Header></Header>
      <ContentWrapper display={popupIsOpen}>
        <div className="content">
          <div className="content-header">
            <nav>
              <ul>
                <li>
                  <a href="#">ALL &nbsp; GAMES</a>
                </li>
                <li>
                  <a href="#">ONLY &nbsp; 3 &nbsp; PLAYER</a>
                </li>
                <li>
                  <a href="#">ONLY &nbsp; 5 &nbsp;PLAYER</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="content-games">
            <Popup show={popupIsOpen} closePopup={setPopupIsOpen} starInterval={popupIsOpen} />
            <Backdrop show={popupIsOpen} closed={closePopup} />
            {cards.map((x, i) => (
              <div key={i} className="card-box">
                <div className="card-content">
                  <div className="card-header">
                    <span className="header-text">5 კაციანი</span>
                    <p></p>
                    <p className="dot"></p>
                  </div>
                  <div className="f-column">
                    <div className="card-textbox">
                      <h3>
                        500 <p>GEL</p>
                      </h3>
                      <p className="card-text">მაქს.მოგება</p>
                    </div>
                    <div className="card-icons">
                      <i>
                        <UserActive />
                      </i>
                      <i>
                        <UserActive />
                      </i>
                      <i>
                        <UserOff />
                      </i>
                      <i>
                        <UserOff />
                      </i>
                      <i>
                        <UserOff />
                      </i>
                    </div>
                    <button className="btn-primary btn-light btn-card">5 ლარი</button>
                    <button className="btn-big btn-card-big" onClick={openPopup}>
                      რეგისტრაცია
                    </button>
                  </div>
                </div>
                <span className="excl-1"></span>
                <span className="excl-2"></span>
              </div>
            ))}
          </div>

          <FooterContent>
            <div className="footer-nav">
              <li>
                <button>ტოპ მოგებები</button>
                <div>
                  <span className="line"></span>
                  <span className="circle"></span>
                </div>
              </li>
              <li>
                <button>ლიდერბორდი</button>
              </li>
              <li>
                <button>ისტორია</button>
              </li>
              <li>
                <button>წესები</button>
              </li>
            </div>
            <FooterTable></FooterTable>
          </FooterContent>
        </div>

        <Sidebar shouldSlide={popupIsOpen} />
      </ContentWrapper>
    </div>
  );
}
