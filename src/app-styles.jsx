import styled from "styled-components";

const Background = styled.div(() => {
  return {
    width: "100%",
    height: "100vh",
    background: "#1F1F1F",
    overflow: "hidden",
    zIndex: "1",
    position: "relative",
  };
});

const Ellipse = styled.img(({ $top, $left }) => {
  return {
    position: "fixed",
    top: $top,
    left: $left,
    zIndex: 2,
  };
});

const VectorGroup = styled.img(() => {
  return {
    position: "absolute",
    top: "10vh",
    left: "9vw",
    width: "180px",
    height: "auto",
    zIndex: 2,
  };
});

const Container = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    zIndex: 3,
  };
});

const Styles = {
  Background,
  Ellipse,
  VectorGroup,
  Container,
};

export default Styles;
