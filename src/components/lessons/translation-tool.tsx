'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { translateLessonAction } from '@/app/actions/translate';
import { Languages, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

interface TranslationToolProps {
  initialContent: string;
}

type Language = 'English' | 'Hindi' | 'Punjabi';

export function TranslationTool({ initialContent }: TranslationToolProps) {
  const [targetLanguage, setTargetLanguage] = useState<Language>('English');
  const [translatedContent, setTranslatedContent] = useState(initialContent);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleTranslate = () => {
    startTransition(async () => {
      if (targetLanguage === 'English') {
        setTranslatedContent(initialContent);
        return;
      }
      
      const result = await translateLessonAction({
        content: initialContent,
        targetLanguage,
      });

      if (result.error) {
        toast({
          variant: "destructive",
          title: "Translation Failed",
          description: result.error,
        });
      } else if (result.translatedContent) {
        setTranslatedContent(result.translatedContent);
      }
    });
  };

  return (
    <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center rounded-lg border bg-card text-card-foreground p-4">
            <div className="flex items-center gap-2 text-sm font-medium">
                <Languages className="h-5 w-5 text-primary" />
                <span>Translate Lesson</span>
            </div>
            <div className="flex-grow flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Select
                    value={targetLanguage}
                    onValueChange={(value: Language) => setTargetLanguage(value)}
                >
                    <SelectTrigger className="w-full sm:w-[180px] bg-background">
                    <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Punjabi">Punjabi</SelectItem>
                    </SelectContent>
                </Select>
                <Button onClick={handleTranslate} disabled={isPending} className="w-full sm:w-auto">
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Translating...
                        </>
                    ) : 'Translate'}
                </Button>
            </div>
        </div>

        <div>
            {isPending ? (
                <div className="space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
                </div>
            ) : (
                <p className="whitespace-pre-wrap">{translatedContent}</p>
            )}
        </div>
    </div>
  );
}
