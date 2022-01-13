import React, { useState } from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';

export default function Bmi({ nextStep, backStep }) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [waistline, setWaistline] = useState(0);
  const [alert, setAlert] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    console.log({
      weight,
      height,
      waistline
    });

    setWeight(0);
    setHeight(0);
    setWaistline(0);
    setAlert(true);
    nextStep();
  };

  const weightUpdate = ({ target }) => {
    setWeight(target.value);
  };
  const heightUpdate = ({ target }) => {
    setHeight(target.value);
  };

  const waistlineUpdate = ({ target }) => {
    setWaistline(target.value);
  };

  const alertUpdate = () => {
    setAlert(false);
  };

  const nextPage = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backPage = (e) => {
    e.preventDefault();
    backStep();
  };

  return (
    <div className="form-container">
      <div className="grid-container">
        <img
          src={logo}
          style={{
            width: 150,
            height: 150,
            margin: '0 auto',
            display: 'block'
          }}
        />
        <h2 className="text-center">ข้อมูลเพิ่มเติม</h2>
        {alert && (
          <div className="callout success">
            <button
              className="close-button"
              aria-label="Close alert"
              type="button"
              onClick={alertUpdate}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <p className="text-center">บันทึกข้อมูลสำเร็จ</p>
          </div>
        )}
        <form onSubmit={submitForm}>
          <div className="grid-x grid-padding-x">
            <div className="small-12 cell">
              <label>
                น้ำหนัก (กิโลกรัม)
                <input
                  type="number"
                  placeholder="กรุรากรอกน้ำหนัก"
                  required
                  value={weight}
                  onChange={weightUpdate}
                />
              </label>
              <label>
                ส่วนสูง (เซนติเมตร)
                <input
                  type="number"
                  placeholder="กรุรากรอกส่วนสูง"
                  required
                  value={height}
                  onChange={heightUpdate}
                />
              </label>

              <label>
                รอบเอว (เซนติเมตร)
                <input
                  type="number"
                  placeholder="กรุรากรอกรอบเอว"
                  required
                  value={waistline}
                  onChange={waistlineUpdate}
                />
              </label>

              <div className="flex-container align-justify">
                <Link to="/">
                  <button className="button">ย้อนกลับ</button>
                </Link>

                <button type="submit" className="button" onClick={nextPage}>
                  ต่อไป
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
