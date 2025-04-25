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
import ColorDialog from "./dialogs/ColorDialog"

const mockColors = [
  { id: "1", slug: "resin", name: "Resin", hex: "#6C7C59", hexcode: "#6C7C59" },
  { id: "2", slug: "pimento", name: "Pimento", hex: "#BF3B2F", hexcode: "#BF3B2F" },
  { id: "3", slug: "bright_ceramic", name: "Bright Ceramic", hex: "#FFA500", hexcode: "#FFA500" },
  { id: "4", slug: "black", name: "Black", hex: "#000000", hexcode: "#000000" },
  { id: "5", slug: "white", name: "White", hex: "#FFFFFF", hexcode: "#FFFFFF" }
]

const ColorsTable = () => {
  const handleSave = (data) => {
    // Handle saving the new color
    console.log(data)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center py-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Colors</h2>
          <p className="text-sm text-muted-foreground">
            Manage your product colors here
          </p>
        </div>
        <ColorDialog onSave={handleSave} />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Preview</TableHead>
              <TableHead>Hex Code</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockColors.map((color) => (
              <TableRow key={color.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{color.id}</TableCell>
                <TableCell>{color.name}</TableCell>
                <TableCell>
                  <div
                    className="w-8 h-8 rounded-md border shadow-sm"
                    style={{ backgroundColor: color.hexcode }}
                  />
                </TableCell>
                <TableCell className="font-mono text-sm">{color.hexcode}</TableCell>
                <TableCell className="text-muted-foreground">{color.slug}</TableCell>
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

export default ColorsTable 