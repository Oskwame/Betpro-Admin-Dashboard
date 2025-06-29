"use client"

import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Table, TableBody, TableCell, TableRow, TableHead, TableHeader } from "../ui/table"
import { Tabs, TabsList, TabsContent, TabsTrigger } from "../ui/tabs"


const leaguePredictions ={
    "Premier League":[
        {
            id:1,
            homeTeam: "Liverpool",
            awayTeam: "Chelsea",
            prediction: "Over 2.5",
            odds: 1.85,
            time: "17:30",
            confidence: "Medium",
        },
        {
            id:2,
            homeTeam: "Newcastle",
            awayTeam: "Shefield united",
            prediction: "Over 2.5",
            odds: 1.85,
            time: "17:30",
            confidence: "Medium",
        },
        {
            id:3,
            homeTeam: "Crystal Palace",
            awayTeam: "Manchester City",
            prediction: "Over 2.5",
            odds: 1.85,
            time: "17:30",
            confidence: "Medium",
        },
    ],
    "La Liga":[
        {
            id:1,
            homeTeam: "Getafe",
            awayTeam: "Osasuna",
            prediction: "1 & over 1.5",
            odds: 1.85,
            time: "17:30",
            confidence: "Medium",
        },
        {
            id:2,
            homeTeam: "Real Madrid",
            awayTeam: "Bilbao Athletic",
            prediction: "1",
            odds: 1.85,
            time: "17:30",
            confidence: "Medium",
        },
        {
            id: 3,
            awayTeam: "Sevilla",
            homeTeam: "Atletico Madrid",
            odds: 1.8,
            prediction: "BTTS",
            confidence: "Medium",
            time: "18:30",
    },
    ],
    "Serie A":[
        {
            id:1,
            awayTeam: "Juventus",
            homeTeam: "Udinese",
            odds: 1.2,
            prediction: "1",
            confidence: "Medium",
            time: "18:30",
        },
        {
            id:2,
            awayTeam: "Inter Milan",
            homeTeam: "As Roma",
            odds: 1.1,
            prediction: "1x",
            confidence: "Medium",
            time: "18:30",
        },
        {
            id:3,
            awayTeam: "AC Milan",
            homeTeam: "Napoli",
            odds: 1.5,
            prediction: "BTTS",
            confidence: "Medium",
            time: "18:30",
        },
    ],
    "Bundesliga":[
        {
            id:1,
            homeTeam: "RB Leipzig",
            awayTeam: "Leverkusen",
            prediction: "1X",
            odds: 1.65,
            time: "15:30",
            confidence: "Medium",
        },
        {
            id:2,
            homeTeam: "Union Berlin",
            awayTeam: "Augsburg",
            prediction: "X",
            odds: 1.65,
            time: "15:30",
            confidence: "Medium",
        },
        {
        id:3,
            homeTeam: "Mainz",
            awayTeam: "Wolfburg",
            prediction: "1/2",
            odds: 1.65,
            time: "15:30",
            confidence: "Medium",
        },
    ],
    "Ligue 1":[
        {
            id:1,
            homeTeam: "Lyon",
            awayTeam: "Lille",
            prediction: "BTTS",
            odds: 1.65,
            time: "15:30",
            confidence: "Medium", 
        },
        {
            id:2,
            homeTeam: "Reims",
            awayTeam: "PSG",
            prediction: "X2",
            odds: 1.65,
            time: "15:30",
            confidence: "Medium",
    },
    {
        id:3,
        homeTeam: "Monaco",
        awayTeam: "Marseille",
        prediction: "over 2.5",
        odds: 1.65,
        time: "15:30",
        confidence: "Medium",
    },
    ]

}
 const TopLeagueTable =() =>{
    return(
        <Card>
            <CardHeader>
                <CardTitle>League Predictuions</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="Premier League">
                    <TabsList className="grid grid-cols-5 mb-4">
                        <TabsTrigger value="Premier League">Premier League</TabsTrigger>
                        <TabsTrigger value="La Liga">La Liga</TabsTrigger>
                        <TabsTrigger value="Serie A">Serie A</TabsTrigger>
                        <TabsTrigger value="Bundesliga">Bundesliga</TabsTrigger>
                        <TabsTrigger value="Ligue 1">Ligue 1</TabsTrigger>
                    </TabsList>
                    {Object.entries(leaguePredictions).map(([league, predictions]) => (
            <TabsContent key={league} value={league}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Match</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Prediction</TableHead>
                    <TableHead>Odds</TableHead>
                    <TableHead>Confidence</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                {predictions.map((prediction) => (
                    <TableRow key={prediction.id}>
                        <TableCell className="font-medium">
                        {prediction.homeTeam} vs {prediction.awayTeam}
                            </TableCell>
                            <TableCell>{prediction.time}</TableCell>
                            <TableCell>{prediction.prediction}</TableCell>
                            <TableCell>{prediction.odds}</TableCell>
                            <TableCell>
                        <Badge variant={prediction.confidence === "High" ? "default" : "outline"}>
                        {prediction.confidence}
                        </Badge>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
              </Table>
            </TabsContent>
          ))}
        </Tabs>
            </CardContent>
        </Card>
    )
 }
 export default TopLeagueTable