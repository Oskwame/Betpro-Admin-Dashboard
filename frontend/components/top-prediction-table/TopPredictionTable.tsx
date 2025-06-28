"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Filter } from "lucide-react"

// Sample data for top predictions
const topPredictions = [
  {
    id: 1,
    date: new Date(),
    homeTeam: "Manchester United",
    awayTeam: "Arsenal",
    prediction: "1X",
    odds: 1.85,
    league: "Premier League",
    confidence: "High",
    status: "pending",
  },
  {
    id: 2,
    date: new Date(),
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    prediction: "Over 2.5",
    odds: 1.65,
    league: "La Liga",
    confidence: "High",
    status: "pending",
  },
  {
    id: 3,
    date: new Date(),
    homeTeam: "Bayern Munich",
    awayTeam: "Dortmund",
    prediction: "1",
    odds: 1.55,
    league: "Bundesliga",
    confidence: "Medium",
    status: "pending",
  },
  {
    id: 4,
    date: new Date(),
    homeTeam: "PSG",
    awayTeam: "Marseille",
    prediction: "1",
    odds: 1.45,
    league: "Ligue 1",
    confidence: "High",
    status: "pending",
  },
  {
    id: 5,
    date: new Date(),
    homeTeam: "Juventus",
    awayTeam: "AC Milan",
    prediction: "X2",
    odds: 1.9,
    league: "Serie A",
    confidence: "Medium",
    status: "pending",
  },
]

const TopPredictionsTable = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Top Predictions</CardTitle>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Today
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
              <TableHead>Confidence</TableHead>
              <TableHead>League</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topPredictions.map((prediction) => (
              <TableRow key={prediction.id}>
                <TableCell className="font-medium">{prediction.homeTeam} vs {prediction.awayTeam}</TableCell>
                <TableCell>{prediction.prediction}</TableCell>
                <TableCell>{prediction.odds}</TableCell>
                <TableCell>
                  <Badge variant={prediction.confidence === "High" ? "default" : "outline"}>
                    {prediction.confidence}
                  </Badge>
                </TableCell>
                <TableCell>{prediction.league}</TableCell>
                <TableCell>
                  <Badge className=" bg-blue-400 text-blue-100 hover:text-black" variant="secondary">Pending</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
export default TopPredictionsTable
