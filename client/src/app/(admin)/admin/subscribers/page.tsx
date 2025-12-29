'use client';

import { useState } from 'react';
import { subscriberService, Subscriber } from '@/services/subscriberService';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState<any>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchSubscribers = async (page = 1) => {
    setLoading(true);
    try { 
      const response = await subscriberService.getAll(page);
      setSubscribers(response.data);
      setMeta(response.meta);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Failed to fetch subscribers', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Subscribers
          </h1>
          {lastUpdated && (
            <p className="text-sm text-gray-500 mt-1">
              Last refreshed: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white px-4 py-2 rounded-lg shadow text-sm">
            Total: <strong>{meta?.total || 0}</strong>
          </div>

          <Button
            onClick={() => fetchSubscribers(1)}
            disabled={loading}
          >
            {loading ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">ID</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date Joined</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
                  Loading subscribers...
                </TableCell>
              </TableRow>
            ) : subscribers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
                  Click <strong>Refresh</strong> to load subscribers.
                </TableCell>
              </TableRow>
            ) : (
              subscribers.map((sub) => (
                <TableRow key={sub.id}>
                  <TableCell className="font-medium">#{sub.id}</TableCell>
                  <TableCell>{sub.email}</TableCell>
                  <TableCell>{sub.human_date || sub.created_at}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {meta && subscribers.length > 0 && (
          <div className="p-4 flex justify-end gap-2 border-t">
            <Button
              variant="outline"
              disabled={loading || meta.current_page === 1}
              onClick={() => fetchSubscribers(meta.current_page - 1)}
            >
              Previous
            </Button>

            <Button
              variant="outline"
              disabled={loading || meta.current_page === meta.last_page}
              onClick={() => fetchSubscribers(meta.current_page + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
