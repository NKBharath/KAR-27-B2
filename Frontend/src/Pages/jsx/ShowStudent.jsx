import Sidebar from "../../Components/Siderbar";
import students from "../../Data/Studetndata";
function ShowStudent() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
        <table>
          <thead>
            <td>Name</td>
            <td>Age</td>
            <td>City</td>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.city}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default ShowStudent;
