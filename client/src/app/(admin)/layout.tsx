'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authService } from '@/services/authServices';
import { Button } from '@/components/ui/button';
import { Users, LayoutDashboard, LogOut, FileText } from 'lucide-react'; // Make sure to install lucide-react

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Simple Protection Check
  useEffect(() => {
    if (!authService.isAuthenticated()) {
      router.push('/login');
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) return null; // Or a loading spinner

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold">Stenar Admin</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg transition">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          
          <Link href="/admin/subscribers" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg transition">
            <Users size={20} /> Subscribers
          </Link>

          <Link href="/admin/inquiries" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg transition">
  <span className="text-xl">📩</span> Inquiries
</Link>

          {/* Scalable: Add Blog later */}
          <div className="text-gray-500 text-xs uppercase mt-6 mb-2 px-4">Content</div>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 cursor-not-allowed">
            <FileText size={20} /> Blogs (Soon)
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Button 
            variant="destructive" 
            className="w-full flex gap-2" 
            onClick={() => authService.logout()}
          >
            <LogOut size={16} /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 flex-1 p-8">
        {children}
      </main>
    </div>
  );
}