import React, { ReactNode } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button, Container, Paper, Grid } from "@mui/material";
import { CustomGrid } from "./Form.style";
import CusButton from "./../Button/CusButton";
// Schema validation với yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
});

type FormData = {
  email: string;
};
type FormProps = {
  children: ReactNode;
};
export default function Form({ children }: FormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dữ liệu đã nhập:", data);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 3, mt: 5, borderRadius: 2 }}>
        <form>
          <CustomGrid container spacing={2}>
            {/* Ô nhập Họ và Tên */}
            <CustomGrid xs={12}>
              <TextField
                label="Your Email  "
                variant="standard"
                fullWidth
                placeholder="Your Email "
              />
              <CusButton
                type="submit"
                variant="contained"
                color="primary"
                size="medium"
              >
              {children}
              </CusButton>
            </CustomGrid>
          </CustomGrid>
        </form>
      </Paper>
    </Container>
  );
}
