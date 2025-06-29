"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import { Button } from "../ui/button"

//sample data ofr correct score predictions 

const correctScores =[
    {
    id: 1,
    homeTeam: "Manchester City",
    awayTeam: "Tottenham",
    prediction: "2-0",
    result: "2-0",
    odds: 7.5,
    }
]

const CorrectScoreTable =() => {
    return(
        <Card>
            <CardHeader className="flex flex-row items-center">
                <CardTitle>Correct Score Prediction</CardTitle>
                <div className="ml-auto flex items-center ">
                    <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        Today
                    </Button> 
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Match</TableHead>
                            <TableHead>Predicted Score</TableHead>
                            <TableHead>Actual Result</TableHead>
                            <TableHead>Odds</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {correctScores.map((score)=>(
                            <TableRow key ={score.id}>
                                <TableCell className="font-medium">{score.homeTeam} vs {score.awayTeam}</TableCell>
                                <TableCell>{score.prediction}</TableCell>
                                <TableCell>{score.result}</TableCell>
                                <TableCell>{score.odds}</TableCell>
                                <TableCell> <Badge variant="default">Correct</Badge> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>  
                </Table>
            </CardContent>
        </Card>
    )
}
export default CorrectScoreTable