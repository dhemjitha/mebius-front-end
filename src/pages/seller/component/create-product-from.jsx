"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

const sizes = [
  { id: "xs", label: "XS" },
  { id: "s", label: "S" },
  { id: "m", label: "M" },
  { id: "l", label: "L" },
  { id: "xl", label: "XL" },
  { id: "xxl", label: "XXL" },
]

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  categoryId: z.string({
    required_error: "Please select a category.",
  }),
  colorId: z.string({
    required_error: "Please select a color.",
  }),
  sizes: z.array(z.string()).min(1, {
    message: "Please select at least one size.",
  }),
  price: z.string().min(1, {
    message: "Price is required.",
  }),
  qty: z.string().min(1, {
    message: "Quantity is required.",
  }),
  imageUrl: z.string().url({
    message: "Please enter a valid URL.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
})

export function CreateProductForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      categoryId: "",
      colorId: "",
      sizes: [],
      price: "",
      qty: "",
      imageUrl: "",
      description: "",
    },
  })

  const watchedFields = form.watch()

  function onSubmit(values) {
    console.log(values)
  }

  const getColorName = (id) => {
    const colors = {
      "1": "Red",
      "2": "Blue",
      "3": "Green"
    }
    return colors[id] || ""
  }

  const getCategoryName = (id) => {
    const categories = {
      "1": "Category 1",
      "2": "Category 2",
      "3": "Category 3"
    }
    return categories[id] || ""
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter product name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="categoryId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">Category 1</SelectItem>
                          <SelectItem value="2">Category 2</SelectItem>
                          <SelectItem value="3">Category 3</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="colorId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select color" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">Red</SelectItem>
                          <SelectItem value="2">Blue</SelectItem>
                          <SelectItem value="3">Green</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="sizes"
                render={() => (
                  <FormItem>
                    <FormLabel>Available Sizes</FormLabel>
                    <div className="grid grid-cols-3 gap-2">
                      {sizes.map((size) => (
                        <FormField
                          key={size.id}
                          control={form.control}
                          name="sizes"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={size.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(size.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, size.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== size.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {size.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter price" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="qty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter quantity" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter image URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter product description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">Create Product</Button>
            </form>
          </Form>
        </div>

        {/* Preview Card */}
        <div className="w-full max-w-[350px] mx-auto">
          <h2 className="text-sm font-medium mb-2">Product Preview</h2>
          <Card className="w-full">
            {watchedFields.imageUrl && (
              <div className="aspect-square w-full relative overflow-hidden rounded-t-lg">
                <img
                  src={watchedFields.imageUrl}
                  alt={watchedFields.name}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150"
                  }}
                />
              </div>
            )}
            <CardHeader className="p-2 space-y-0">
              <CardTitle className="text-xs font-medium truncate">
                {watchedFields.name || "Product Name"}
              </CardTitle>
              <div className="flex flex-wrap gap-0.5 mt-0.5">
                {watchedFields.categoryId && (
                  <Badge variant="secondary" className="text-[8px] px-1 py-0 h-3">
                    {getCategoryName(watchedFields.categoryId)}
                  </Badge>
                )}
                {watchedFields.colorId && (
                  <Badge variant="outline" className="text-[8px] px-1 py-0 h-3">
                    {getColorName(watchedFields.colorId)}
                  </Badge>
                )}
              </div>
              {watchedFields.sizes && watchedFields.sizes.length > 0 && (
                <div className="flex flex-wrap gap-0.5 mt-0.5">
                  {watchedFields.sizes.map((sizeId) => (
                    <Badge key={sizeId} variant="outline" className="text-[8px] px-1 py-0 h-3">
                      {sizes.find(s => s.id === sizeId)?.label || sizeId}
                    </Badge>
                  ))}
                </div>
              )}
            </CardHeader>
            <CardContent className="p-2">
              <div className="space-y-0.5">
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs font-bold">
                    ${watchedFields.price || "0.00"}
                  </p>
                  <p className="text-[8px] text-gray-500">
                    Stock: {watchedFields.qty || "0"}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-2">
              <Button disabled className="w-full text-[8px] h-6 px-2">Add to Cart</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
