import React, { useState } from "react";

const Post = () => {
  const [users, setUsers] = useState([]);

  const addNewUser = () => {
    setUsers([
      ...users,
      {
        id: users.length,
        name: "New me"
      }
    ]);
    console.log(users);
  };
  return (
    <div>
      <h3 className="font-bold text-xl mb-2">Post Data</h3>
      <div class="flex">
        <div className="w-full bg-white p-2 rounded">
          <div className="flex justify-between mx-3">
            <div>
              <button
                onClick={addNewUser}
                className="px-4 py-1 bg-blue-800 text-white rounded font-light hover:bg-blue-700"
              >
                Add Data to Array
              </button>
            </div>
          </div>
          <h4 className="font-bold mt-2">Added User Data</h4>
          {users.map((user) => (
            <p key={user.id}>
              {user.name} {user.id}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
