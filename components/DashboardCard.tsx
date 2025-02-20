import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardCardProps {
  title: string
  description: string
  href: string
}

export function DashboardCard({ title, description, href }: DashboardCardProps) {
  return (
    <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 text-left hover:bg-gray-800/70">
      <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
      <p className="mb-4 text-gray-300">{description}</p>
      <Button asChild>
        <Link href={href}>
          View Dashboard
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
} 