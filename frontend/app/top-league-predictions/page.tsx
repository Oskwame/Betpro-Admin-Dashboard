import DashboardLayout from "@/components/dashboard-layout/DashboardLayout";
import TopLeagueTable from "@/components/top-leagues-table/TopLeaguesTable";


export default function TopLeaguePredictions (){
    return(
        <DashboardLayout>
            <div className=" felx-1 space-y-4 pt-6 p-4 md:p-8">
                <div className=" flex items-center justify-between">
                    <div className="p-6">
                        <h2 className="text-3xl font-bold">Top League Predictions</h2>
                        <p className="text-muted-foreground">Predictions for various top leagues</p>
                    </div>
                </div>
                <TopLeagueTable/>
            </div>
        </DashboardLayout>
    )
}