import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { Eye, Edit, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const mockUsers = [
  {
    _id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    role: "customer",
    status: "active",
    joinedDate: "2024-01-15"
  },
  {
    _id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1987654321",
    role: "admin",
    status: "active",
    joinedDate: "2024-02-20"
  },
  {
    _id: "3",
    name: "Mike Johnson",
    email: "mike.j@example.com",
    phone: "+1122334455",
    role: "customer",
    status: "inactive",
    joinedDate: "2024-03-10"
  }
]

export default function UserTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Joined Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user) => (
            <TableRow key={user._id} className="hover:bg-gray-50">
              <TableCell>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={user.role === "admin" ? "secondary" : "outline"}>
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{format(new Date(user.joinedDate), "MMM dd, yyyy")}</TableCell>
              <TableCell>
                <Badge 
                  variant={user.status === "active" ? "outline" : "destructive"}
                >
                  {user.status}
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