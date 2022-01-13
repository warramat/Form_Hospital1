import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to="/">หน้าแรก</Link>
        </li>
        <li>
          <Link to="/screen">คัดกรอง</Link>
        </li>
        <li>
          <Link to="/status">ประวัติ</Link>
        </li>
      </ul>
    </nav>
  );
}
