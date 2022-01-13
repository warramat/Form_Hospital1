import React, { useState } from 'react';
import logo from '../img/logo.jpg';

export default function P1({ nextStep }) {
  const [cardId, setCardId] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [elderly, setElderly] = useState('');
  const [phone, setPhone] = useState(0);
  const [hos, setHos] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [alert, setAlert] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    console.log({
      cardId,
      day,
      month,
      year,
      elderly,
      phone,
      hos,
      date,
      address
    });
    setAlert(true);
    setCardId(0);
    setDay('');
    setMonth('');
    setYear('');
    setElderly('');
    setPhone(0);
    setHos('');
    setDate('');
    setAddress('');
    nextStep();
  };

  const cardIdUpdate = ({ target }) => {
    setCardId(target.value);
  };
  const dayUpdate = ({ target }) => {
    setDay(target.value);
  };

  const monthUpdate = ({ target }) => {
    setMonth(target.value);
  };

  const yearUpdate = ({ target }) => {
    setYear(target.value);
  };
  const elderlyUpdate = ({ target }) => {
    setElderly(target.value);
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
                เลขบัตรประชาชน
                <input
                  type="text"
                  placeholder="กรุณากรอกเลขบัตรประชาชน"
                  required
                  value={cardId}
                  onChange={cardIdUpdate}
                />
              </label>

              {/* <fieldset className="small-12 cell" onChange={sexUpdate}>
              <legend>เพศ</legend>
              <div className="grid-x">
                <div className="small-2 cell">
                  <input
                    type="radio"
                    name="sex"
                    value="man"
                    id="man"
                    required
                  />
                  <label htmlFor="man">ชาย</label>
                </div>
                <div className="small-2 cell">
                  <input type="radio" name="sex" value="woman" id="women" />
                  <label htmlFor="women">หญิง</label>
                </div>
              </div>
            </fieldset> */}

              {/* <label>
              เบอร์โทรศัพท์
              <input
                type="tel"
                placeholder="ตัวอย่าง 0841234567"
                pattern="[0-9]{10}"
                required
                value={phone}
                onChange={phoneUpdate}
              />
            </label>  */}
              <label>
                โรงพยาบาล
                <select onChange={hosUpdate} required>
                  <option defaultValue value="">
                    กรุณาเลือกโรงพยาบาล
                  </option>
                  <option value="1">โรงพยาบาลมหาราช</option>
                  <option value="2">
                    โรงพยาบาลเทศบาลเมืองปากพูน บ้านตลาดพฤหัส
                  </option>
                  <option value="3">
                    โรงพยาบาลเทศบาลเมืองปากพูน บ้านศาลาบางปู
                  </option>
                  <option value="4">โรงพยาบาลค่ายวชิรวุธ</option>
                  <option value="4">โรงพยาบาลท่าศาลา</option>
                </select>
              </label>

              <fieldset className="small-12 cell" onChange={elderlyUpdate}>
                <div className="grid-x">
                  <div className="small-4 cell">
                    <legend>ผู้สูงอายุ</legend>
                  </div>
                  <div className="small-4 cell">
                    <input
                      type="radio"
                      name="elderly"
                      value="no"
                      id="no"
                      required
                    />
                    <label htmlFor="no">ไม่เป็น</label>
                  </div>
                  <div className="small-4 cell">
                    <input type="radio" name="elderly" value="yes" id="yes" />
                    <label htmlFor="yes">เป็น</label>
                  </div>
                </div>
              </fieldset>

              {/* <fieldset className="small-12 cell" onChange={elderlyUpdate}>
                <div className="grid-x">
                  <div className="small-4 cell">
                    <legend>ผู้ป่วยติดเตียง</legend>
                  </div>
                  <div className="small-4 cell">
                    <input
                      type="radio"
                      name="elderly"
                      value="no"
                      id="no"
                      required
                    />
                    <label htmlFor="no">ไม่เป็น</label>
                  </div>
                  <div className="small-4 cell">
                    <input type="radio" name="elderly" value="yes" id="yes" />
                    <label htmlFor="yes">เป็น</label>
                  </div>
                </div>
              </fieldset>

              <fieldset className="small-12 cell" onChange={elderlyUpdate}>
                <div className="grid-x">
                  <div className="small-4 cell">
                    <legend>ผู้พิการ</legend>
                  </div>
                  <div className="small-4 cell">
                    <input
                      type="radio"
                      name="elderly"
                      value="no"
                      id="no"
                      required
                    />
                    <label htmlFor="no">ไม่เป็น</label>
                  </div>
                  <div className="small-4 cell">
                    <input type="radio" name="elderly" value="yes" id="yes" />
                    <label htmlFor="yes">เป็น</label>
                  </div>
                </div>
              </fieldset>

              <fieldset className="small-12 cell" onChange={elderlyUpdate}>
                <div className="grid-x">
                  <div className="small-4 cell">
                    <legend>โรคประจำตัว</legend>
                  </div>
                  <div className="small-4 cell">
                    <input
                      type="radio"
                      name="elderly"
                      value="no"
                      id="no"
                      required
                    />
                    <label htmlFor="no">ไม่เป็น</label>
                  </div>
                  <div className="small-4 cell">
                    <input type="radio" name="elderly" value="yes" id="yes" />
                    <label htmlFor="yes">เป็น</label>
                  </div>
                </div>
              </fieldset> */}

              <button type="submit" className="button">
                ลงทะเบียน
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
