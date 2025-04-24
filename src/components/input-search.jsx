import React from "react";
import Styles from "../styles/input-styles";
import { InputBase } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { Controller, useForm } from "react-hook-form";

function InputSearch({ onSubmit = () => {} }) {
  const { control, handleSubmit } = useForm();
  return (
    <Styles.InputContainer>
      <Controller
        name="findUser"
        control={control}
        render={({ field }) => (
          <>
            <InputBase
              {...field}
              sx={{ ml: 1, p: 1, flex: 1 }}
              placeholder={"Digite um usuário do Github"}
              inputProps={{ "aria-label": "search" }}
            />
            <Styles.StyledIconButton
              type="submit"
              aria-label="search"
              onClick={handleSubmit(onSubmit)}
            >
              <IoIosSearch />
            </Styles.StyledIconButton>
          </>
        )}
      />
    </Styles.InputContainer>
  );
}

export default InputSearch;
