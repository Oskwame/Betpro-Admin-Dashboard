import DashboardLayout from "@/components/dashboard-layout/DashboardLayout"
import TopPredictionsTable from "@/components/top-prediction-table/TopPredictionTable"

export default function TopPrediction(){
    return(
      <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="p-6">
            <h2 className="text-3xl font-bold">Top Predictions</h2>
            <p className="text-muted-foreground">Today's top betting predictions</p>
          </div>
        </div>
        <TopPredictionsTable/>
      </div>
    </DashboardLayout>
    )
} 