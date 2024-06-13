import axios from "axios";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";




export function ToDoEditTask(){

    const [appointments, setAppointments] = useState([{Appointment_Id:0, Title:'', Description:'', Date:new Date(), UserId:''}]);
    const [cookies, setCookie, removeCookie] = useCookies('userid');
    let params = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
         axios.get(`http://127.0.0.1:6060/view-task/${params.id}`)
         .then(response=>{
             setAppointments(response.data);
             
         })
    },[])

    const formik = useFormik({
        initialValues: {
            Appointment_Id: appointments[0].Appointment_Id,
            Title: appointments[0].Title, 
            Description: appointments[0].Description, 
            Date: new Date(appointments[0].Date),
            UserId: cookies['userid']
        },
        onSubmit : (task)=> {
            axios.put(`http://127.0.0.1:6060/edit-task/${params.id}`, task)
            .then(()=>{
                alert('Task Edited Successfully');
                navigate('/dashboard');
            })
        },
        enableReinitialize: true
    })


    return(
        <div className="bg-light text-dark p-4">
            <h3>Edit Task</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                <dt>Appointment_Id</dt>
                <dd><input type="number" value={formik.values.Appointment_Id} onChange={formik.handleChange} name="Appointment_Id"  className="form-control" /></dd>
                <dt>Title</dt>
                <dd><input type="text" value={formik.values.Title} onChange={formik.handleChange} name="Title"  className="form-control" /></dd>
                <dt>Description</dt>
                <dd>
                    <textarea value={formik.values.Description}  onChange={formik.handleChange} name="Description" className="form-control" rows="4" cols="40"></textarea>
                </dd>
                <dt>Date</dt>
                <dd><input type="date" value={formik.values.Date} onChange={formik.handleChange} name="Date" /></dd>
                </dl>
                <button className="btn btn-success me-1">Save</button>
                <Link to="/dashboard" className="btn btn-danger">Cancel</Link>
            </form>
        </div>  
    )
}