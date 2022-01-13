import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.jpg';
import Doct from '../img/doctor.jpg';
import Checkup from '../img/checkup1.png';
import Editform from '../img/editform.png';

export default function Screen() {
  return (
    <div className="form-container">
      <div className="border">
        <div className="logo_container">
          <img className="logo" src={Logo} />
        </div>
        <h5 className="text-right">เทศบาลเมืองปากพูน</h5>
        <h5>สุขภาพ</h5>
        <div className="grid-x ">
          <div className="small-6 medium-3 cell">
            <Link className="menublock" to="/screen">
              <img src={Doct} className="doctlogo" />
              <h6 className="text-center">คัดกรองสุขภาพ</h6>
            </Link>
          </div>
          <div className="small-6 medium-3 cell">
            <Link className="menublock" to="/report">
              <img src={Checkup} className="doctlogo" />
              <h6 className="text-center">ประวัติคัดกรองสุขภาพ</h6>
            </Link>
          </div>
        </div>
        <hr />
        <h5>ข้อมูลส่วนตัว</h5>
        <div className="grid-x">
          <div className="small-6 medium-3 cell">
            <Link className="menublock" to="/register">
              <img src={Editform} className="doctlogo" />
              <h6>แก้ไขข้อมูลส่วนตัว</h6>
            </Link>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
