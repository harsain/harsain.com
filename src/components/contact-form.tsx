'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { handleContactSubmit, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { success: false, message: '' };
  const [state, formAction] = useFormState(handleContactSubmit, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      // Consider resetting the form fields here if needed
    } else if (state.message && !state.success) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Input
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          aria-describedby="name-error"
        />
        {state.fieldErrors?.name && (
          <p id="name-error" className="text-sm text-destructive">{state.fieldErrors.name}</p>
        )}
      </div>
      <div className="space-y-2">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          aria-describedby="email-error"
        />
        {state.fieldErrors?.email && (
           <p id="email-error" className="text-sm text-destructive">{state.fieldErrors.email}</p>
        )}
      </div>
      <div className="space-y-2">
        <Textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          className="min-h-[100px]"
          required
          aria-describedby="message-error"
        />
        {state.fieldErrors?.message && (
          <p id="message-error" className="text-sm text-destructive">{state.fieldErrors.message}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
