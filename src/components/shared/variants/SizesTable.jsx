import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import SizeDialog from "./dialogs/SizeDialog"

const mockSizes = [
  { id: 1, name: "Small" },
  { id: 2, name: "Medium" },
  { id: 3, name: "Large" },
  { id: 4, name: "X-Large" },
]

const SizesTable = () => {
  const handleSave = (data) => {
    // Handle saving the new size
    console.log(data)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center py-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Sizes</h2>
          <p className="text-sm text-muted-foreground">
            Manage your product sizes here
          </p>
        </div>
        <SizeDialog onSave={handleSave} />
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockSizes.map((size) => (
              <TableRow key={size.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{size.id}</TableCell>
                <TableCell>{size.name}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-500">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default SizesTable 