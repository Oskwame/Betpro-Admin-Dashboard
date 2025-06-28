import DashboardLayout from "@/components/dashboard-layout/DashboardLayout"
import { Overview } from "@/components/overview/Overview"

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="p-6">
            <h2 className="text-3xl font-bold">Dashboard Overview</h2>
            <p className="text-muted-foreground">Welcome to your betting predictions dashboard</p>
          </div>
        </div>
        <Overview/>
      </div>
    </DashboardLayout>
  )
}
