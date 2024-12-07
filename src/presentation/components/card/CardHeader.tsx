import React from "react";
import { Box, Typography } from "@mui/material";

interface HeaderProps {
  currentStep: 1 | 2 | 3;
}

const steps = [
  { number: 1, label: "Shopping cart" },
  { number: 2, label: "Checkout details" },
  { number: 3, label: "Order complete" },
] as const;

export function CardHeader({ currentStep }: HeaderProps) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ mb: 4, fontWeight: 500 }}
      >
        {currentStep === 1
          ? "Cart"
          : currentStep === 2
          ? "Check Out"
          : "Complete!"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  ...(step.number < currentStep && {
                    bgcolor: "success.main",
                    color: "white",
                  }),
                  ...(step.number === currentStep && {
                    bgcolor: "black",
                    color: "white",
                  }),
                  ...(step.number > currentStep && {
                    bgcolor: "grey.200",
                    color: "grey.500",
                  }),
                }}
              >
                {step.number < currentStep ? "✓" : step.number}
              </Box>
              <Typography
                sx={{
                  fontSize: 14,
                  color: step.number > currentStep ? "grey.500" : "black",
                }}
              >
                {step.label}
              </Typography>
            </Box>
            {index < steps.length - 1 && (
              <Box
                sx={{
                  flex: "0 0 60px",
                  height: 1,
                  bgcolor: "grey.200",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}

// import { Typography, Box } from "@mui/material";
// import React from "react";
// const steps = [
//   { number: 1, label: "Shopping cart", active: true },
//   { number: 2, label: "Checkout details", active: false },
//   { number: 3, label: "Order complete", active: false },
// ];

// export function CartHeader() {
//   return (
//     <Box sx={{ textAlign: "center", marginTop: "60px" }}>
//       <Typography
//         sx={{
//           color: "#000",
//           fontSize: "54px",
//           fontWeight: "500",
//           fontFamily: "Poppins",
//           fontStyle: "normal",
//         }}
//         gutterBottom
//       >
//         Cart
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: 2,
//         }}
//       >
//         {steps.map((step, index) => (
//           <React.Fragment key={step.number}>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <Box
//                 sx={{
//                   width: 32,
//                   height: 32,
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   bgcolor: step.active ? "text.primary" : "grey.300",
//                   color: step.active ? "common.white" : "text.secondary",
//                 }}
//               >
//                 {step.number}
//               </Box>
//               <Typography
//                 sx={{
//                   color: step.active ? "text.primary" : "text.secondary",
//                   fontWeight: step.active ? 500 : 400,
//                 }}
//               >
//                 {step.label}
//               </Typography>
//             </Box>
//             {index < steps.length - 1 && (
//               <Box
//                 sx={{
//                   flex: 1,
//                   height: 1,
//                   maxWidth: 100,
//                   bgcolor: "grey.300",
//                 }}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </Box>
//     </Box>
//   );
// }
