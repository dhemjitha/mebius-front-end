import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import CategoryTable from "./variants/CategoryTable"
import ColorsTable from "./variants/ColorsTable"
import SizesTable from "./variants/SizesTable"

const VariantConfig = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="category" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="category">Category</TabsTrigger>
          <TabsTrigger value="size">Size</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
        </TabsList>
        
        <TabsContent value="category">
          <Card>
            <CardContent className="pt-6">
              <CategoryTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="size">
          <Card>
            <CardContent className="pt-6">
              <SizesTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="colors">
          <Card>
            <CardContent className="pt-6">
              <ColorsTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default VariantConfig 