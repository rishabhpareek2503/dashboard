import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Activity, Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Company Dashboards",
  description: "Select STP or ETP dashboard",
}

function DashboardCard({ 
  title, 
  description, 
  href, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  href: string; 
  icon: any 
}) {
  return (
    <Link 
      href={href}
      className="group relative overflow-hidden rounded-2xl bg-white/10 p-8 transition-all hover:bg-white/15 hover:shadow-2xl hover:shadow-white/10"
    >
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-gray-300">{description}</p>
        <div className="flex items-center text-white">
          <span className="mr-2">Access Dashboard</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-all group-hover:bg-white/10" />
    </Link>
  )
}

export default function Home() {
  const etpUrl = "https://etp-dash-28en-pi.vercel.app"
  const stpUrl = process.env.NEXT_PUBLIC_STP_URL || '/stp'

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Logo in upper left */}
      <div className="absolute top-6 left-6">
        <Link href="/">
          <Image
            src="\logo.png"
            alt="Company Logo"
            width={200}
            height={200}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      {/* Main content */}
      <main className="relative flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="max-w-5xl">
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            STP-ETP Calculation{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Dashboards
            </span>
          </h1>
          <p className="mb-12 text-xl text-gray-400">
            Advanced calculation tools for Sewage and Effluent Treatment Plant operations
          </p>
          
          <div className="grid gap-8 md:grid-cols-2">
            <DashboardCard
              title="STP Dashboard"
              description=" Sewage Treatment Plant calculations and monitoring tools"
              href={stpUrl}
              icon={Droplet}
            />
            <DashboardCard
              title="ETP Dashboard"
              description="Advanced Effluent Treatment Plant calculation and analysis system"
              href={etpUrl}
              icon={Activity}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Hitesh Enviro Engineering Pvt Ltd. All rights reserved.
      </footer>
    </div>
  )
}