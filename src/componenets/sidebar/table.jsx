import React from 'react';
import styled from 'styled-components';

import { ReactComponent as UserIcon } from '../../assets/icons/usertable.svg';
import { ReactComponent as ExitIcon } from '../../assets/icons/exit.svg';

const Wrapper = styled.div`
  opacity: ${(props) => (props.show ? 1 : 0)};
  z-index: ${(props) => (props.show ? 200 : -200)};
  transition: opacity 0.2s;

  .Table {
    position: fixed;
    z-index: 200;
    box-shadow: 0px 0px 40px #00000096;
    border-radius: 10px;
    background-color: #35364a;
    padding: 10px;
    top: 10%;
    left: 25%;
    width: 964px;

    div {
      display: flex;
      justify-content: space-between;
    }
    h2 {
      font-size: 17px;
      color: #eceffe;
    }
    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }

  .ModalOpen {
    display: block;
  }

  .ModalClosed {
    display: none;
  }
  table {
    margin-top: 20px;
    border-collapse: collapse;
    width: 100%;
  }

  td {
    height: 66px;
    font-size: 15px;
    color: #fff;
  }

  table td,
  table th {
    padding: 10px 30px;
    border-bottom: 1px solid #35364a;
  }

  td:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  td:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #ffff00;
  }

  table tr {
    background-color: #444563;
    font-size: 14px;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #35364a;
    color: white;
  }

  .td-different {
    width: 170px;
    font-size: 13px;
    i {
      float: left;
      margin-right: 3px;
    }
  }
`;
const history = [1, 2, 3, 4, 5, 6, 7, 8];

export function Table({ closePopup, show }) {
  return (
    <Wrapper show={show}>
      <div className="Table">
        <div className="">
          <h2>ისტორია</h2>
          <button className="btn-exit" onClick={() => closePopup(false)}>
            <ExitIcon />
          </button>
        </div>
        <table>
          <tr>
            <th>თარიღი</th>
            <th>ღირებუ.ი</th>
            <th>რა xი</th>
            <th style={{ textAlign: 'center' }}>რაოდენობა</th>
            <th>მონაწილეები</th>
            <th style={{ textAlign: 'center' }}>ადგილი</th>
            <th>მოგებული</th>
          </tr>
          {history.map((x, i) => (
            <tr key="i">
              <td>23 იანვ. </td>
              <td>2 ლარი</td>
              <td>100X</td>
              <td style={{ textAlign: 'center' }}>10</td>
              <td className="td-different">
                <i>
                  <UserIcon />
                </i>
                ნოდარა, ელდარა, ემზარა,ზაირა,მერაბა
              </td>
              <td style={{ textAlign: 'center' }}>2</td>
              <td>5000 ლარი</td>
            </tr>
          ))}
        </table>
      </div>
    </Wrapper>
  );
}
