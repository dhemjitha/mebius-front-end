import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const mockProducts = [
  {
    _id: "1",
    name: "Premium T-Shirt",
    category: "Clothing",
    price: 29.99,
    stock: 150,
    status: "in_stock"
  },
  {
    _id: "2",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 199.99,
    stock: 75,
    status: "low_stock"
  },
  {
    _id: "3",
    name: "Running Shoes",
    category: "Footwear",
    price: 89.99,
    stock: 0,
    status: "out_of_stock"
  }
]

export default function ProductTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockProducts.map((product) => (
            <TableRow key={product._id} className="hover:bg-gray-50">
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <Badge 
                  variant={
                    product.status === "in_stock" ? "outline" : 
                    product.status === "low_stock" ? "secondary" : 
                    "destructive"
                  }
                >
                  {product.status.replace('_', ' ')}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
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