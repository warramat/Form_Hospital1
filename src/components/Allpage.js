import React, { useState } from 'react';
import P1 from '../Pages/P1';
import P2 from '../Pages/P2';
import P3 from '../Pages/P3';

export default function Allpage() {
  const [step, setStep] = useState(0);
  const [idcard, setIdcard] = useState(0);
  const [hospital, setHospital] = useState('');
  const [date, setDate] = useState('');
  const [input, setInput] = useState();

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const backStep = () => {
    setStep((step) => step - 1);
  };

  const inputChange = (input) => (e) => {
    setInput({
      [input]: e.target.value
    });
  };

  const value = { idcard, hospital, date };
  switch (step) {
    case 0:
      return (
        <P1 nextStep={nextStep} inputChange={inputChange} values={input} />
      );

    case 1:
      return (
        <P2
          nextStep={nextStep}
          backStep={backStep}
          inputChange={inputChange}
          values={input}
        />
      );

    // case 2:
    //   return (
    //     <P3
    //       nextStep={nextStep}
    //       prevStep={prevStep}
    //       values={input}
    //     />
    //   );

    case 3:
      return <P3 />;
  }
}
