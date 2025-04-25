import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { useState } from "react"

const mockChartData = [
  { name: 'Jan', products: 320, users: 580, sales: 400 },
  { name: 'Feb', products: 350, users: 620, sales: 450 },
  { name: 'Mar', products: 380, users: 680, sales: 520 },
  { name: 'Apr', products: 420, users: 750, sales: 600 },
  { name: 'May', products: 440, users: 789, sales: 650 },
  { name: 'Jun', products: 456, users: 810, sales: 720 },
  { name: 'Jul', products: 480, users: 850, sales: 800 }
]

export default function GrowthChart() {
  const [chartData] = useState(mockChartData)

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Growth Overview</CardTitle>
        <CardDescription>Products, Users, and Sales trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="name"
                className="text-sm text-muted-foreground"
              />
              <YAxis
                className="text-sm text-muted-foreground"
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-1 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Products
                            </span>
                            <span className="font-bold text-[#2563eb]">
                              {payload[0].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Users
                            </span>
                            <span className="font-bold text-[#16a34a]">
                              {payload[1].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Sales
                            </span>
                            <span className="font-bold text-[#eab308]">
                              {payload[2].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="products"
                name="Products"
                strokeWidth={2}
                stroke="#2563eb"
                activeDot={{
                  r: 6,
                  className: "fill-primary stroke-primary",
                }}
              />
              <Line
                type="monotone"
                dataKey="users"
                name="Users"
                strokeWidth={2}
                stroke="#16a34a"
                activeDot={{
                  r: 6,
                  className: "fill-green-600 stroke-green-600",
                }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                name="Sales"
                strokeWidth={2}
                stroke="#eab308"
                activeDot={{
                  r: 6,
                  className: "fill-yellow-500 stroke-yellow-500",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
} 