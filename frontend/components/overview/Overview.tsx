"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Crown, TrendingUp, Users } from "lucide-react"
import  TopPredictionsTable  from "@/components/top-prediction-table/TopPredictionTable"
import  HistoryTable from "@/components/history-table/HistoryTable"

export function Overview() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Predictions</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-gray-600">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.5%</div>
            <p className="text-xs text-gray-600">+2.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">VIP Subscribers</CardTitle>
            <Crown className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-gray-600">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,234</div>
            <p className="text-xs text-gray-600">+4.3% from last month</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="top-predictions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="top-predictions">Today's Top Predictions</TabsTrigger>
          <TabsTrigger value="recent-history">Recent History</TabsTrigger>
        </TabsList>
        <TabsContent value="top-predictions" className="space-y-4">
          <TopPredictionsTable />
        </TabsContent>
        <TabsContent value="recent-history" className="space-y-4">
          <HistoryTable/>
        </TabsContent>
      </Tabs>
    </div>
  )
}
