import { Model } from 'mongoose'

export type Orders = {
  productName: string
  price: number
  quantity: number
}

export type UserInterface = {
  userId: number
  username: string
  password: string
  fullName: {
    firstName: string
    lastName: string
  }
  age: number
  email: string
  isActive: boolean
  hobbies: string[]
  address: {
    street: string
    city: string
    country: string
  }
  orders: Orders[]
}

export interface ExistingUser extends Model<UserInterface> {
  isExistingUser(id: string): Promise<UserInterface | null>
}
