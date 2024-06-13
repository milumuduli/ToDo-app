import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToDoHome } from './components/todo-home';
import { ToDoRegister } from './components/todo-register';
import { ToDoLogin } from './components/todo-login';
import { TodoDashBoard } from './components/todo-dashboard';
import { ToDoInvalid } from './components/todo-invalid';
import { ToDoAddTask } from './components/todo-addtask';
import { ToDoRemoveTask } from './components/todo-remove-task';
import { ToDoEditTask } from './components/todo-edit-task';

function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <header>
                <h1 className='text-white text-center'>To-Do</h1>
                <p className='text-white fs-4 fw-bold text-center'>Your Appointments</p>
            </header>
            <section className='mt-4'>
               <div>
                  <Routes>
                      <Route path='/' element={<ToDoHome />} />
                      <Route path='register' element={<ToDoRegister />} />
                      <Route path='login' element={<ToDoLogin />} />
                      <Route path='dashboard' element={<TodoDashBoard/>} />
                      <Route path='invalid' element={<ToDoInvalid />} />
                      <Route path='add-task' element={<ToDoAddTask />} />
                      <Route path='delete-task/:id' element={<ToDoRemoveTask />} />
                      <Route path='edit-task/:id' element={<ToDoEditTask />} />
                  </Routes>
               </div>
            </section>
        </BrowserRouter>
    </div>
  );
}

export default App;
