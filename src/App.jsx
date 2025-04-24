import { Route, Routes } from "react-router";
import HomePage from "./pages/home-page";
import Styles from "./App-styles";

function App() {
  return (
    <>
      <Styles.Background>
        <Styles.Ellipse
          src="/src/assets/images/ellipse-left.png"
          $top={"20vh"}
          $left={"-1vw"}
        />
        <Styles.VectorGroup src="/src/assets/images/vector-group.png" />
        <Styles.Ellipse
          src="/src/assets/images/ellipse-right.png"
          $top={"0vh"}
          $left={"70vw"}
        />
        <Styles.Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Styles.Container>
      </Styles.Background>
    </>
  );
}

export default App;
