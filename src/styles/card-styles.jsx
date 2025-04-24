import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const CardContainer = styled.div(({ $notFound }) => {
  return {
    display: "flex",
    width: "65%",
    height: "50%",
    backgroundColor: "#D9D9D9",
    margin: "2px",
    borderRadius: "25px",
    padding: "25px",
    justifyContent: $notFound ? "center" : "flex-start",
    alignItems: $notFound ? "center" : "flex-start",
    textAlign: $notFound ? "center" : "left",
  };
});

const CardContent = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  };
});

const userAvatar = styled.img(() => {
  return {
    width: "20%",
    height: "20%",
  };
});

const userInfos = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "10px",
    width: "60%",
    height: "100%",
    marginLeft: "25px",
  };
});

const TextInfo = styled.p(({ $fontSize, $color, $fontWeight }) => {
  return {
    fontSize: $fontSize,
    color: $color,
    fontWeight: $fontWeight,
    margin: 0,
  };
});

const Styles = {
  CardContainer,
  CardContent,
  userAvatar,
  userInfos,
  TextInfo,
};

export default Styles;
