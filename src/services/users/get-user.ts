import { ApiContextType } from "@/types/data"
import { fetcher } from "@/utils"

export type GetUserParamsType = {
  /**
   * ユーザのID
   */
  id: number
}

export const getUser = async (
  context: ApiContextType,
  { id }: GetUserParamsType
) => {
  /**
    // ユーザーAPI
    // サンプルレスポンス
    {
      "id": "1",
      "username": "taketo",
      "displayName": "Taketo Yoshida",
      "email": "taketo@example.com",
      "profileImageUrl": "/users/1.png",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    }
 */
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )

}