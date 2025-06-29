"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  CheckCircle,
  Crown,
  History,
  Home,
  LogOut,
  Menu,
  Plus,
  Settings,
  Trophy,
  Users,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Overview", href: "/", icon: Home },
    { name: "Top Predictions", href: "/top-predictions", icon: BarChart3 },
    { name: "History", href: "/history", icon: History },
    { name: "Correct Scores", href: "/correct-scores", icon: CheckCircle },
    { name: "League Predictions", href: "/top-league-predictions", icon: Trophy },
    { name: "VIP Section", href: "/vip", icon: Crown },
    { name: "Subscriptions", href: "/subscriptions", icon: Users },
  ]

  const management = [
    { name: "Add Prediction", href: "/add-prediction", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-orange-500" />
            <span className="font-bold text-xl text-gray-900">BetPro Admin</span>
          </div>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8">
          <div className="px-4">
            <h3 className="text-xl font-semibold text-gray-500 uppercase tracking-wider">Dashboard</h3>
            <div className="mt-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-lg font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="mt-8 px-4">
            <h3 className="text-xl font-semibold text-gray-500 uppercase tracking-wider">Management</h3>
            <div className="mt-2 space-y-1">
              {management.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-lg font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-orange-100 text-orange-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        isActive
                          ? "text-orange-500"
                          : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-sm font-medium text-white">AD</span>
              </div>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-700">Admin User</p>
              <p className="text-xs text-gray-500">admin@betpro.com</p>
            </div>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4">
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-4 ml-auto">
              {/* Top right actions */}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout

