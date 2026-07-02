import {useNavigate} from "react-router-dom";
function Sidebar() {
    const Navigate = useNavigate();
    return ( 
        <div>
            <h1>Sidebar</h1>
            <div onClick={()=> Navigate("/show-student")}>Show Student</div>
            <div onClick={()=> Navigate("/edit-student")}>Edit Student</div>
            <div onClick={()=> Navigate("/delete-student")}>Delete Student</div>
            <div onClick={()=> Navigate("/update-student")}>Update Student</div>
        </div>
     );
}

export default Sidebar;