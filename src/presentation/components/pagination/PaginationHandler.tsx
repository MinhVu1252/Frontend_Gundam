import React, { useState } from "react";
import { Box } from "@mui/material";
import { Pagination } from "./Pagination";

export const PaginationHandler: React.FC = () => {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Pagination count={5} page={page} onChange={handleChange} />
    </Box>
  );
};
