import React, { useState } from 'react';

const App =()=> {
  const [tableData, setTableData] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
    { id: 3, name: 'Bob Smith', age: 40 }
  ]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((dataItem) => (
          <tr key={dataItem.id}>
            <td>{dataItem.id}</td>
            <td>{dataItem.name}</td>
            <td>{dataItem.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
