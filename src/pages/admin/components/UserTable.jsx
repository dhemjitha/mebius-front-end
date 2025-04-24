import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye, Edit, Trash2, Search, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { useState } from "react"

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
  },
  {
    _id: "4",
    name: "Sarah Brown",
    email: "sarah.brown@example.com",
    phone: "+13344556677",
    role: "seller",
    status: "active",
    joinedDate: "2024-04-05"
  }
]

const getRoleBadgeVariant = (role) => {
  switch (role) {
    case 'admin':
      return 'default'
    case 'seller':
      return 'secondary'
    default:
      return 'outline'
  }
}

const getStatusIndicator = (status) => {
  return status === 'active' 
    ? "bg-green-500" 
    : "bg-red-500"
}

export default function UserTable() {
  const [selectedRole, setSelectedRole] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = mockUsers
    .filter(user => selectedRole === "all" || user.role === selectedRole)
    .filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery)
    )

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select 
          value={selectedRole} 
          onValueChange={setSelectedRole}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="customer">Customer</SelectItem>
            <SelectItem value="seller">Seller</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="hidden md:table-cell">Phone</TableHead>
              <TableHead className="hidden md:table-cell">Joined Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No users found.
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getRoleBadgeVariant(user.role)}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {user.phone}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {new Date(user.joinedDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${getStatusIndicator(user.status)}`} />
                      <span className="text-sm capitalize">{user.status}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <TooltipProvider>
                      <div className="flex space-x-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Details</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit User</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete User</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}