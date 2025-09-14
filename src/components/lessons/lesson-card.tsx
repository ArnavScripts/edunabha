import Link from "next/link";
import Image from "next/image";
import type { Lesson } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Link href={`/dashboard/lessons/${lesson.id}`}>
      <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <CardHeader className="p-0">
            <Image
              src={lesson.thumbnailUrl}
              alt={lesson.title}
              width={600}
              height={400}
              className="rounded-t-lg object-cover aspect-video"
              data-ai-hint="lesson subject"
            />
        </CardHeader>
        <CardContent className="p-4 flex-grow">
            <Badge variant="outline" className="mb-2">{lesson.subject}</Badge>
            <CardTitle className="text-lg font-headline mb-1">{lesson.title}</CardTitle>
            <CardDescription className="text-sm">{lesson.description}</CardDescription>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="w-full">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-muted-foreground">Progress</span>
              <span className="text-xs font-semibold">{lesson.completion}%</span>
            </div>
            <Progress value={lesson.completion} aria-label={`${lesson.completion}% complete`} />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
