import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  DollarSign,
  TrendingUp,
  AlertTriangle,
  PieChart,
  Target,
  CreditCard
} from "lucide-react";
import { Skeleton } from '@/components/ui/skeleton';

export default function QuickStats({ invoices = [], expenses = [], payments = [], isLoading = false }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Array(6).fill(0).map((_, i) => (
          <Card key={i} className="bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200/50">
            <CardContent className="p-4">
              <Skeleton className="h-16 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Calculate metrics from the data
  const calculateMetrics = () => {
    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();

    const thisMonthInvoices = invoices.filter(inv => {
      const invDate = new Date(inv.created_at);
      return invDate.getMonth() === thisMonth && invDate.getFullYear() === thisYear;
    });

    const thisMonthRevenue = thisMonthInvoices.reduce((sum, inv) => sum + (inv.total || 0), 0);
    const outstandingAmount = invoices.filter(inv => inv.status === 'sent' || inv.status === 'overdue').reduce((sum, inv) => sum + (inv.total || 0), 0);
    const overdueCount = invoices.filter(inv => inv.status === 'overdue').length;
    const thisMonthExpenses = expenses.filter(exp => {
      const expDate = new Date(exp.created_at);
      return expDate.getMonth() === thisMonth && expDate.getFullYear() === thisYear;
    }).reduce((sum, exp) => sum + (exp.amount || 0), 0);

    const thisMonthProfit = thisMonthRevenue - thisMonthExpenses;
    const profitMargin = thisMonthRevenue > 0 ? (thisMonthProfit / thisMonthRevenue) * 100 : 0;

    return {
      thisMonthRevenue,
      outstandingAmount,
      overdueCount,
      thisMonthExpenses,
      thisMonthProfit,
      profitMargin,
      revenueGrowth: 0 // TODO: Calculate actual growth
    };
  };

  const metrics = calculateMetrics();

  const stats = [
    {
      title: "This Month Revenue",
      value: `$${(metrics.thisMonthRevenue || 0).toLocaleString()}`,
      icon: DollarSign,
      color: "bg-emerald-100 text-emerald-600",
      trend: metrics.revenueGrowth > 0 ? `+${(metrics.revenueGrowth || 0).toFixed(1)}%` : `${(metrics.revenueGrowth || 0).toFixed(1)}%`,
      trendPositive: (metrics.revenueGrowth || 0) >= 0
    },
    {
      title: "Outstanding",
      value: `$${(metrics.outstandingAmount || 0).toLocaleString()}`,
      icon: AlertTriangle,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "This Month Expenses",
      value: `$${(metrics.thisMonthExpenses || 0).toLocaleString()}`,
      icon: CreditCard,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Net Profit",
      value: `$${(metrics.thisMonthProfit || 0).toLocaleString()}`,
      icon: Target,
      color: (metrics.thisMonthProfit || 0) >= 0 ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
    },
    {
      title: "Profit Margin",
      value: `${(metrics.profitMargin || 0).toFixed(1)}%`,
      icon: PieChart,
      color: (metrics.profitMargin || 0) >= 20 ? "bg-emerald-100 text-emerald-600" :
        (metrics.profitMargin || 0) >= 10 ? "bg-amber-100 text-amber-600" : "bg-red-100 text-red-600"
    },
    {
      title: "Overdue Invoices",
      value: (metrics.overdueCount || 0).toString(),
      icon: AlertTriangle,
      color: (metrics.overdueCount || 0) === 0 ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-lg font-bold text-slate-900 truncate">{stat.value}</div>
                <div className="text-xs text-slate-600">{stat.title}</div>
                {stat.trend && (
                  <div className={`text-xs font-medium ${stat.trendPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                    {stat.trend} vs last month
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}