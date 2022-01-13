// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../img/logo.jpg';
// import Doct from '../img/doctor.jpg'
// import Checkup from '../img/checkup1.png'
// import Editform from '../img/editform.png'

// export default function Welcome() {
//   return (
//     <div className="form-container">
//       <div className="grid-container">
//     <div className="border">
//       <div className="logo_container">
//         <img className="mainlogo" src={Logo} />
//       </div>
//       <h5 className="text-right">เทศบาลเมืองปากพูน</h5>
//       <div className="grid-x">
//         <div className="small-6 cell">
//           <h5>สุขภาพ</h5>
//           <Link to="/screen">
//             <div className="callout">
//               <img src={Doct} className="doctlogo" />
//               <h5>คัดกรองสุขภาพ</h5>
//             </div>
//           </Link>
//         </div>
//         <div className="small-6 cell">
//           <Link to="/report">
//             <div className="callout">
//               <img src={Checkup} className="doctlogo" />
//               <h5>ประวัติคัดกรองสุขภาพ</h5>
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div className="grid-x">
//       <h5>ข้อมูลส่วนตัว</h5>
//         <div className="small-12 cell">
//           <Link to="/register">
//             <div className="callout">
//             <img src={Editform} className="doctlogo" />
//               <h5>แก้ไขข้อมูลส่วนตัว</h5>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import Screen from '../Pages/Screen';

export default function Alldata() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const backStep = () => {
    setStep((step) => step - 1);
  };

  switch (step) {
    case 0:
      return (
        <Screen 
        nextStep={nextStep}
        backStep={backStep}
        />
        
      );
  }
}

