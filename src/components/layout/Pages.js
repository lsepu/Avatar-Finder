import React, { useContext, useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import AvatarContext from "../../context/avatar/AvatarContext";

const useStyles = makeStyles({
  root: {
    padding: "30px 0px",
    margin: "auto",
    maxWidth: "max-content",
    color: "white",
    "& ul": {
      "& .MuiPaginationItem-root": {
        color: "#fff",
        fontSize: '18px'
      },
    },
  },
});

const Pages = () => {
  const avatarContext = useContext(AvatarContext);
  const { updatePage, character, characters, nPages, currentPage, setCurrentPage } = avatarContext;

  const [page, setPage] = useState(currentPage);
  const handleChange = (event, value) => {
    setPage(value);
    setCurrentPage(value);
    updatePage(value, character);
  };

  const classes = useStyles();
  return (
    <Pagination
      size="large"
      color="primary"
      page={page}
      onChange={handleChange}
      className={classes.root}
      count={nPages}
      shape="rounded"
    />
  );
};

export default Pages;
