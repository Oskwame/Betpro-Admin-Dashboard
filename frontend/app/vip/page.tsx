import DashboardLayout from "@/components/dashboard-layout/DashboardLayout"
import VipContent from "@/components/vip-content/VipContent"


export default function Vip(){
    return(
      <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="p-6">
            <h2 className="text-3xl font-bold">Vip Predictions</h2>
            <p className="text-muted-foreground">Manage premium predictions for VIP subscribers</p>
          </div>
        </div>
        <VipContent/>
      </div>
    </DashboardLayout>
    )
} 