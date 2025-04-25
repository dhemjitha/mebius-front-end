import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { useState } from "react"

const ColorDialog = ({ onSave }) => {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    hexcode: "#000000",
    slug: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
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
  )
}

export default ColorDialog 