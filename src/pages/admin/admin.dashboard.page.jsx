import StatsCards from "./components/StatsCards"
import GrowthChart from "./components/GrowthChart"
import RecentOrders from "./components/RecentOrders"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="mt-8 text-xl font-bold">Dashboard</h2>
      <StatsCards />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <GrowthChart />
        <RecentOrders />
      </div>
    </div>
  )
}