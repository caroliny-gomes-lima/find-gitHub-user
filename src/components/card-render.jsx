import React from "react";
import Styles from "../styles/card-styles";
import { Avatar } from "@mui/material";

function CardRender({ name, image, data, notFound }) {
  return (
    <>
      <Styles.CardContainer $notFound={notFound}>
        {notFound ? (
          <Styles.TextInfo $fontSize={20} $color="#FF0000" $fontWeight="normal">
            Nenhum perfil foi encontrado com esse nome de usuário.
            <br />
            Tente novamente
          </Styles.TextInfo>
        ) : (
          <Styles.CardContent>
            <Avatar alt={name} src={image} sx={{ width: 160, height: 160 }} />
            <Styles.userInfos>
              <Styles.TextInfo
                $fontSize={15}
                $fontWeight="bold"
                $color="#005CFF"
              >
                {name}
              </Styles.TextInfo>
              <Styles.TextInfo
                $fontSize={12}
                $color="black"
                $fontWeight="normal"
              >
                {data ? data : "Este usuário não possui bio"}
              </Styles.TextInfo>
            </Styles.userInfos>
          </Styles.CardContent>
        )}
      </Styles.CardContainer>
    </>
  );
}

export default CardRender;
