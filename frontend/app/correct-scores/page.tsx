import CorrectScoreTable from "@/components/correct-score-table/CorrectScoreTable";
import DashboardLayout from "@/components/dashboard-layout/DashboardLayout";

export default function CorrectScores (){
    return(
        <DashboardLayout>
            <div className=" flex-1 space-y-4 p-4 pt-6 md:p-8">
                <div className=" flex items-center justify-between">
                    <div className=" p-6">
                        <h2 className=" text-3xl font-bold">Correct Scores</h2>
                        <p className=" text-muted-foreground">List of correct score predictions</p>
                    </div>
                </div>
                <CorrectScoreTable/>
            </div>
        </DashboardLayout>
    )
}