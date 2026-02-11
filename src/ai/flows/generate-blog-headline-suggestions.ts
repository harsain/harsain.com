'use server';

/**
 * @fileOverview A flow to generate blog headline suggestions and tone adjustments.
 *
 * - generateBlogSuggestions - A function that handles the blog suggestion process.
 * - GenerateBlogSuggestionsInput - The input type for the generateBlogSuggestions function.
 * - GenerateBlogSuggestionsOutput - The return type for the generateBlogSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogSuggestionsInputSchema = z.object({
  blogPostDraft: z
    .string()
    .describe('The draft of the blog post to generate suggestions for.'),
  currentHeadline: z.string().optional().describe('The current headline of the blog post.'),
});
export type GenerateBlogSuggestionsInput = z.infer<typeof GenerateBlogSuggestionsInputSchema>;

const GenerateBlogSuggestionsOutputSchema = z.object({
  suggestedHeadlines: z
    .array(z.string())
    .describe('An array of suggested headlines for the blog post.'),
  toneAdjustmentSuggestions: z
    .string()
    .describe('Suggestions for adjusting the tone of the blog post.'),
});
export type GenerateBlogSuggestionsOutput = z.infer<typeof GenerateBlogSuggestionsOutputSchema>;

export async function generateBlogSuggestions(
  input: GenerateBlogSuggestionsInput
): Promise<GenerateBlogSuggestionsOutput> {
  return generateBlogSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogSuggestionsPrompt',
  input: {schema: GenerateBlogSuggestionsInputSchema},
  output: {schema: GenerateBlogSuggestionsOutputSchema},
  prompt: `You are an expert blog post optimizer, skilled in crafting engaging headlines and adjusting content tone to maximize reader interest.

  Given the following blog post draft and current headline (if available), generate three alternative headlines and provide suggestions for adjusting the tone of the blog post to increase reader engagement.

  Blog Post Draft:
  {{blogPostDraft}}

  Current Headline (if available):
  {{#if currentHeadline}}
    {{currentHeadline}}
  {{else}}
    N/A
  {{/if}}

  Provide your output in the following format:
  {
    "suggestedHeadlines": ["headline 1", "headline 2", "headline 3"],
    "toneAdjustmentSuggestions": "Suggestions for adjusting the tone of the blog post."
  }`,
});

const generateBlogSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateBlogSuggestionsFlow',
    inputSchema: GenerateBlogSuggestionsInputSchema,
    outputSchema: GenerateBlogSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
