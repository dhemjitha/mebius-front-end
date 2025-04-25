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
import CategoryDialog from "./dialogs/CategoryDialog"

const mockCategories = [
  {
    id: "1",
    name: "Shoes",
    slug: "shoes"
  },
  {
    id: "2",
    name: "Shorts",
    slug: "shorts"
  },
  {
    id: "3",
    name: "T-Shirts",
    slug: "tshirts"
  },
  {
    id: "4",
    name: "Pants",
    slug: "pants"
  },
  {
    id: "5",
    name: "Socks",
    slug: "socks"
  },
]

const CategoryTable = () => {
  const handleSave = (data) => {
    // Handle saving the new category
    console.log(data)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center py-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Categories</h2>
          <p className="text-sm text-muted-foreground">
            Manage your product categories here
          </p>
        </div>
        <CategoryDialog onSave={handleSave} />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCategories.map((category) => (
              <TableRow key={category.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell className="text-muted-foreground">{category.slug}</TableCell>
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

export default CategoryTable 