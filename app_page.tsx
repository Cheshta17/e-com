import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Search } from "lucide-react"
import Image from "next/image"

const products = [
  { id: 1, name: "T-Shirt", category: "Clothing", price: 19.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t%20shirt-zybW5l0lGcoDug2FzoldVQQ1ILgunq.jpeg" },
  { id: 2, name: "Jeans", category: "Clothing", price: 59.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jeans-qXfmZ7t1wvarJxdtvKiXuv24t8HnqW.jpeg" },
  { id: 3, name: "Laptop", category: "Electronics", price: 1999.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laptop-l0rIMSSM5JFGrEG7gn2eqQbe2ret75.jpeg" },
  { id: 4, name: "Smartphone", category: "Electronics", price: 999.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/phone-yv4LNLekknLhbM5oz22dLnC9uGcKYE.jpeg" },
  { id: 5, name: "Bread", category: "Groceries", price: 3.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bread-kd4bPmyHzIGdt9krEi6Gx4kpvzPnvO.jpeg" },
  { id: 6, name: "Milk", category: "Groceries", price: 2.49, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milk-uqknkrGP5aYKJ8K5dMthGbCCkAPZ4l.jpeg" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-100">ShopEase</h1>
          <div className="flex items-center space-x-4">
            <Input className="w-64 bg-gray-700 text-gray-100" placeholder="Search products..." />
            <Button variant="outline" size="icon" className="text-gray-100 border-gray-100">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="outline" size="icon" className="text-gray-100 border-gray-100">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-100">Our Products</h2>
              <Select>
                <SelectTrigger className="w-[180px] bg-gray-700 text-gray-100">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 text-gray-100">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="groceries">Groceries</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg text-gray-100">{product.name}</CardTitle>
                    <p className="text-sm text-gray-400">{product.category}</p>
                    <p className="text-lg font-semibold mt-2 text-gray-100">${product.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}