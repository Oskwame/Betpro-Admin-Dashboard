"use client"
import { useState } from "react"
import { Check, ChevronsUpDown, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const topLeagues = [
  { label: "Premier League", value: "premier-league" },
  { label: "La Liga", value: "la-liga" },
  { label: "Serie A", value: "serie-a" },
  { label: "Bundesliga", value: "bundesliga" },
  { label: "Ligue 1", value: "ligue-1" },
]

const teams = {
  "premier-league": ["Arsenal",
                    "Aston Villa",
                    "Bournemouth",
                    "Brentford",
                    "Brighton",
                    "Chelsea",
                    "Crystal Palace",
                    "Everton",
                    "Fulham",
                    "Ipswich Town",
                    "Leicester City",
                    "Liverpool",
                    "Luton Town",
                    "Manchester City",
                    "Manchester United",
                    "Newcastle United",
                    "Nottingham Forest",
                    "Southampton",
                    "Tottenham Hotspur",
                    "West Ham United",
                    "Wolverhampton Wanderers"
                ],
  "la-liga":["Alaves",
            "Almeria",
            "Athletic Bilbao",
            "Atletico Madrid",
            "Barcelona",
            "Cadiz",
            "Celta Vigo",
            "Getafe",
            "Girona",
            "Granada",
            "Las Palmas",
            "Mallorca",
            "Osasuna",
            "Rayo Vallecano",
            "Real Betis",
            "Real Madrid",
            "Real Sociedad",
            "Sevilla",
            "Valencia",
            "Villarreal"
],

 "serie-a":["Atalanta",
            "Bologna",
            "Cagliari",
            "Como",
            "Empoli",
            "Fiorentina",
            "Genoa",
            "Hellas Verona",
            "Inter Milan",
            "Juventus",
            "Lazio",
            "Lecce",
            "AC Milan",
            "Monza",
            "Napoli",
            "Parma",
            "Roma",
            "Torino",
            "Udinese",
            "Venezia"
],

  "bundesliga":["Augsburg",
                "Bayer Leverkusen",
                "Bayern Munich",
                "Bochum",
                "Borussia Dortmund",
                "Borussia Monchengladbach",
                "Darmstadt",
                "Eintracht Frankfurt",
                "Freiburg",
                "Heidenheim",
                "Hoffenheim",
                "Mainz",
                "RB Leipzig",
                "Stuttgart",
                "Union Berlin",
                "Werder Bremen",
                "Fortuna Dusseldorf",
                "St. Pauli"
],

  "ligue-1":["PSG",
            "Marseille",
            "Lyon",
            "Monaco",
            "Lille",
            "Rennes",
            "Nice",
            "Montpellier",
            "Strasbourg",
            "Toulouse",
            "Reims",
            "Brest",
            "Nantes",
            "Metz",
            "Le Havre",
            "Lorient",
            "Auxerre",
            "Angers",
            "Clermont"
  ],
}

const predictionTypes = [
  "Match Result (1X2)",
  "Both Teams to Score",
  "Over/Under Goals",
  "Correct Score",
  "First Goal Scorer"
]

const confidenceLevels = [
  "Low (1-3)",
  "Medium (4-6)", 
  "High (7-8)",
  "Very High (9-10)"
]

type FormData = {
  isTopLeague: boolean
  league: string
  homeTeam: string
  awayTeam: string
  date: string
  time: string
  predictionType: string
  prediction: string
  odds: string
  confidence: string
  analysis: string
  isVip: boolean
}

type FormErrors = Partial<Record<keyof FormData, string>>

const AddPredictionForm = () => {
  const [formData, setFormData] = useState<FormData>({
    isTopLeague: true,
    league: "",
    homeTeam: "",
    awayTeam: "",
    date: "",
    time: "",
    predictionType: "",
    prediction: "",
    odds: "",
    confidence: "",
    analysis: "",
    isVip: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [homeTeamOpen, setHomeTeamOpen] = useState(false)
  const [awayTeamOpen, setAwayTeamOpen] = useState(false)

  const validateForm = () => {
  const newErrors: FormErrors = {}

  if (!formData.league) newErrors.league = "League is required"
  if (!formData.homeTeam) newErrors.homeTeam = "Home team is required"
  if (!formData.awayTeam) newErrors.awayTeam = "Away team is required"
  if (formData.homeTeam === formData.awayTeam) newErrors.awayTeam = "Home and away teams must be different"
  if (!formData.date) newErrors.date = "Date is required"
  if (!formData.time) newErrors.time = "Time is required"
  if (formData.time && !/^([01]\d|2[0-3]):([0-5]\d)$/.test(formData.time)) {
    newErrors.time = "Time must be in HH:mm format"
  }
  if (!formData.predictionType) newErrors.predictionType = "Prediction type is required"
  if (!formData.prediction) newErrors.prediction = "Prediction is required"
  if (!formData.odds) newErrors.odds = "Odds is required"
  if (formData.odds && (isNaN(Number(formData.odds)) || Number(formData.odds) <= 0)) {
    newErrors.odds = "Enter a valid odds value"
  }
  if (!formData.confidence) newErrors.confidence = "Confidence level is required"

  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}


  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted:", formData)
      alert("Prediction added successfully!")
      
      // Reset form
      setFormData({
        isTopLeague: true,
        league: "",
        homeTeam: "",
        awayTeam: "",
        date: "",
        time: "",
        predictionType: "",
        prediction: "",
        odds: "",
        confidence: "",
        analysis: "",
        isVip: false,
      })
      setErrors({})
    }
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
  setFormData(prev => ({
    ...prev,
    [field]: value
  }))

  if (errors[field]) {
    setErrors(prev => ({
      ...prev,
      [field]: ""
    }))
  }
}

  const handleLeagueChange = (value: string) => {
    handleInputChange("league", value)
    // Reset team selections when league changes
    handleInputChange("homeTeam", "")
    handleInputChange("awayTeam", "")
  }

  const getAvailableTeams = () => {
    return formData.isTopLeague && formData.league ? teams[formData.league as keyof typeof teams] || [] : []
  }

  const cn = (...classes :(string | false | null | undefined)[]): string => classes.filter(Boolean).join(' ')

  return (

      <Card>
        <CardHeader>
          <CardTitle>Add New Prediction</CardTitle>
          <CardDescription>Submit your football prediction</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Top League Toggle */}
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <Label>Top League?</Label>
                <p className="text-sm text-muted-foreground">Enable if predicting from a top league</p>
              </div>
              <Switch
                checked={formData.isTopLeague}
                onCheckedChange={(checked) => {
                  handleInputChange("isTopLeague", checked)
                  if (!checked) {
                    handleInputChange("league", "")
                    handleInputChange("homeTeam", "")
                    handleInputChange("awayTeam", "")
                  }
                }}
              />
            </div>

            {/* League */}
            <div className="space-y-2">
              <Label>League</Label>
              {formData.isTopLeague ? (
                <Select value={formData.league} onValueChange={handleLeagueChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a league" />
                  </SelectTrigger>
                  <SelectContent>
                    {topLeagues.map((league) => (
                      <SelectItem key={league.value} value={league.value}>
                        {league.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  placeholder="Enter league name"
                  value={formData.league}
                  onChange={(e) => handleInputChange("league", e.target.value)}
                />
              )}
              {errors.league && <p className="text-sm text-destructive">{errors.league}</p>}
            </div>

            {/* Home Team */}
            <div className="space-y-2">
              <Label>Home Team</Label>
              {formData.isTopLeague ? (
                <Popover open={homeTeamOpen} onOpenChange={setHomeTeamOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={homeTeamOpen}
                      className={cn("w-full justify-between", !formData.homeTeam && "text-muted-foreground")}
                      disabled={!formData.league}
                    >
                      {formData.homeTeam || "Select team"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search team..." />
                      <CommandList>
                        <CommandEmpty>No team found.</CommandEmpty>
                        <CommandGroup>
                          {getAvailableTeams().map((team: string) => (
                            <CommandItem
                              key={team}
                              value={team}
                              onSelect={() => {
                                handleInputChange("homeTeam", team)
                                setHomeTeamOpen(false)
                              }}
                            >
                              <Check
                                className={cn("mr-2 h-4 w-4", team === formData.homeTeam ? "opacity-100" : "opacity-0")}
                              />
                              {team}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              ) : (
                <Input
                  placeholder="Enter home team"
                  value={formData.homeTeam}
                  onChange={(e) => handleInputChange("homeTeam", e.target.value)}
                />
              )}
              {errors.homeTeam && <p className="text-sm text-destructive">{errors.homeTeam}</p>}
            </div>

            {/* Away Team */}
            <div className="space-y-2">
              <Label>Away Team</Label>
              {formData.isTopLeague ? (
                <Popover open={awayTeamOpen} onOpenChange={setAwayTeamOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={awayTeamOpen}
                      className={cn("w-full justify-between", !formData.awayTeam && "text-muted-foreground")}
                      disabled={!formData.league}
                    >
                      {formData.awayTeam || "Select team"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search team..." />
                      <CommandList>
                        <CommandEmpty>No team found.</CommandEmpty>
                        <CommandGroup>
                          {getAvailableTeams().map((team) => (
                            <CommandItem
                              key={team}
                              value={team}
                              onSelect={() => {
                                handleInputChange("awayTeam", team)
                                setAwayTeamOpen(false)
                              }}
                            >
                              <Check
                                className={cn("mr-2 h-4 w-4", team === formData.awayTeam ? "opacity-100" : "opacity-0")}
                              />
                              {team}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              ) : (
                <Input
                  placeholder="Enter away team"
                  value={formData.awayTeam}
                  onChange={(e) => handleInputChange("awayTeam", e.target.value)}
                />
              )}
              {errors.awayTeam && <p className="text-sm text-destructive">{errors.awayTeam}</p>}
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date</Label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                />
                {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
              </div>
              <div className="space-y-2">
                <Label>Time</Label>
                <Input
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                />
                {errors.time && <p className="text-sm text-destructive">{errors.time}</p>}
              </div>
            </div>

            {/* Prediction Type */}
            <div className="space-y-2">
              <Label>Prediction Type</Label>
              <Select value={formData.predictionType} onValueChange={(value) => handleInputChange("predictionType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select prediction type" />
                </SelectTrigger>
                <SelectContent>
                  {predictionTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.predictionType && <p className="text-sm text-destructive">{errors.predictionType}</p>}
            </div>

            {/* Prediction */}
            <div className="space-y-2">
              <Label>Prediction</Label>
              <Input
                placeholder="Enter your prediction"
                value={formData.prediction}
                onChange={(e) => handleInputChange("prediction", e.target.value)}
              />
              {errors.prediction && <p className="text-sm text-destructive">{errors.prediction}</p>}
            </div>

            {/* Odds */}
            <div className="space-y-2">
              <Label>Odds</Label>
              <Input
                type="number"
                step="0.01"
                placeholder="Enter odds (e.g., 2.50)"
                value={formData.odds}
                onChange={(e) => handleInputChange("odds", e.target.value)}
              />
              {errors.odds && <p className="text-sm text-destructive">{errors.odds}</p>}
            </div>

            {/* Confidence */}
            <div className="space-y-2">
              <Label>Confidence Level</Label>
              <Select value={formData.confidence} onValueChange={(value) => handleInputChange("confidence", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select confidence level" />
                </SelectTrigger>
                <SelectContent>
                  {confidenceLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.confidence && <p className="text-sm text-destructive">{errors.confidence}</p>}
            </div>

            {/* Analysis */}
            <div className="space-y-2">
              <Label>Analysis (Optional)</Label>
              <Textarea
                placeholder="Enter your analysis and reasoning..."
                value={formData.analysis}
                onChange={(e) => handleInputChange("analysis", e.target.value)}
              />
            </div>

            {/* VIP Toggle */}
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <Label>VIP Prediction</Label>
                <p className="text-sm text-muted-foreground">Mark as premium prediction</p>
              </div>
              <Switch className="bg-orange-300"
                checked={formData.isVip}
                onCheckedChange={(checked) => handleInputChange("isVip", checked)}
              />
            </div>

            <Button onClick={handleSubmit} className=" items-center justify-center bg-orange-500 ">
              Submit Prediction
            </Button>
          </div>
        </CardContent>
      </Card>

  )
}

export default AddPredictionForm