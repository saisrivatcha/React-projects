import './Obj.css'
function Obj()
{
    let emp=[{Eid:1,Name:'Joe'},{Eid:2,Name:'James'},{Eid:3,Name:'Joe'},{Eid:4,Name:'Anu'}]
    return(
        <div>
        <h2>Assignment-1</h2>
        <table border='1' cellPadding='25'>
            <thead>
                <tr>
                    <th>Eid</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    emp.map(empObj=>(
                        <tr key={empObj.Eid}>
                            <td>{empObj.Eid}</td>
                            <td>{empObj.Name}</td>
                        </tr>
               
                    ))
                
                }
                
            </tbody>
        </table>
        </div>
    );
}
export default Obj;