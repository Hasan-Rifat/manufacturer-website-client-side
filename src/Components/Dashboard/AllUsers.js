import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Single from "./Single";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://assignment-12-server-h.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-4">
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>USER</th>
              <th>ROLE</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <Single key={user._id} user={user} refetch={refetch}></Single>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
