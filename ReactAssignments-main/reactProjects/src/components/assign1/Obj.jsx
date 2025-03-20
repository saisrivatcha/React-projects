import "./Obj.css";

function Obj() {
  const employees = [
    { Eid: 1, Name: "Joe" },
    { Eid: 2, Name: "James" },
    { Eid: 3, Name: "Joe" },
    { Eid: 4, Name: "Anu" },
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Assignment-1</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Eid</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(({ Eid, Name }) => (
            <tr key={Eid} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-center">{Eid}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Obj;
