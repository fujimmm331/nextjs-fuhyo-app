// 商品カテゴリ
export type CategoryType = 'shoes' | 'clothes' | 'book'
// 商品の状態
export type ConditionType = 'new' | 'used'

// ユーザー
export type UserType = {
  id: number
  username: string
  displayName: string
  email: string
  profileImageUrl: string
  description: string
}

// 商品
export type ProductType = {
  id: number
  category: Category
  title: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: Condition
  owner: User
}

// APIコンテキスト
export type ApiContextType = {
  apiRootUrl: string
}