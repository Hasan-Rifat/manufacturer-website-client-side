import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const email = user.email;
  const url = `http://localhost:5000/orders?email=${email}`;
  const { data: userEmail, isLoading } = useQuery("userEmail", () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading />;
  }
  console.log(userEmail);
  return (
    <section className="w-full mt-4">
      <div className="max-w-7xl mx-auto px-4">
        <div class="overflow-x-auto">
          <table class="table w-full ">
            <thead>
              <tr className="bg-primary text-white">
                <th>Email</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Product</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody className="text-secondary">
              {userEmail.map((person, index) => (
                <tr key={person._id}>
                  <th>{index + 1}</th>
                  <td>{person.email}</td>
                  <td>{person.phoneNumber}</td>
                  <td>{person.product}</td>
                  <td>{person.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
