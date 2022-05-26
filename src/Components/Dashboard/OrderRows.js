import React from "react";

const OrderRows = ({ index, order }) => {
  const { product, email } = order;
  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td>{product}</td>
        <td>{product}</td>
        <td>{email}</td>
        {/* <td><button class="btn btn-sm bg-red-500 border-0 text-white" onClick={()=>deleteHandler(_id)}>Cancel</button></td> */}
        <td>
          <button class="btn btn-sm bg-green-600 border-0 text-white">
            Payment
          </button>
        </td>
      </tr>
    </div>
  );
};

export default OrderRows;
