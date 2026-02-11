
'use server';

import { generateBlogSuggestions } from '@/ai/flows/generate-blog-headline-suggestions';
import type { GenerateBlogSuggestionsOutput } from '@/ai/flows/generate-blog-headline-suggestions';
import { z } from 'zod';

// --- AI Content Optimizer Action ---

const aiFormSchema = z.object({
  blogPostDraft: z.string().min(50, 'Blog post draft must be at least 50 characters.'),
  currentHeadline: z.string().optional(),
});

export type AIFormState = {
  success: boolean;
  data?: GenerateBlogSuggestionsOutput;
  error?: string;
  fieldErrors?: {
    blogPostDraft?: string[];
    currentHeadline?: string[];
  }
};

export async function handleGenerateSuggestions(
  prevState: AIFormState,
  formData: FormData
): Promise<AIFormState> {
  const validatedFields = aiFormSchema.safeParse({
    blogPostDraft: formData.get('blogPostDraft'),
    currentHeadline: formData.get('currentHeadline'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid input provided.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateBlogSuggestions(validatedFields.data);
    return { success: true, data: result };
  } catch (e) {
    console.error(e);
    return { success: false, error: 'Failed to generate suggestions. Please try again.' };
  }
}


// --- Contact Form Action ---

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  success: boolean;
  message: string;
   fieldErrors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  }
};


export async function handleContactSubmit(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid data provided.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  // In a real app, you would integrate an email sending service here.
  console.log('Contact Form Submitted:');
  console.log(validatedFields.data);

  return { success: true, message: "Thank you for your message! I'll get back to you soon." };
}
