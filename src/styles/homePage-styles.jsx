import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const container = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    height: "fit-content",
    backgroundColor: "black",
    margin: "2px",
    padding: "30px",
  };
});

const logoBox = styled.div(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "auto",
  };
});

const logo = styled.img(() => {
  return {
    width: "280px",
    height: "70px",
    maxWidth: "100%",
    objectFit: "contain",
  };
});

const content = styled.div(() => {
  return {
    zIndex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "20px",
    width: "auto",
    height: "auto",
    color: "white",
  };
});

const Loader = styled(CircularProgress)(() => {
  return {
    "&&.MuiCircularProgress-root": {
      color: "#005CFF",
      transition: ".5s",
    },
  };
});

const Styles = {
  container,
  content,
  logoBox,
  logo,
  Loader,
};

export default Styles;
