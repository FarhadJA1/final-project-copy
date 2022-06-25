import React from 'react';
import CreateButton from '../components/Group/CreateButton';
import GroupTable from '../components/Group/GroupTable';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Group() {
  const url = "https://localhost:44380"
  const [groups, setGroups] = useState([]);

  const [educationInput, setEducationInput] = useState();
  const [capacityInput, setCapacityInput] = useState();
  const [createDateInput, setCreateDateInput] = useState();
  const [termInput, setTermInput] = useState();
  const [groupTypeNameInput, setGroupTypeNameInput] = useState();
  const [studentsInput, setStudentsInput] = useState([]);
  const [classroomInput, setClassroomInput] = useState();
  const [teacherInput, setTeacherInput] = useState();
  const [id, setId] = useState();
  const [details, setDetails] = useState();

  const [hours, setHours] = useState([]);
  const [education, setEducation] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);


  async function GetGroups() {
    const response = await axios.get("https://localhost:44380/api/Group/GetAll")
      .catch(error => console.log(error));
    setGroups(response.data);

  }

  

  async function GetHours() {
    await axios.get(`${url}/api/Hour/GetAll`)
      .then(res => {
        setHours(res.data);
      })
  }
  async function GetClassrooms() {
    await axios.get(`${url}/api/Classroom/GetAll`)
      .then(res => {
        setClassrooms(res.data);
      })
  }
  async function GetTeachers() {
    await axios.get(`${url}/api/Teacher/GetAll`)
      .then(res => {
        setTeachers(res.data);
      })
  }
  async function GetStudents() {
    await axios.get(`${url}/api/Student/GetAll`)
      .then(res => {
        setStudents(res.data);
      })
  }
  async function GetEducations() {
    await axios.get(`${url}/api/Education/GetAll`)
      .then(res => {
        setEducation(res.data);
      })
  }
  useEffect(() => {
    GetGroups();
    GetHours();
    GetEducations();
    GetClassrooms();
    GetTeachers();
    GetStudents();

  }, []);

  async function CreateGroup() {

    await axios.post(`${url}/api/Group/CreateGroup`, {
      groupTypeId: educationInput,
      capacity: capacityInput,
      createDate: createDateInput,
      termId: termInput,

    })
      .then(res => {
        GetGroups();
        GetHours();
        GetEducations();
        setCapacityInput("");
        setCreateDateInput("");
        setEducationInput("");
        setTermInput("");
      })
      .catch(error => console.log(error));
  }
  async function AddTeacher() {
    await axios.put(`${url}/api/Group/AddTeacher/${id}`, {
      teacherId: teacherInput
    })
      .then(res => {
        GetGroups();
      })
      .catch(error => console.log(error));
  }
  async function GroupDetails(id) {

    await axios.get(`${url}/api/Group/GroupDetails/${id}`)
      .then(res => {
        setDetails(res.data);
      })
  }

  async function AddClassroom() {
    await axios.put(`${url}/api/Group/AddClassroom/${id}`, {
      classroomId: classroomInput
    })
      .then(res => {
        GetGroups();
      })
      .catch(error => console.log(error));
  }

  async function AddStudents() {   
    
    axios.put(`${url}/api/Group/AddStudents/${id}`, {
      students:studentsInput
    })
      .then(res => {
        GetGroups();
      })
      .catch(error => console.log(error));
  }

  const DeleteGroup = () => {
    axios.get(`${url}/api/Group/DeleteGroup/${id}`)
      .then(res => {
        GetGroups();
      })
      .catch(error => console.log(error));
  }




  return (
    <div>
      <CreateButton
        educationInput={educationInput} setEducationInput={setEducationInput}
        capacityInput={capacityInput} setCapacityInput={setCapacityInput}
        createDateInput={createDateInput} setCreateDateInput={setCreateDateInput}
        termInput={termInput} setTermInput={setTermInput} hours={hours} education={education}
        setEducation={setEducation} setHours={setHours}
        groupTypeNameInput={groupTypeNameInput} setGroupTypeNameInput={setGroupTypeNameInput}
        createGroup={CreateGroup}
      />
      <GroupTable
        groups={groups} setId={setId} id={id}
        deleteGroup={DeleteGroup}
        hours={hours} education={education}
        setEducation={setEducation} setHours={setHours}
        classrooms={classrooms} setClassrooms={setClassrooms}
        teachers={teachers} setTeachers={setTeachers}
        students={students} setStudents={setStudents}
        studentsInput={studentsInput} setStudentsInput={setStudentsInput}
        classroomInput={classroomInput} setClassroomInput={setClassroomInput}
        teacherInput={teacherInput} setTeacherInput={setTeacherInput}
        addTeacher={AddTeacher} addClassroom={AddClassroom} addStudents={AddStudents}
        details={details} setDetails={setDetails} groupDetails={GroupDetails}
      />
    </div>
  )
}

export default Group
