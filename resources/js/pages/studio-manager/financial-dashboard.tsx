import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import ProjectLayout from '@/layouts/project-layout';
import { Breadcrumbs, BreadcrumbItem } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, DollarSign, TrendingUp, Receipt, CreditCard } from 'lucide-react';

// Import financial components
import QuickStats from '@/components/financial/QuickStats';
import RevenueChart from '@/components/financial/RevenueChart';
import ExpenseBreakdown from '@/components/financial/ExpenseBreakdown';
import CashFlowForecast from '@/components/financial/CashFlowForecast';
import FinancialGoalProgress from '@/components/financial/FinancialGoalProgress';
import InvoiceStats from '@/components/invoices/InvoiceStats';

// Import types
import type {
    Invoice as InvoiceType,
    Expense as ExpenseType,
    Payment as PaymentType
} from '@/types/entities';

interface FinancialDashboardProps {
    invoices?: InvoiceType[];
    expenses?: ExpenseType[];
    payments?: PaymentType[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Financial Dashboard',
        href: '/financial-dashboard',
    },
];

export default function FinancialDashboard({ invoices = [], expenses = [], payments = [] }: FinancialDashboardProps) {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <ProjectLayout>
            <Head title="Financial Dashboard" />
            
            <div className="space-y-6">
                <Breadcrumbs items={breadcrumbs} />
                
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Financial Dashboard
                        </h1>
                        <p className="text-slate-600 mt-1">
                            Monitor your business finances, invoices, and cash flow.
                        </p>
                    </div>
                    <Button className="gap-2">
                        <Plus className="w-4 h-4" />
                        New Invoice
                    </Button>
                </div>

                {/* Quick Financial Stats */}
                <QuickStats 
                    invoices={invoices}
                    expenses={expenses}
                    payments={payments}
                />

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="overview" className="gap-2">
                            <DollarSign className="w-4 h-4" />
                            Overview
                        </TabsTrigger>
                        <TabsTrigger value="revenue" className="gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Revenue
                        </TabsTrigger>
                        <TabsTrigger value="expenses" className="gap-2">
                            <Receipt className="w-4 h-4" />
                            Expenses
                        </TabsTrigger>
                        <TabsTrigger value="cash-flow" className="gap-2">
                            <CreditCard className="w-4 h-4" />
                            Cash Flow
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <RevenueChart 
                                invoices={invoices}
                                payments={payments}
                            />
                            <InvoiceStats 
                                invoices={invoices}
                            />
                        </div>
                        <FinancialGoalProgress 
                            invoices={invoices}
                            expenses={expenses}
                        />
                    </TabsContent>

                    <TabsContent value="revenue" className="space-y-6">
                        <RevenueChart 
                            invoices={invoices}
                            payments={payments}
                        />
                        <InvoiceStats 
                            invoices={invoices}
                        />
                    </TabsContent>

                    <TabsContent value="expenses" className="space-y-6">
                        <ExpenseBreakdown 
                            expenses={expenses}
                        />
                    </TabsContent>

                    <TabsContent value="cash-flow" className="space-y-6">
                        <CashFlowForecast 
                            invoices={invoices}
                            expenses={expenses}
                            payments={payments}
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </ProjectLayout>
    );
}
