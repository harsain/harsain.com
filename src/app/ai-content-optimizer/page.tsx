import { AIContentOptimizerForm } from '@/components/ai-optimizer-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AIContentOptimizerPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">AI Content Optimizer</h1>
        <p className="text-muted-foreground md:text-xl">
          Refine your blog posts with AI-powered suggestions for headlines and tone. 
          Enter your draft below to get started.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Content Input</CardTitle>
        </CardHeader>
        <CardContent>
          <AIContentOptimizerForm />
        </CardContent>
      </Card>
    </div>
  );
}
