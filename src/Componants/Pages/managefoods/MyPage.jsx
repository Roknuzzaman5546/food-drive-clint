import React, { useContext, useState } from 'react';
import Mytable from './Mytable';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../../Authprovider/Authprovider';

const MyPage = () => {
  const { user } = useContext(Authcontext);
  const loaderfoods = useLoaderData();
  const filterfoods = loaderfoods.filter(food => food.donaremail == user.email)
  const [foods, setfoods] = useState(filterfoods);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Picup location</th>
              <th>Expired time</th>
              <th>Food quantity</th>
              <th>Update</th>
              <th>Delete</th>
              <th>Manage</th>
            </tr>
          </thead>
          {/* foot */}
          {

            foods.map(food => <Mytable
              key={food._id}
              food={food}
              setfoods={setfoods}
              filterfoods={filterfoods}
            ></Mytable>)
          }
        </table>
      </div>
    </div>
  );
};

export default MyPage;



// import React from 'react';
// import FoodTable from './Mytable';

// function App() {
//   return (
//     <div className="App">
//       <h1>Food Donation Table</h1>
//       <FoodTable></FoodTable>
//     </div>
//   );
// }

// export default App;
