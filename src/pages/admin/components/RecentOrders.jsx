import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const mockOrders = [
  {
    id: 1,
    customer: "John Doe",
    amount: 156.00,
    status: "completed"
  },
  {
    id: 2,
    customer: "Jane Smith",
    amount: 243.00,
    status: "pending"
  },
  {
    id: 3,
    customer: "Bob Johnson",
    amount: 365.00,
    status: "processing"
  },
  {
    id: 4,
    customer: "Alice Brown",
    amount: 189.50,
    status: "completed"
  },
  {
    id: 5,
    customer: "Charlie Wilson",
    amount: 521.75,
    status: "pending"
  }
]

export default function RecentOrders() {
  const [orders] = useState(mockOrders)

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>Latest transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{order.customer}</p>
                <p className="text-sm text-muted-foreground">
                  ${order.amount.toFixed(2)}
                </p>
              </div>
              <div className="ml-auto">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  order.status === 'completed' 
                    ? 'bg-green-100 text-green-800'
                    : order.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 