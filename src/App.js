import React, { useState } from "react";
import "./App.css";

function App() {
  const [formdata, setFormData] = useState([]);
  const [userdata, setUserData] = useState({
    firstname: "",
    lastname: "",
  });
  const [isupdate, setIsUpdate] = useState(false);
  const [updatedata, setUpdateData] = useState(null);
  function AddData() {
    setFormData([...formdata, userdata]);
    setUserData({
      firstname: "",
      lastname: "",
    });
  }

  function DeleteData(item) {
    const newFormData = formdata.filter((x) => x != item);
    setFormData(newFormData);
  }

  function UpdateRow(item) {
    setIsUpdate(true);
    setUpdateData(item);
    setUserData({
      ...userdata,
      firstname: item.firstname,
      lastname: item.lastname,
    });
  }

  function UpdateData() {
    debugger;
    let formsdata = [...formdata];
    let editdataindex = formsdata.indexOf(
      formdata.filter((x) => x == updatedata)[0]
    );
    formsdata[editdataindex] = userdata;
    setFormData(formsdata);
    setUserData({
      firstname: "",
      lastname: "",
    });
    setIsUpdate(false);
  }
  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        value={userdata.firstname}
        onChange={(e) =>
          setUserData({ ...userdata, firstname: e.target.value })
        }
      />
      &nbsp;&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Last Name"
        value={userdata.lastname}
        onChange={(e) => setUserData({ ...userdata, lastname: e.target.value })}
      />
      &nbsp;&nbsp;&nbsp;
      {isupdate ? (
        <button onClick={UpdateData}>Update</button>
      ) : (
        <button onClick={AddData}>Save</button>
      )}
      <br />
      FirstName : {userdata.firstname}
      <br />
      LastName : {userdata.lastname}
      <br />
      Rows: {formdata && formdata.length}
      <br />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {formdata && formdata.length > 0 ? (
            formdata.map((item, index) => {
              return (
                <tr>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>
                    <button onClick={(e) => UpdateRow(item)}>Update</button>
                  </td>
                  <td>
                    <button onClick={(e) => DeleteData(item)}>Delete</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr colspan="2">
              <td>No Data Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default App;
