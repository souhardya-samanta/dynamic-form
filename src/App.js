import React, { useState, useEffect } from "react";
import axios from "axios";
import { formData } from "./components/formData";
import DynamicForm from "./components/form";
function App() {
  const [form, setForm] = useState(formData);
  useEffect(() => {
    getFormData();
  }, []);
  const getFormData = () => {
    axios.get("http://192.168.0.131:3001/formData").then((response) => {
      setForm(response.data);
      console.log("Data", form);
    });
  };
  const handleSubmission = (val) => {
    console.log("Values : ", val);
  };
  return (
    <div style={{ paddingLeft: 50 }}>
      <h1>{form.formName}</h1>
      <h2>{form.formDescription}</h2>
      <DynamicForm fields={form.data} onSubmit={handleSubmission} />
    </div>
  );
}

export default App;
