import React, { useState, useEffect } from "react";

const initialFormState = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  jobDescription: "",
  jobRole: "",
};

const EmployeeForm = ({ addOrUpdateEmployee, editingEmployee }) => {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (editingEmployee) {
      setFormData(editingEmployee);
    } else {
      setFormData(initialFormState);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateEmployee(formData);
    setFormData(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingEmployee ? "Edit Employee" : "Add Employee"}</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        value={formData.jobTitle}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="jobDescription"
        placeholder="Job Description"
        value={formData.jobDescription}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="jobRole"
        placeholder="Job Role"
        value={formData.jobRole}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingEmployee ? "Update" : "Add"}</button>
    </form>
  );
};

export default EmployeeForm;
