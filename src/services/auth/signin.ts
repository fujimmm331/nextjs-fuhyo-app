import { ApiContextType, UserType } from "@/types/data";
import { fetcher } from "@/utils";


export type SigninParamsType = {
  /**
   * ログイン時のユーザ名
   * サンプルユーザの場合は user
   */
  username: string
  /**
   * ログイン時のパスワード
   * サンプルユーザの場合は password
   */
  password: string
}

/**
 * 認証API
 * @param context API今テキスト
 * @param params ログイン時のparams
 * @returns ログインユーザ
 */
export const signin = async (
  context: ApiContextType,
  params: SigninParamsType,
): Promise<UserType> => {

  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
};
