import DashboardLayout from "@/components/dashboard-layout/DashboardLayout"
import SubscriptionManager from "@/components/subscription-manager/SubscriptionManager"


export default function Subscription(){
    return(
      <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="p-6">
            <h2 className="text-3xl font-bold">Subscription Management</h2>
            <p className="text-muted-foreground">Manage VIP subscribers and their access</p>
          </div>
        </div>
        <SubscriptionManager/>
      </div>
    </DashboardLayout>
    )
} 