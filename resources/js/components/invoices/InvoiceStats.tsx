import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Clock,
  Eye
} from "lucide-react";

export default function InvoiceStats({ invoices = [] }) {
  // Calculate stats from invoices
  const calculateStats = () => {
    const total = invoices.length;
    const sent = invoices.filter(inv => inv.status === 'sent').length;
    const paid = invoices.filter(inv => inv.status === 'paid').length;
    const overdue = invoices.filter(inv => inv.status === 'overdue').length;
    const draft = invoices.filter(inv => inv.status === 'draft').length;
    const totalAmount = invoices.reduce((sum, inv) => sum + (inv.total || 0), 0);
    const outstandingValue = invoices.filter(inv => inv.status === 'sent' || inv.status === 'overdue').reduce((sum, inv) => sum + (inv.total || 0), 0);

    return { total, sent, paid, overdue, draft, totalAmount, outstandingValue };
  };

  const stats = calculateStats();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <Card className="bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200/50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
              <div className="text-sm text-slate-600">Total</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200/50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">{stats.sent}</div>
              <div className="text-sm text-slate-600">Sent</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200/50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">{stats.paid}</div>
              <div className="text-sm text-slate-600">Paid</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200/50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">{stats.overdue}</div>
              <div className="text-sm text-slate-600">Overdue</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200/50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">${(stats.totalAmount || 0).toLocaleString()}</div>
              <div className="text-sm text-slate-600">Total Value</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200/50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">${(stats.outstandingValue || 0).toLocaleString()}</div>
              <div className="text-sm text-slate-600">Outstanding</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}