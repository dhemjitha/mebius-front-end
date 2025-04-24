import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button"
  import { Eye, PackageCheck, XCircle } from "lucide-react"
  import { Badge } from "@/components/ui/badge"
  
  const mockOrders = [
    {
      _id: "ORD001",
      customerName: "John Doe",
      orderDate: "2024-03-15",
      items: 3,
      totalAmount: 149.97,
      status: "pending",
      email: "john.doe@example.com"
    },
    {
      _id: "ORD002",
      customerName: "Jane Smith",
      orderDate: "2024-03-14",
      items: 2,
      totalAmount: 89.98,
      status: "delivered",
      email: "jane.smith@example.com"
    },
    {
      _id: "ORD003",
      customerName: "Mike Johnson",
      orderDate: "2024-03-14",
      items: 1,
      totalAmount: 199.99,
      status: "cancelled",
      email: "mike.j@example.com"
    }
  ]
  
  export default function OrderTable() {
    const getStatusColor = (status) => {
      switch (status) {
        case "pending":
          return "warning"
        case "delivered":
          return "success"
        case "cancelled":
          return "destructive"
        default:
          return "secondary"
      }
    }

    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockOrders.map((order) => (
              <TableRow key={order._id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{order._id}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{order.customerName}</div>
                    <div className="text-sm text-gray-500">{order.email}</div>
                  </div>
                </TableCell>
                <TableCell>{new Date(order.orderDate).toLocaleDateString()}</TableCell>
                <TableCell>{order.items} items</TableCell>
                <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(order.status)}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" title="View Order">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      title="Mark as Delivered"
                      disabled={order.status !== "pending"}
                    >
                      <PackageCheck className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      title="Cancel Order"
                      disabled={order.status !== "pending"}
                    >
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }