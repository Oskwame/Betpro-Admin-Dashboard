import DashboardLayout from "@/components/dashboard-layout/DashboardLayout";
import HistoryTable from "@/components/history-table/HistoryTable";

export default function History (){
    return(
        <DashboardLayout>
            <div className=" felx-1 space-y-4 pt-6 p-4 md:p-8">
                <div className=" flex items-center justify-between">
                    <div className="p-6">
                        <h2 className="text-3xl font-bold">History</h2>
                        <p className="text-muted-foreground">Results of previous predictions</p>
                    </div>
                </div>
                <HistoryTable/>
            </div>
        </DashboardLayout>
    )
}