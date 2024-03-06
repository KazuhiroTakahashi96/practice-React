import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().min(4, "名前は４文字以上で入力してください"),
  email: z.string().email("メールアドレスの形式に誤りがあります"),
  password: z.string().min(8, "パスワードは8文字以上で入力してください"),
});
