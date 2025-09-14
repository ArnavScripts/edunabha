import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { earnedBadges } from "@/lib/data";


export function EarnedBadges() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Your Badges</CardTitle>
            <CardDescription>
                You've earned {earnedBadges.length} badges. Keep up the great work!
            </CardDescription>
        </CardHeader>
        <CardContent>
            <TooltipProvider>
                <div className="flex flex-wrap gap-4">
                    {earnedBadges.map((badge) => (
                        <Tooltip key={badge.id}>
                            <TooltipTrigger asChild>
                                <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-accent/20 border border-dashed border-accent w-24 h-24 justify-center cursor-pointer">
                                    <badge.icon className="h-8 w-8 text-accent-foreground/80" />
                                    <span className="text-xs font-medium text-center text-accent-foreground/90">{badge.name}</span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{badge.description}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </TooltipProvider>
        </CardContent>
    </Card>
  )
}
