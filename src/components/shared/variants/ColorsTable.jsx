import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Plus, Pencil, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const mockColors = [
  { id: 1, name: "Red", hexcode: "#FF0000", slug: "red" },
  { id: 2, name: "Blue", hexcode: "#0000FF", slug: "blue" },
  { id: 3, name: "Green", hexcode: "#00FF00", slug: "green" },
  { id: 4, name: "Black", hexcode: "#000000", slug: "black" },
]

const ColorsTable = () => {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    hexcode: "#000000",
    slug: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setOpen(false)
    setFormData({ name: "", hexcode: "#000000", slug: "" })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
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
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Color
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Color</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter color name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hexcode">Color</Label>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Input
                      type="color"
                      id="hexcode"
                      name="hexcode"
                      value={formData.hexcode}
                      onChange={handleChange}
                      className="w-12 h-10 p-1 cursor-pointer"
                    />
                  </div>
                  <Input
                    id="hexcode-text"
                    name="hexcode"
                    value={formData.hexcode}
                    onChange={handleChange}
                    className="flex-1"
                    placeholder="#000000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  name="slug"
                  placeholder="enter-slug-here"
                  value={formData.slug}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
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