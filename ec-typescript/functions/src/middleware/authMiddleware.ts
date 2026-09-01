import { Request, Response, NextFunction } from "express";

// メールアドレスの形式をチェックする正規表現
// @より前は半角英数字(a-z, A-Z, 0-9)と記号4種類(_, ., +, -)を許可
// @より後ろは半角英数字(a-z, A-Z, 0-9)とドット(.)を許可
// ドット(.)より後ろは2文字以上の半角英字(a-z, A-Z)を許可
const EMAIL_REGEX =
  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

export const validateSignupRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, name } = req.body;
  const errors: string[] = [];

  if (!email) {
    errors.push("メールアドレスは必須です。");
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push("メールアドレスの形式が正しくありません。");
  }

  if (!password || password.length < 8) {
    errors.push("パスワードは8文字以上必要です。");
  }

  if (!name) {
    errors.push("お名前は必須です。");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      message: "入力内容に誤りがあります。",
      errors: errors,
    });
  }

  return next();
};

