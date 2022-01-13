import React, { useState } from 'react';
import logo from '../img/logo.jpg';

export default function P2({ nextStep, backStep }) {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [phone, setPhone] = useState(0);
  const [hos, setHos] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [alert, setAlert] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    console.log({ name, sex, phone, hos, date, address });
    setAlert(true);
    setName('');
    setSex('');
    setPhone(0);
    setHos('');
    setDate('');
    setAddress('');
  };

  const nameUpdate = ({ target }) => {
    setName(target.value);
  };
  const sexUpdate = ({ target }) => {
    setSex(target.value);
  };
  const phoneUpdate = ({ target }) => {
    setPhone(target.value);
  };

  const hosUpdate = ({ target }) => {
    setHos(target.value);
  };

  const dateUpdate = ({ target }) => {
    setDate(target.value);
  };

  const addressUpdate = ({ target }) => {
    setAddress(target.value);
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
        <h1 className="text-center">ข้อมูลส่วนตัว</h1>
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
                ชื่อ - นามสกุล
                <input
                  type="text"
                  placeholder="ตัวอย่าง นายดำ แดงดี"
                  required
                  value={name}
                  onChange={nameUpdate}
                />
              </label>

              <fieldset className="small-12 cell" onChange={sexUpdate}>
                <legend>เพศ</legend>
                <div className="grid-x">
                  <div className="small-6 cell">
                    <input
                      type="radio"
                      name="sex"
                      value="man"
                      id="man"
                      required
                    />
                    <label htmlFor="man">ชาย</label>
                  </div>
                  <div className="small-6 cell">
                    <input type="radio" name="sex" value="woman" id="women" />
                    <label htmlFor="women">หญิง</label>
                  </div>
                </div>
              </fieldset>

              <label>
                เบอร์โทรศัพท์
                <input
                  type="tel"
                  placeholder="ตัวอย่าง 0841234567"
                  pattern="[0-9]{10}"
                  required
                  value={phone}
                  onChange={phoneUpdate}
                />
              </label>

              <div className='flex-container align-justify'>
                <button type="submit" className="button" onClick={backPage}>
                  ย้อนกลับ
                </button>
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
