import axios, { AxiosError } from "axios";
import { SignupBody } from "../types/signup";

export const useSignup = () => {
  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  });

  const postSignup = async (body: SignupBody) => {
    const response = await api
      .post("/auth/signup", {
        name: body.name,
        email: body.email,
        password: body.password,
      })
      .catch((e: AxiosError) => {
        console.error("エラーです", JSON.stringify(e.response));
      });

    if (response == undefined) {
      console.log("responseがundifinedです");
      return;
    }

    if (response?.status !== 200) {
      console.log("200以外のstatusです");
      return;
    }
    return "success";
  };

  return { postSignup };
};

