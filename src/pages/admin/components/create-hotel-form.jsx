// create-hotel-form.jsx
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function CreateHotelForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    price: "",
    rating: "",
    image: "",
    featuredProperty: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === "checkbox" ? checked : value 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", {
        ...formData,
        price: Number(formData.price),
        rating: Number(formData.rating)
      })
      setFormData({
        name: "",
        location: "",
        description: "",
        price: "",
        rating: "",
        image: "",
        featuredProperty: false,
      })
      setIsLoading(false)
      alert("Hotel created successfully!")
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Hotel Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="border-gray-300"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            className="border-gray-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          className="min-h-24 border-gray-300"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="price">Price per Night ($)</Label>
          <Input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="border-gray-300"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            min="1"
            max="5"
            step="0.1"
            value={formData.rating}
            onChange={handleInputChange}
            required
            className="border-gray-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          required
          className="border-gray-300"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="featuredProperty"
          name="featuredProperty"
          checked={formData.featuredProperty}
          onCheckedChange={(checked) => 
            setFormData(prev => ({ ...prev, featuredProperty: checked }))
          }
        />
        <Label htmlFor="featuredProperty">Featured Property</Label>
      </div>

      <div className="flex gap-4">
        <Button type="submit" className="bg-black text-white" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Hotel"}
        </Button>
        <Button type="button" variant="outline">
          Cancel
        </Button>
      </div>
    </form>
  )
}