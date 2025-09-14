'use server'

import { translateLesson, TranslateLessonInput } from "@/ai/flows/automated-lesson-translation"
import { z } from "zod";

const TranslateLessonActionInput = z.object({
    content: z.string(),
    targetLanguage: z.enum(['Punjabi', 'Hindi', 'English']),
});

export async function translateLessonAction(
  input: TranslateLessonInput
): Promise<{ translatedContent?: string; error?: string }> {
    const parsedInput = TranslateLessonActionInput.safeParse(input);

    if (!parsedInput.success) {
        return { error: 'Invalid input.' };
    }

  try {
    const result = await translateLesson(parsedInput.data);
    if(result && result.translatedContent){
        return { translatedContent: result.translatedContent };
    }
    return { error: 'Failed to get translation from the service.' };
  } catch (e) {
    console.error(e)
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { error: `Failed to translate content: ${errorMessage}` }
  }
}
