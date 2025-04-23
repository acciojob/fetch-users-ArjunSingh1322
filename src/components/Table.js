
// import React, { useEffect, useState } from "react";

// const Table = () => {
//   const [value, setValue] = useState([]);

//   useEffect(() => {
//     fetch("https://reqres.in/api/users")
//       .then(res => res.json())
//       .then(data => {
//         setValue(data.data);
//       })
//       .catch(err => console.error("Fetch error:", err));
//   }, []);

//   return (
//     <div>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Avatar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {value.map((user) => (
//             <tr key={user.id}>
//               <td>{user.first_name}</td>
//               <td>{user.last_name}</td>
//               <td>{user.email}</td>
//               <td>
//                 <img src={user.avatar} alt="avatar" width="50" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;


import React, { useState } from "react";

const Table = () => {
  const [value, setValue] = useState([]);

  const handleFetch = () => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(data => {
        setValue(data.data);
      })
      .catch(err => console.error("Fetch error:", err));
  };

  return (
    <div>
      <button onClick={handleFetch}>Load Users</button>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>

        <tbody>
          {value.length > 0 ? (
            value.map(user => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt="avatar" width="50" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" align="center">No data loaded</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
