

import { lessons } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TranslationTool } from '@/components/lessons/translation-tool';
import { Quiz } from '@/components/lessons/quiz';
import { Badge } from '@/components/ui/badge';
import { FileText, Video, Download, BookCopy, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShareButton } from '@/components/lessons/share-button';
import React from 'react';

export default function LessonDetailPage({ params }: { params: { id: string } }) {
  const lesson = lessons.find((l) => l.id === params.id);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <div className="flex justify-between items-start">
            <div>
                <Badge variant="secondary" className="mb-2">{lesson.subject}</Badge>
                <h1 className="text-4xl font-bold font-headline">{lesson.title}</h1>
                <p className="text-lg text-muted-foreground mt-2">{lesson.description}</p>
            </div>
             <div className="flex items-center gap-2">
                {lesson.downloadUrl && (
                    <Button asChild>
                        <Link href={lesson.downloadUrl} target="_blank" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download All
                        </Link>
                    </Button>
                )}
                 <ShareButton lesson={lesson} />
            </div>
        </div>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardContent className="p-0">
             <Image
                src={lesson.thumbnailUrl}
                alt={lesson.title}
                width={1200}
                height={675}
                className="w-full rounded-t-lg object-cover"
                data-ai-hint="lesson subject"
              />
          </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6" />
                    <div>
                        <CardTitle>Lesson Content</CardTitle>
                        <CardDescription>Read the material below to learn.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                 <TranslationTool initialContent={lesson.content} />
                </div>
            </CardContent>
        </Card>

        {lesson.chapters && lesson.chapters.length > 0 && (
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <BookCopy className="h-6 w-6" />
              <div>
                <CardTitle>Chapters</CardTitle>
                <CardDescription>
                  Download individual chapters for this lesson.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {lesson.chapters.map((chapter) => (
                  <li
                    key={chapter.id}
                    className="flex items-center justify-between rounded-md border p-4"
                  >
                    <span className="font-medium">{chapter.title}</span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={chapter.downloadUrl} target="_blank" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {lesson.videoUrl && (
             <Card>
                <CardHeader className="flex flex-row items-center gap-3">
                    <Video className="h-6 w-6" />
                    <div>
                        <CardTitle>Video Lesson</CardTitle>
                        <CardDescription>Watch the video for a visual explanation.</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video w-full rounded-lg overflow-hidden">
                       <iframe 
                        className="w-full h-full"
                        src={lesson.videoUrl}
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                       </iframe>
                    </div>
                </CardContent>
            </Card>
        )}

        <Separator />

        <Quiz quiz={lesson.quiz} />

      </div>
    </div>
  );
}
