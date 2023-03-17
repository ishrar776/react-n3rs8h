import React, { useEffect, useState } from 'react';
import './style.css';
export default function App() {
  const [chkBox, setChkBox] = useState(false);
  const [value, setValue] = useState('fruit');
  const [values, setValues] = useState({
    message: '',
    chktest: chkBox,
    drptxt: value,
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleChanges1 = (e) => {
    setChkBox(e.target.checked);
    const name = e.target.name;
    const value = e.target.checked;
    setValues({ ...values, [name]: value });
  };
  const handleChange2 = (e) => {
    setValue(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const options = [
    { label: 'Fruit', value: 'fruit' },
    { label: 'Vegetable', value: 'vegetable' },
    { label: 'Meat', value: 'meat' },
  ];
  const submitdata = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (!isSubmit) {
      console.log('israr hey');
      console.log('values of check click' + chkBox);
      console.log('values of check click innner' + values.chktest);
      const allData = { ...values };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(allData),
      };
      console.log(requestOptions.body);
      fetch('https://reqres.in/api/posts', requestOptions)
        .then((response) => {
          console.log('post sucess' + response);
          response.json();
        })
        //.then((data) => setValues(data.message))
        .catch((error) => {
          console.log('failed result' + error);
        });
    }
  };
  return (
    <form onSubmit={submitdata}>
      <h1>Hello StackBlitz!</h1>
      <p>
        <input
          type="text"
          onChange={handleChanges}
          value={values.message}
          name="message"
        ></input>
      </p>
      <p>
        <input
          type="checkbox"
          onChange={handleChanges1}
          value={values.chktest}
          name="chktest"
        ></input>
      </p>
      <p>
        <select name="drptxt" value={values.drptxt} onChange={handleChange2}>
          {/* <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option> */}
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </p>
      <p>
        <input type="submit" />
      </p>
    </form>
  );
}
