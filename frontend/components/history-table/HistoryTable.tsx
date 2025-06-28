"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Filter } from "lucide-react"

// Sample data for prediction history
const historyData = [
  {
    id: 1,
    date: "2023-06-03",
    homeTeam: "Liverpool",
    awayTeam: "Chelsea",
    prediction: "Over 2.5",
    odds: 1.75,
    result: "3-1",
    status: "won",
  },
  {
    id: 2,
    date: "2023-06-02",
    homeTeam: "Inter Milan",
    awayTeam: "Napoli",
    prediction: "1",
    odds: 1.95,
    result: "2-0",
    status: "won",
  },
  {
    id: 3,
    date: "2023-06-01",
    homeTeam: "PSG",
    awayTeam: "Lyon",
    prediction: "1X",
    odds: 1.45,
    result: "1-1",
    status: "won",
  },
  {
    id: 4,
    date: "2023-05-31",
    homeTeam: "Bayern Munich",
    awayTeam: "RB Leipzig",
    prediction: "Over 3.5",
    odds: 2.1,
    result: "2-0",
    status: "lost",
  },
  {
    id: 5,
    date: "2023-05-30",
    homeTeam: "Barcelona",
    awayTeam: "Sevilla",
    prediction: "1",
    odds: 1.65,
    result: "3-0",
    status: "won",
  },
]

const HistoryTable =() => {
    return(
         <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Prediction History</CardTitle>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2"/>
            27th June,2025
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Match</TableHead>
              <TableHead>Prediction</TableHead>
              <TableHead>Odds</TableHead>
              <TableHead>Result</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {historyData.map((prediction) => (
              <TableRow key={prediction.id}>
                <TableCell className="font-medium">
                  {prediction.homeTeam} vs {prediction.awayTeam}
                </TableCell>
                <TableCell>{prediction.prediction}</TableCell>
                <TableCell>{prediction.odds}</TableCell>
                <TableCell>{prediction.result}</TableCell>
                <TableCell>
                  {prediction.status === "won" ? (
    <Badge className="bg-green-500 text-green-100 border border-green-200">
      Won
    </Badge>
  ) : (
    <Badge variant="destructive">
      Lost
    </Badge>
  )}
  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    )
}
export default HistoryTable