import {Routes, Route, Link, Navigate} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import empList from "./employee-data.json";
import AddEmployee from './components/AddEmployee';
import {v4} from 'uuid';
import Emp from "./components/Emp";

function App() {
    const [emp, setEmp] = useState(empList)
    return (
        <div className="App">
            <Link className="nav-link" to="addEmp">
                Add emp
            </Link>
            <Routes>
                <Route path="addEmp" element={<AddEmployee
                    onNewEmp={(title, name, city) => {
                        const newEmpl = [...emp,
                        {
                            id: v4(),
                            name,
                            title,
                            city,
                            active: true
                        }];
                        console.log(newEmpl)
                        setEmp(newEmpl);
                    }} />} />
            </Routes>
            <div>
                {emp.map((employee, index) => (
                    <Emp
                        title={employee.title}
                        city={employee.city}
                        name={employee.name}
                    />
                ))}
            </div>
        </div>
    );

}

export default App;
