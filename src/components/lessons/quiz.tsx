'use client';

import { useState } from 'react';
import type { Quiz as QuizType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { CheckCircle, HelpCircle, XCircle } from 'lucide-react';

interface QuizProps {
  quiz: QuizType;
}

export function Quiz({ quiz }: QuizProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setAnswers({
      ...answers,
      [questionIndex]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let currentScore = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setScore(0);
    setSubmitted(false);
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <HelpCircle className="h-6 w-6" />
          <div>
            <CardTitle>Check Your Knowledge</CardTitle>
            <CardDescription>
              Answer the questions below to test your understanding.
            </CardDescription>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-8">
            {quiz.questions.map((q, index) => (
              <div key={index}>
                <p className="font-medium mb-4">{index + 1}. {q.question}</p>
                <RadioGroup
                  onValueChange={(value) => handleAnswerChange(index, value)}
                  value={answers[index]}
                  className="space-y-2"
                >
                  {q.options.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`q${index}-${option}`} />
                      <Label htmlFor={`q${index}-${option}`} className="font-normal">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button type="submit">Submit Quiz</Button>
          </CardFooter>
        </form>
      </Card>
      <AlertDialog open={submitted} onOpenChange={setSubmitted}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Quiz Results</AlertDialogTitle>
            <AlertDialogDescription>
              You scored {score} out of {quiz.questions.length}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4 py-4">
            {quiz.questions.map((q, index) => (
              <div key={index} className="p-3 rounded-md bg-muted/50">
                <p className="font-medium text-sm">{q.question}</p>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  {answers[index] === q.correctAnswer ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
                  <span>Your answer: {answers[index] || "Not answered"}</span>
                </div>
                {answers[index] !== q.correctAnswer && (
                     <div className="flex items-center gap-2 mt-1 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4"/>
                        <span>Correct answer: {q.correctAnswer}</span>
                    </div>
                )}
              </div>
            ))}
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={resetQuiz}>Try Again</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
