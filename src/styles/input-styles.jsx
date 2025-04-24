import { IconButton } from "@mui/material";
import styled from "styled-components";

const InputContainer = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    height: "auto",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "1px 1px",
  };
});

const StyledIconButton = styled(IconButton)(() => {
  return {
    "&&.MuiIconButton-root": {
      width: "50px",
      height: "50px",
      alignSelf: "center",
      backgroundColor: "#005CFF",
      borderRadius: "10px",
      marginLeft: "1px",
      color: "white",
    },
  };
});

const Styles = {
  InputContainer,
  StyledIconButton,
};

export default Styles;
