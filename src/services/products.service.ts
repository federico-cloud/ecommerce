import { Product } from "../types"

export const getProducts = async():Promise<Product[]> => {
  try {
    const resp = await fetch("http://localhost:3000/products")

    if (!resp.ok) {
      throw new Error(`Error: ${resp.status} - ${resp.statusText}`)
    }

    const data: Product[] = await resp.json()
    return data
    
  } catch (error) {
    throw new Error("Unable to fetch products")
  }
}