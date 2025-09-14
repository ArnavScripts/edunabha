
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SettingsPage() {
  return (
    <div className="grid gap-6 max-w-2xl mx-auto">
        <div className="mb-2">
            <h1 className="text-3xl font-bold font-headline">Settings</h1>
            <p className="text-muted-foreground">
                Manage your account and notification preferences.
            </p>
        </div>
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            Update your personal information.
          </CardDescription>
        </CardHeader>
        <CardContent as="form" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Teacher" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="teacher@nabhalearn.com" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Choose how you want to be notified.
          </CardDescription>
        </CardHeader>
        <CardContent as="fieldset" className="space-y-4">
            <div className="flex items-center space-x-2">
                <Checkbox id="lesson-completed" defaultChecked />
                <Label htmlFor="lesson-completed" className="text-sm font-normal">
                    When a student completes a lesson
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="quiz-submitted" defaultChecked />
                <Label htmlFor="quiz-submitted" className="text-sm font-normal">
                    When a student submits a quiz
                </Label>
            </div>
             <div className="flex items-center space-x-2">
                <Checkbox id="weekly-summary" />
                <Label htmlFor="weekly-summary" className="text-sm font-normal">
                    Weekly progress summary email
                </Label>
            </div>
        </CardContent>
        <CardFooter>
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
