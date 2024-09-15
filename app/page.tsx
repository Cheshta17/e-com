import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">E-commerce Backend</h1>
      <p className="mb-4">Welcome to the E-commerce backend API. Here are the available endpoints:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <Link href="/api/products" className="text-blue-500 hover:underline">
            /api/products
          </Link>
          {' - Get all products or create a new product'}
        </li>
        <li>
          <Link href="/api/users" className="text-blue-500 hover:underline">
            /api/users
          </Link>
          {' - Create a new user or get user by email'}
        </li>
        <li>
          <Link href="/api/orders" className="text-blue-500 hover:underline">
            /api/orders
          </Link>
          {' - Get user orders or create a new order'}
        </li>
        <li>
          <Link href="/api/checkout" className="text-blue-500 hover:underline">
            /api/checkout
          </Link>
          {' - Create a new checkout session'}
        </li>
      </ul>
      <p>Please refer to the API documentation for more details on how to use these endpoints.</p>
    </div>
  )
}
