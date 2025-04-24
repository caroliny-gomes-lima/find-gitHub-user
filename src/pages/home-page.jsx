import React from "react";
import Styles from "../styles/homePage-styles";
import { CardRender, InputSearch } from "../components";
import { getUserGithub } from "../services/api";

function HomePage() {
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState({
    data: null,
    notFound: false,
  });
  const { data, notFound } = userData;

  async function onSubmit(data) {
    setLoading(true);
    const response = await getUserGithub(data.findUser);
    setTimeout(() => {
      setUserData(response);
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      <Styles.container>
        <Styles.content>
          <Styles.logoBox>
            <Styles.logo src="/src/assets/images/logo.png" />
          </Styles.logoBox>

          <InputSearch onSubmit={(data) => onSubmit(data)} />

          {(data || notFound) && !loading && (
            <CardRender
              name={data?.name}
              data={data?.bio}
              image={data?.avatar_url}
              notFound={notFound}
              loading={loading}
            />
          )}
          {loading && <Styles.Loader size={80} />}
        </Styles.content>
      </Styles.container>
    </>
  );
}

export default HomePage;
