import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, BookOpen, CheckCircle, Target } from "lucide-react";
import { students, lessons } from "@/lib/data";

export function OverviewStats() {
    const totalStudents = students.length;
    const totalLessons = lessons.length;
    const totalCompletion = lessons.reduce((acc, lesson) => acc + lesson.completion, 0);
    const avgCompletion = totalLessons > 0 ? Math.round(totalCompletion / totalLessons) : 0;
    const totalQuizzes = lessons.filter(l => l.quiz).length;
    
    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{totalStudents}</div>
                    <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Lessons Available</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{totalLessons}</div>
                    <p className="text-xs text-muted-foreground">in 3 subjects</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Completion</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{avgCompletion}%</div>
                    <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Quizzes</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{totalQuizzes}</div>
                    <p className="text-xs text-muted-foreground">across all lessons</p>
                </CardContent>
            </Card>
        </>
    );
}
