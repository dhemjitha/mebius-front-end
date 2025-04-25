import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Package, DollarSign, TrendingUp, ShoppingCart } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

// Mock data for the dashboard
const dashboardData = {
  stats: {
    totalSales: 1234,
    activeUsers: 789,
    totalProducts: 456,
    revenue: 98765,
  },
  recentOrders: [
    { id: 1, customer: "John Doe", amount: 156.00, status: "completed" },
    { id: 2, customer: "Jane Smith", amount: 243.00, status: "pending" },
    { id: 3, customer: "Bob Johnson", amount: 365.00, status: "processing" },
  ],
  chartData: [
    { name: 'Jan', products: 320, users: 580, sales: 400 },
    { name: 'Feb', products: 350, users: 620, sales: 450 },
    { name: 'Mar', products: 380, users: 680, sales: 520 },
    { name: 'Apr', products: 420, users: 750, sales: 600 },
    { name: 'May', products: 440, users: 789, sales: 650 },
    { name: 'Jun', products: 456, users: 810, sales: 720 },
    { name: 'Jul', products: 480, users: 850, sales: 800 },
  ]
}

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="mt-8 text-xl font-bold">Dashboard</h2>
      
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.stats.totalSales}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.stats.activeUsers}</div>
            <p className="text-xs text-muted-foreground">+180 new users</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.stats.totalProducts}</div>
            <p className="text-xs text-muted-foreground">+19 new products</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${dashboardData.stats.revenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Growth Overview</CardTitle>
            <CardDescription>Products, Users, and Sales trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={dashboardData.chartData}
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
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {dashboardData.recentOrders.map((order) => (
                <div key={order.id} className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">
                      ${order.amount.toFixed(2)}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      order.status === 'completed' 
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}