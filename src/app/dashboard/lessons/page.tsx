import { LessonCard } from '@/components/lessons/lesson-card';
import { lessons } from '@/lib/data';

export default function LessonsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Lessons</h1>
        <p className="text-muted-foreground">
          Browse and manage your educational content.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
