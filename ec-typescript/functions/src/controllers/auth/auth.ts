import { Request, Response } from "express";
import {
  createAuthUser,
  createUserDB,
  deleteAuthUser,
  deleteUserDB,
} from "../../models/auth/auth";

export const postSignup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  let createdUid: string | null = null;

  try {
    const userRecord = await createAuthUser(email, name, password);
    createdUid = userRecord.uid;
    await createUserDB(createdUid, email, name);
    return res.status(200).json({
      success: true,
      message: "ユーザーのサインアップに成功しました",
    });
  } catch (error: any) {
    console.error(error);

    if (error.code === "auth/email-already-exists") {
      return res.status(409).json({
        success: false,
        error: {
          code: "EMAIL_ALREADY_EXISTS",
          message: "このメールアドレスは既に登録されています",
        },
      });
    }
    // ロールバック処理
    if (createdUid) {
      await deleteAuthUser(createdUid);
      await deleteUserDB(createdUid);
    }

    return res.status(500).json({
      success: false,
      error: {
        code: "SIGNUP_FAILED",
        message: "サインアップに失敗しました",
      },
    });
  }
};

