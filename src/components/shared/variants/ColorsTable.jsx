import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const mockColors = [
  { id: 1, name: "Red", hexcode: "#FF0000", slug: "red" },
  { id: 2, name: "Blue", hexcode: "#0000FF", slug: "blue" },
  { id: 3, name: "Green", hexcode: "#00FF00", slug: "green" },
  { id: 4, name: "Black", hexcode: "#000000", slug: "black" },
]

const ColorsTable = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Colors</h2>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Color
        </Button>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Hex Code</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockColors.map((color) => (
            <TableRow key={color.id}>
              <TableCell>{color.id}</TableCell>
              <TableCell>{color.name}</TableCell>
              <TableCell>
                <div 
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: color.hexcode }}
                />
              </TableCell>
              <TableCell>{color.hexcode}</TableCell>
              <TableCell>{color.slug}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ColorsTable 