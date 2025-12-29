'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { authService } from '@/services/authServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Lock, Mail, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get('expired') === 'true') {
      toast({
        title: "Session Expired",
        description: "Please log in again to continue.",
        variant: "destructive",
      });
      router.replace('/login'); 
    }
  }, [searchParams, toast, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authService.login({ email, password });
      toast({ title: "Access Granted", description: "Welcome back, Admin." });
      router.push('/admin/subscribers');
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.response?.status === 401 ? "Invalid email or password." : "Server error.",
        variant: "destructive",
      });
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Stenar Admin</h2>
          <p className="mt-2 text-sm text-gray-600">Secure access for authorized personnel only.</p>
        </div>
        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <Input id="email" type="email" required placeholder="admin@stenar.com" className="pl-10 h-12"
                value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <Input id="password" type="password" required placeholder="••••••••" className="pl-10 h-12"
                value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
            </div>
          </div>
          <Button type="submit" className="w-full h-11 text-base bg-slate-900 hover:bg-slate-800" disabled={loading}>
            {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Authenticating...</> : "Sign In"}
          </Button>
        </form>
        <div className="text-center mt-4">
          <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}
