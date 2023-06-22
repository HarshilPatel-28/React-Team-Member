import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [selectedTeam, setTeam]=useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

  const [ employees, setEmployees]= useState(JSON.parse(localStorage.getItem('employeeList')) || [{
          id : 1,
          fullName: "Bob Jones",
          designation: "JavaScript Development",
          gender: "male",
          teamName:"TeamA"

      },
      {
          id : 2,
          fullName: "Jilly Bailey",
          designation: "Node Development",
          gender: "female",
          teamName:"TeamB"

      },
      {
          id : 3,
          fullName: "Gail Shephard",
          designation: "React Development",
          gender: "male",
          teamName:"TeamB"

      },
      {
          id : 4,
          fullName: "Bob Jones",
          designation: "JavaScript Development",
          gender: "male",
          teamName:"TeamA"

      },
      {
          id : 5,
          fullName: "Jilly Bailey",
          designation: "Node Development",
          gender: "female",
          teamName:"TeamA"

      },
      {
          id : 6,
          fullName: "Gail Shephard",
          designation: "React Development",
          gender: "male",
          teamName:"TeamD"

      },
      {
          id : 7,
          fullName: "Vedant Patel",
          designation: "Vue Developer",
          gender: "male",
          teamName:"TeamC"

      },
      {
          id : 8,
          fullName: "Anshu Patel",
          designation: "React Development",
          gender: "male",
          teamName:"TeamD"

      },
      {
          id : 9,
          fullName: "Krupal Patel",
          designation: "JavaScript Development",
          gender: "male",
          teamName:"TeamD"

      },
      {
          id : 10,
          fullName: "Purva Panchal",
          designation: "Java Development",
          gender: "male",
          teamName:"TeamC"

      },
      {
          id : 11,
          fullName: "Aarya Patel",
          designation: "Python Development",
          gender: "female",
          teamName:"TeamC"

      },
      {
          id : 12,
          fullName: "Pujan Patel",
          designation: "JS Development",
          gender: "male",
          teamName:"TeamC"

      }
      
  ]);
  useEffect(() =>{
    localStorage.setItem('employeeList',JSON.stringify(employees));
  },[employees]);

  useEffect(() =>{
    localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam));
  },[selectedTeam]);


  function handleTeamSelectionChange(event){
      // console.log(event.target.value);
      setTeam(event.target.value);
  }
  function handleEmployeeCardClick(event){
      const transformedEmployees =employees.map((employee)=> employee.id ===parseInt(event.currentTarget.id)
      ?(employee.teamName===selectedTeam)?{ ...employee,teamName:''}:
      {...employee,teamName:selectedTeam}:employee
      );
      setEmployees(transformedEmployees);
  }
  return (
   
      <Router>
        <Nav />
      <Header selectedTeam={selectedTeam}
              teamMemberCount={employees.filter((employee)=>employee.teamName === selectedTeam).length}
      />
      <Routes>
        <Route path="/"
              element={ <Employees employees = {employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}
           />}>
        </Route>
     
     
        <Route path="/GroupedTeamMembers"
        element={ <GroupedTeamMembers employees = {employees}
        selectedTeam = {selectedTeam} setTeam={setTeam}/>}>
     
        </Route>
        <Route path="*"
        element={ <NotFound/>}>
     
        </Route>
      </Routes>
      <Footer/>
      </Router>
 
  );
}

export default App;
