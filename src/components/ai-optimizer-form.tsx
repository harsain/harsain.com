'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleGenerateSuggestions, type AIFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, VenetianMask, ThumbsUp } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full sm:w-auto" size="lg" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Suggestions
        </>
      )}
    </Button>
  );
}

export function AIContentOptimizerForm() {
  const initialState: AIFormState = { success: false };
  const [state, formAction] = useFormState(handleGenerateSuggestions, initialState);

  return (
    <div>
      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="currentHeadline" className="text-base">
            Current Headline (Optional)
          </Label>
          <Input
            id="currentHeadline"
            name="currentHeadline"
            placeholder="e.g., An Introduction to Product-Led Growth"
            aria-describedby="headline-error"
          />
           {state.fieldErrors?.currentHeadline && (
            <p id="headline-error" className="text-sm text-destructive">{state.fieldErrors.currentHeadline}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="blogPostDraft" className="text-base">
            Blog Post Draft
          </Label>
          <Textarea
            id="blogPostDraft"
            name="blogPostDraft"
            placeholder="Paste your blog post content here..."
            className="min-h-[200px] text-base"
            required
            aria-describedby="draft-error"
          />
          {state.fieldErrors?.blogPostDraft && (
            <p id="draft-error" className="text-sm text-destructive">{state.fieldErrors.blogPostDraft}</p>
          )}
        </div>
        <div className='flex justify-center'>
            <SubmitButton />
        </div>
        {state.error && !state.success && (
            <p className="text-sm text-destructive text-center">{state.error}</p>
        )}
      </form>

      {state.success && state.data && (
        <div className="mt-12 space-y-8">
          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                <ThumbsUp className="h-6 w-6 text-primary" />
                Suggested Headlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-lg">
                {state.data.suggestedHeadlines.map((headline, index) => (
                  <li key={index}>{headline}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                <VenetianMask className="h-6 w-6 text-primary" />
                Tone Adjustment Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                {state.data.toneAdjustmentSuggestions}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
