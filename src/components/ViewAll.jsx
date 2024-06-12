// import React from 'react'
// import { Navbar } from './Navbar'
// import axios from 'axios'

// const ViewAll = () => {
//     const [data,changeData]=useState([])
//     const fetchData=()=>{
//         axios.get("http://localhost:8086/view").then(
//             (Response)=>{
//                 changeData(Response.data)
//             }
//         )
//     }
//   return (
//     <div>
//         <Navbar/>
//         <div className="container">
//             <div className="row">
//                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                 <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">SL.NO</th>
//       <th scope="col">NAME</th>
//       <th scope="col">DATE OF BIRTH</th>
//       <th scope="col">BLOOD GROUP</th>
//       <th scope="col">MOBILE NO</th>
//       <th scope="col">ADDRESS</th>
//       <th scope="col">PINCODE</th>
//       <th scope="col">DISTRICT</th>
//       <th scope="col">PLACE</th>
//       <th scope="col">EMAIL</th>
//       <th scope="col">USERNAME</th>
//     </tr>
//   </thead>
//   <tbody>
//     {data.map(
//         (value,index)=>{
//             return <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>05-10-2001</td>
//             <td>A+ve</td>
//             <td>9876543321</td>
//             <td>QWERTY</td>
//             <td>685561</td>
//             <td>IDUKKI</td>
//             <td>IDUKKI</td>
//             <td>qwerty@gmail.com</td>
//             <td>qwerty</td>
//           </tr>
//         }
//     )}
//   </tbody>
// </table>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ViewAll