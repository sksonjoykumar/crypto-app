import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center items-center my-5">
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => onPageChange(value)}
          sx={{
            "& .MuiPaginationItem-root": {
              fontSize: "1.2rem",
              backgroundColor: "#3A80E9",
              color: "#fff",
            },
            "& .Mui-selected": {
              color: "#F94141",
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default PaginationComponent;
