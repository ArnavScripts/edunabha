import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { recentActivities } from "@/lib/data";

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          A log of recent student achievements and actions.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src={activity.avatarUrl} alt="Avatar" data-ai-hint="student portrait" />
              <AvatarFallback>{activity.studentName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">
                <span className="font-semibold">{activity.studentName}</span> {activity.action}.
              </p>
              <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
