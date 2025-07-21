import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import "./styles/App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addOrUpdateEmployee = (employeeData) => {
    if (editingIndex !== null) {
      
      const updatedList = [...employees];
      updatedList[editingIndex] = employeeData;
      setEmployees(updatedList);
      setEditingIndex(null);
    } else {
            setEmployees([...employees, employeeData]);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = employees.filter((_, i) => i !== index);
    setEmployees(updatedList);
    if (index === editingIndex) {
      setEditingIndex(null);
    }
  };

  return (
    <div className="App">
      <h1>Employee Management App</h1>
      <EmployeeForm
        addOrUpdateEmployee={addOrUpdateEmployee}
        editingEmployee={editingIndex !== null ? employees[editingIndex] : null}
      />
      <EmployeeTable
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
