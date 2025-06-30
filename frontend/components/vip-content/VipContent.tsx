"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogContent} from "../ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Crown, Plus, Edit, Trash2, Eye, EyeOff, Settings, DollarSign, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"


// Sample VIP predictions data
const vipPredictions = [
  {
    id: 1,
    homeTeam: "Manchester City",
    awayTeam: "Liverpool",
    prediction: "Correct Score: 2-1",
    odds: 9.0,
    confidence: "High",
    status: "active",
    createdDate: "2024-01-15",
    analysis: "Manchester City's home form has been exceptional, winning their last 10 home games.",
    views: 234,
    isPublished: true,
  },
  {
    id: 2,
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    prediction: "Correct Score: 3-1",
    odds: 12.0,
    confidence: "Medium",
    status: "active",
    createdDate: "2024-01-15",
    analysis: "El Clasico tends to be high-scoring. Real Madrid's attacking form has been excellent.",
    views: 189,
    isPublished: true,
  },
  {
    id: 3,
    homeTeam: "Bayern Munich",
    awayTeam: "PSG",
    prediction: "BTTS & Over 3.5",
    odds: 2.75,
    confidence: "High",
    status: "draft",
    createdDate: "2024-01-15",
    analysis: "Both teams have strong attacking options and have been scoring freely.",
    views: 0,
    isPublished: false,
  },
]

// VIP stats
const vipStats = {
  totalPredictions: 47,
  activePredictions: 12,
  totalViews: 2847,
  conversionRate: 23.5,
}

const  VipContent =()=> {
  const [selectedPrediction, setSelectedPrediction] = useState<any>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false)

  const handleAddPrediction = () => {
    alert("VIP Prediction Added")
    setIsAddDialogOpen(false)
  }

  const handleEditPrediction = (prediction: any) => {
    setSelectedPrediction(prediction)
    setIsEditDialogOpen(true)
  }

  const handleSaveEdit = () => {
    alert("Prediction Updated")
    setIsEditDialogOpen(false)
  }

  const handleDeletePrediction = (predictionId: number) => {
    alert("Prediction Deleted")
  }

  const handleTogglePublish = (predictionId: number, isPublished: boolean) => {
    alert(`Prediction ${isPublished ? "Published" : "Unpublished"}`)
  }

  return (
    <div className="space-y-6">
      {/* VIP Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total VIP Predictions</CardTitle>
            <Crown className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{vipStats.totalPredictions}</div>
            <p className="text-xs text-gray-600">+3 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Predictions</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{vipStats.activePredictions}</div>
            <p className="text-xs text-gray-600">Currently live</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{vipStats.totalViews}</div>
            <p className="text-xs text-gray-600">+12% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <DollarSign className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{vipStats.conversionRate}%</div>
            <p className="text-xs text-gray-600">Views to subscriptions</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card>
       <CardHeader>
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div>
      <CardTitle className="text-lg sm:text-xl">VIP Predictions Management</CardTitle>
      <CardDescription className="text-sm sm:text-base">
        Manage premium predictions for VIP subscribers
      </CardDescription>
    </div>

    <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 w-full sm:w-auto">
      <Button
        variant="outline"
        size="sm"
        className="w-full sm:w-auto"
        onClick={() => setIsSettingsDialogOpen(true)}
      >
        <Settings className="mr-2 h-4 w-4" />
        VIP Settings
      </Button>
      <Button
        className="bg-orange-500 text-white w-full sm:w-auto"
        onClick={() => setIsAddDialogOpen(true)}
      >
        <Plus className="mr-2 h-4 w-4" />
        Add VIP Prediction
      </Button>
    </div>
  </div>
</CardHeader>

        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Predictions</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="draft">Drafts</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Match</TableHead>
                    <TableHead>Prediction</TableHead>
                    <TableHead>Odds</TableHead>
                    <TableHead>Confidence</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vipPredictions.map((prediction) => (
                    <TableRow key={prediction.id}>
                      <TableCell className="font-medium">
                        {prediction.homeTeam} vs {prediction.awayTeam}
                      </TableCell>
                      <TableCell>{prediction.prediction}</TableCell>
                      <TableCell>{prediction.odds}</TableCell>
                      <TableCell>
                        <Badge variant={prediction.confidence === "High" ? "default" : "outline"}>
                          {prediction.confidence}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            prediction.status === "active"
                              ? "default"
                              : prediction.status === "draft"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {prediction.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{prediction.views}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleTogglePublish(prediction.id, !prediction.isPublished)}
                        >
                          {prediction.isPublished ? (
                            <Eye className="h-4 w-4 text-green-600" />
                          ) : (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleEditPrediction(prediction)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="destructive" size="sm" onClick={() => handleDeletePrediction(prediction.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="active">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Match</TableHead>
                    <TableHead>Prediction</TableHead>
                    <TableHead>Odds</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vipPredictions
                    .filter((p) => p.status === "active")
                    .map((prediction) => (
                      <TableRow key={prediction.id}>
                        <TableCell className="font-medium">
                          {prediction.homeTeam} vs {prediction.awayTeam}
                        </TableCell>
                        <TableCell>{prediction.prediction}</TableCell>
                        <TableCell>{prediction.odds}</TableCell>
                        <TableCell>{prediction.views}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" onClick={() => handleEditPrediction(prediction)}>
                            Manage
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="draft">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Match</TableHead>
                    <TableHead>Prediction</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vipPredictions
                    .filter((p) => p.status === "draft")
                    .map((prediction) => (
                      <TableRow key={prediction.id}>
                        <TableCell className="font-medium">
                          {prediction.homeTeam} vs {prediction.awayTeam}
                        </TableCell>
                        <TableCell>{prediction.prediction}</TableCell>
                        <TableCell>{prediction.createdDate}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => handleEditPrediction(prediction)}>
                              Edit
                            </Button>
                            <Button size="sm" onClick={() => handleTogglePublish(prediction.id, true)}>
                              Publish
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="completed">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Match</TableHead>
                    <TableHead>Prediction</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vipPredictions
                    .filter((p) => p.status === "completed")
                    .map((prediction) => (
                      <TableRow key={prediction.id}>
                        <TableCell className="font-medium">
                          {prediction.homeTeam} vs {prediction.awayTeam}
                        </TableCell>
                        <TableCell>{prediction.prediction}</TableCell>
                        <TableCell>{prediction.views}</TableCell>
                        <TableCell>{prediction.createdDate}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" onClick={() => handleEditPrediction(prediction)}>
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Add new prediction dialog*/}
<Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>Add New VIP Prediction</DialogTitle>
                <DialogDescription>Create a premium prediction for VIP subscribers</DialogDescription>
        </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Home Team</label>
                        <Input placeholder="Manchester City" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Away Team</label>
                        <Input placeholder="Liverpool" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Prediction</label>
                        <Input placeholder="Correct Score: 2-1" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Odds</label>
                        <Input placeholder="9.0" type="number" step="0.1" />
                    </div>
                </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Confidence Level</label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select confidence" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Detailed Analysis</label>
                <Textarea placeholder="Provide detailed analysis for VIP subscribers..." className="min-h-[100px]" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch />
              <label className="text-sm font-medium">Publish immediately</label>
            </div>
          </div>
    <DialogFooter>
        <Button className="bg-orange-500" onClick={handleAddPrediction}>Create VIP Prediction</Button>
    </DialogFooter>
    </DialogContent>
</Dialog>

      {/* Settings Modal */}
      <Dialog open={isSettingsDialogOpen} onOpenChange={setIsSettingsDialogOpen}>
        <DialogContent>
        <DialogHeader>
          <DialogTitle>VIP Section Settings</DialogTitle>
          <DialogDescription>Configure VIP subscription settings and pricing</DialogDescription>
        </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right text-sm font-medium">Daily Price</label>
              <Input defaultValue="$4.99" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right text-sm font-medium">Weekly Price</label>
              <Input defaultValue="$19.99" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right text-sm font-medium">Monthly Price</label>
              <Input defaultValue="$49.99" className="col-span-3" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch />
              <label className="text-sm font-medium">Auto-publish new predictions</label>
            </div>
          </div>
            <DialogFooter>
                <Button onClick={() => setIsSettingsDialogOpen(false)}>Save Settings</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default VipContent