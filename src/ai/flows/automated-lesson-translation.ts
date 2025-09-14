'use server';

/**
 * @fileOverview This file defines a Genkit flow for automatically translating lesson content to a user's preferred language.
 *
 * - translateLesson - A function that takes lesson content and a target language, and returns the translated content.
 * - TranslateLessonInput - The input type for the translateLesson function, including the lesson content and target language.
 * - TranslateLessonOutput - The return type for the translateLesson function, which is the translated lesson content.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateLessonInputSchema = z.object({
  content: z.string().describe('The lesson content to be translated.'),
  targetLanguage: z
    .enum(['Punjabi', 'Hindi', 'English'])
    .describe('The language to translate the content to.'),
});
export type TranslateLessonInput = z.infer<typeof TranslateLessonInputSchema>;

const TranslateLessonOutputSchema = z.object({
  translatedContent: z.string().describe('The translated lesson content.'),
});
export type TranslateLessonOutput = z.infer<typeof TranslateLessonOutputSchema>;

export async function translateLesson(input: TranslateLessonInput): Promise<TranslateLessonOutput> {
  return translateLessonFlow(input);
}

const translateLessonPrompt = ai.definePrompt({
  name: 'translateLessonPrompt',
  input: {schema: TranslateLessonInputSchema},
  output: {schema: TranslateLessonOutputSchema},
  prompt: `Translate the following lesson content to {{targetLanguage}}:\n\n{{content}}`,
});

const translateLessonFlow = ai.defineFlow(
  {
    name: 'translateLessonFlow',
    inputSchema: TranslateLessonInputSchema,
    outputSchema: TranslateLessonOutputSchema,
  },
  async input => {
    const {output} = await translateLessonPrompt(input);
    return output!;
  }
);
