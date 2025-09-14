'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-8">
          <div className="grid gap-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold font-headline">NabhaLearn</h1>
            </div>
            <p className="text-balance text-muted-foreground">
              Empowering rural students with digital education
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your Student ID and Class to access your lessons.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="student-id">Student ID</Label>
                  <Input id="student-id" placeholder="e.g., 12345" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="class">Class</Label>
                  <Input id="class" placeholder="e.g., 10th" required />
                </div>
                <Button type="submit" className="w-full mt-2">
                  <LogIn className="mr-2 h-4 w-4" />
                  Access Lessons
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://picsum.photos/seed/nabhalearn/1200/900"
          alt="Students learning"
          data-ai-hint="students learning"
          width="1200"
          height="900"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
