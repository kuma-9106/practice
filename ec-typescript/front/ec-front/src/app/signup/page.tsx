"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { SignupBody } from "@/features/auth/types/signup";

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Paper,
} from "@mui/material";

import { useSignup } from "@/features/auth/hooks/useSignup";

export default function SignupPage() {
  const { postSignup } = useSignup();
  const { register, handleSubmit } = useForm<SignupBody>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignupBody) => {
    setLoading(true);
    setError("");
    try {
      const res = await postSignup(data);
      if (res === "success") {
        console.log("Redirecting to /login");
        alert("登録が完了しました。ログイン画面へ遷移します。");
      } else {
        console.error(res);
        setError("サインアップに失敗しました");
        return;
      }
      alert("登録が完了しました。ログイン画面へ遷移します。");
    } catch (err: any) {
      // バックエンドからのエラーメッセージを表示
      console.error(err);
      setError(err.response?.data?.message || "サインアップに失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: "100%" }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            アカウント作成
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="お名前"
              autoComplete="name"
              autoFocus
              {...register("name")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="メールアドレス"
              type="email"
              autoComplete="email"
              {...register("email")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="パスワード"
              type="password"
              autoComplete="new-password"
              {...register("password")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? "登録中..." : "登録する"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

