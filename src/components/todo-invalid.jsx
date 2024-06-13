import { Link } from "react-router-dom";


export function ToDoInvalid(){
    return(
        <div className="bg-white p-4">
            <h2 className="text-danger">Invalid Credentials </h2>
            <Link to="/login">Try Again</Link>
        </div>
    )
}