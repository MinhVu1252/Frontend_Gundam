import React from "react";
import { Pagination as MUIPagination } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPagination = styled(MUIPagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    margin: "0 4px",
    color: "#666",
    minWidth: "32px",
    height: "32px",
    borderRadius: "4px",
  },
  "& .MuiPaginationItem-page.Mui-selected": {
    backgroundColor: "#ff5722",
    color: "white",
    "&:hover": {
      backgroundColor: "#f4511e",
    },
  },
  "& .MuiPaginationItem-previousNext": {
    color: "#666",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
}));

interface PaginationProps {
  count?: number;
  page?: number;
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  count = 5,
  page = 1,
  onChange,
}) => {
  return (
    <StyledPagination
      count={count}
      page={page}
      onChange={onChange}
      siblingCount={1}
      boundaryCount={1}
      shape="rounded"
    />
  );
};
