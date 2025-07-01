
import DashboardLayout from "@/components/dashboard-layout/DashboardLayout";
import AddPredictionForm from "@/components/add-prediction-form/AddPrediction";

export default function CorrectScores (){
    return(
        <DashboardLayout>
            <div className=" flex-1 space-y-4 p-4 pt-6 md:p-8">
                <div className=" flex items-center justify-between">
                    <div className=" p-6">
                        <h2 className=" text-3xl font-bold">Add Predictions</h2>
                        <p className=" text-muted-foreground">Create a new prediction</p>
                    </div>
                </div>
                <AddPredictionForm/>
            </div>
        </DashboardLayout>
    )
}