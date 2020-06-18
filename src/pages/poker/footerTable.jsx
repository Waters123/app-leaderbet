import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg';
import { ReactComponent as UserActive } from '../../assets/icons/useractive.svg';

const Wrapper = styled.div`
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    text-align: center;
    padding: 8px;
    height: 52px;
    font-size: 15px;
    color: #ffffff;
  }
  td {
    border-bottom: 1px solid #202126;
  }

  td:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  td:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  th {
    color: #b5b7be;
  }

  tr:nth-child(odd) {
    background-color: #272936;
  }
  tr:nth-child(even) {
    background-color: #252630;
  }

  .th-icon {
    width: 30px;
  }
  .td-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      margin-right: 20px;
    }
    div {
      background-color: #383946;
      width: 3px;
      height: 27px;
    }
  }

  .td-clock {
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      margin-right: 10px;
    }
  }
  .td-coefficient {
    span {
      background-color: #323341;
      padding: 5px 18px;
      border-radius: 15px;
      color: #ffd919;
    }
  }
  .td-user {
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      margin-right: 10px;
    }
  }
  .td-winner {
    span {
      background-color: #5f39b7;
      padding: 5px 18px;
      border-radius: 15px;
      color: #ffd919;
    }
  }
`;

const tablecells = [1, 3, 4, 5, 6, 7, 8, 9];

export function FooterTable() {
  return (
    <Wrapper>
      <div className="footer-table">
        <table>
          <tr>
            <th className="th-icon"></th>
            <th>ნომერი</th>
            <th>დრო</th>
            <th>კოეფიციენტი</th>
            <th>მომხმარებელი</th>
            <th>მოგებული თანხა</th>
          </tr>
          {tablecells.map((x, i) => (
            <tr key={i}>
              <td className="td-icon">
                <i>
                  <UserActive />
                </i>
                <div></div>
              </td>
              <td># 4412452</td>
              <td className="td-clock">
                <i>
                  <ClockIcon />
                </i>
                12:33
              </td>
              <td className="td-coefficient">
                <span>2.37</span>
              </td>
              <td className="td-user">
                <i>
                  <UserActive />
                </i>
                Nodard...
              </td>
              <td className="td-winner">
                <span>33.35ლ</span>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Wrapper>
  );
}
