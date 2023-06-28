import React from "react";
import { toast } from "react-toastify";

const Single = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://assignment-12-server-h.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
    /* .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      }); */
  };
  return (
    <div>
      <tr>
        <th>1</th>
        <td>{email}</td>
        <td>
          {role !== "admin" && (
            <button
              onClick={makeAdmin}
              class="btn text-white border-none bg-secondary btn-xs"
            >
              Make Admin
            </button>
          )}
        </td>
        <td>
          <button class="btn btn-xs text-white">Remove User</button>
        </td>
      </tr>
    </div>
  );
};

export default Single;
