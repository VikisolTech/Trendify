// import React, { useState } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import TextField from "@mui/material/TextField";

// function Register() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let errors = {};

//     // Simple validation
//     if (!formData.firstName.trim()) {
//       errors.firstName = "First name is required";
//     }
//     if (!formData.lastName.trim()) {
//       errors.lastName = "Last name is required";
//     }
//     if (!formData.phoneNumber.trim()) {
//       errors.phoneNumber = "Phone number is required";
//     }
//     if (!formData.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       errors.email = "Email is invalid";
//     }

//     setErrors(errors);

//     if (Object.keys(errors).length === 0) {
//       // Form is valid, you can proceed with registration
//       console.log("Form submitted:", formData);
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="card" style={{ margin: "50px", background: "#FFFFFF" }}>
//         <div
//           className="card-body"
//           style={{ height: "670px", padding: "25px", background: "#FFFFFF" }}
//         >
//           <div class="row">
//             <div class="col-6">
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <div>
//                   <img
//                     src="../trendify.png"
//                     alt=""
//                     style={{ width: "60px", height: "60px" }}
//                   />
//                 </div>
//                 <h4 variant="h6">Trendify</h4>
//               </Box>
//               <Box sx={{ ml: "60px", paddingTop: "10px" }}>
//                 <h3 sx={{ marginBottom: "25px" }}>
//                   Hello! Register to get started
//                 </h3>
// <TextField
//   id="standard-multiline-static"
//   label="Multiline"
//   multiline
//   rows={4}
//   defaultValue="Default Value"
//   variant="standard"
// />

//                 <form onSubmit={handleSubmit}>
//                   <div style={{ marginTop: "10px" }}>
//                     <label
//                       htmlFor="firstName"
//                       className="form-label"
//                       style={{ marginBottom: "0px" }}
//                     >
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="firstName"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                     />
//                     {errors.firstName && (
//                       <div style={{ color: "red", fontSize: "10px" }}>
//                         {errors.firstName}
//                       </div>
//                     )}
//                   </div>
//                   <div style={{ marginTop: "5px" }}>
//                     <label
//                       htmlFor="lastName"
//                       className="form-label"
//                       style={{ marginBottom: "0px" }}
//                     >
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="lastName"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                     />
//                     {errors.lastName && (
//                       <div style={{ color: "red", fontSize: "10px" }}>
//                         {errors.lastName}
//                       </div>
//                     )}
//                   </div>
//                   <div style={{ marginTop: "5px" }}>
//                     <label
//                       htmlFor="phoneNumber"
//                       className="form-label"
//                       style={{ marginBottom: "0px" }}
//                     >
//                       Phone Number
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       value={formData.phoneNumber}
//                       onChange={handleInputChange}
//                     />
//                     {errors.phoneNumber && (
//                       <div style={{ color: "red", fontSize: "10px" }}>
//                         {errors.phoneNumber}
//                       </div>
//                     )}
//                   </div>
//                   <div style={{ marginTop: "5px" }}>
//                     <label
//                       htmlFor="email"
//                       className="form-label"
//                       style={{ marginBottom: "0px" }}
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                     />
//                     {errors.email && (
//                       <div style={{ color: "red", fontSize: "10px" }}>
//                         {errors.email}
//                       </div>
//                     )}
//                   </div>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       marginTop: "10px",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         borderRadius: "20px",
//                         border: "1px solid #C09562",
//                         backgroundColor: "#C09562",
//                         textAlign: "center",
//                         color: "white",
//                         padding: "10px",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         width: "30%",
//                         transition: "background-color 0.3s ease",
//                         "&:hover": {
//                           backgroundColor: "#d7a072",
//                         },
//                       }}
//                     >
//                       <button
//                         type="submit"
//                         style={{
//                           backgroundColor: "transparent",
//                           border: "none",
//                           color: "white",
//                           cursor: "pointer",
//                         }}
//                       >
//                         Register
//                       </button>
//                     </Box>
//                   </Box>
//                 </form>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     marginTop: "10px",
//                   }}
//                 >
//                   <p sx={{ color: "#000000", Text: "20px" }}>OR</p>
//                 </Box>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     justifyContent: "space-evenly",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <img
//                     src="../Frame 3.png"
//                     alt=""
//                     style={{ width: "150px", height: "50px" }}
//                   />
//                   <img
//                     src="../Frame 4.png"
//                     alt=""
//                     style={{ width: "150px", height: "50px" }}
//                   />
//                   <img
//                     src="../Frame 5.png"
//                     alt=""
//                     style={{ width: "150px", height: "50px" }}
//                   />
//                 </Box>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     marginTop: "10px",
//                     fontSize: "15px",
//                   }}
//                 >
//                   <div style={{ color: "#000000" }}>
//                     {" "}
//                     Already have an account?{" "}
//                     <span style={{ color: "#C09562", cursor: "pointer" }}>
//                       Login Now
//                     </span>
//                   </div>
//                 </Box>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     fontSize: "15px",
//                     marginTop: "5px",
//                   }}
//                 >
//                   <div style={{ color: "#000000" }}>
//                     By continuing, I agree to the
//                     <span style={{ color: "#C09562", cursor: "pointer" }}>
//                       Terms of Use
//                     </span>{" "}
//                     and
//                     <span style={{ color: "#C09562", cursor: "pointer" }}>
//                       privancy policy
//                     </span>
//                   </div>
//                 </Box>
//               </Box>
//             </div>
//             <div class="col-6">
//               <Box>
//                 {" "}
//                 <img src="../register.png" alt="" style={{ height: "645px" }} />
//               </Box>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

import { TextField } from "@mui/material";
import React from "react";

function Register() {
  return (
    <div>

      <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="standard"
      />
    </div>
  );
}

export default Register;
