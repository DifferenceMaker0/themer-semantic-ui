import type { Payment as PaymentType } from '@/types';

export class Payment {
  static async findAll(): Promise<PaymentType[]> {
    // Mock implementation - replace with actual API call
    return [
      {
        id: '1',
        invoice_id: 'invoice-1',
        amount: 5000,
        payment_date: '2024-01-15',
        payment_method: 'bank_transfer',
        transaction_id: 'TXN-001-2024',
        notes: 'Payment received via wire transfer',
        status: 'completed',
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-01-15T10:00:00Z',
      },
      {
        id: '2',
        invoice_id: 'invoice-2',
        amount: 2500,
        payment_date: '2024-01-10',
        payment_method: 'stripe',
        transaction_id: 'ch_3OqJ2K2eZvKYlo2C0123456',
        status: 'completed',
        created_at: '2024-01-10T14:30:00Z',
        updated_at: '2024-01-10T14:30:00Z',
      },
      {
        id: '3',
        invoice_id: 'invoice-3',
        amount: 1500,
        payment_date: '2024-01-20',
        payment_method: 'paypal',
        transaction_id: 'PAYID-EXAMPLE123',
        status: 'pending',
        created_at: '2024-01-20T09:00:00Z',
        updated_at: '2024-01-20T09:00:00Z',
      },
    ];
  }

  static async findById(id: string): Promise<PaymentType | null> {
    // Mock implementation - replace with actual API call
    const payments = await this.findAll();
    return payments.find(payment => payment.id === id) || null;
  }

  static async create(paymentData: Partial<PaymentType>): Promise<PaymentType> {
    // Mock implementation - replace with actual API call
    const newPayment: PaymentType = {
      id: Math.random().toString(36).substr(2, 9),
      invoice_id: paymentData.invoice_id || '',
      amount: paymentData.amount || 0,
      payment_date: paymentData.payment_date || new Date().toISOString().split('T')[0],
      payment_method: paymentData.payment_method || 'bank_transfer',
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...paymentData,
    };
    return newPayment;
  }

  static async update(id: string, paymentData: Partial<PaymentType>): Promise<PaymentType> {
    // Mock implementation - replace with actual API call
    const existingPayment = await this.findById(id);
    if (!existingPayment) {
      throw new Error('Payment not found');
    }
    
    return {
      ...existingPayment,
      ...paymentData,
      updated_at: new Date().toISOString(),
    };
  }

  static async delete(id: string): Promise<boolean> {
    // Mock implementation - replace with actual API call
    return true;
  }

  static async getPaymentsByInvoice(invoiceId: string): Promise<PaymentType[]> {
    const payments = await this.findAll();
    return payments.filter(payment => payment.invoice_id === invoiceId);
  }

  static async getPaymentsByStatus(status: PaymentType['status']): Promise<PaymentType[]> {
    const payments = await this.findAll();
    return payments.filter(payment => payment.status === status);
  }

  static async getPaymentsByMethod(method: PaymentType['payment_method']): Promise<PaymentType[]> {
    const payments = await this.findAll();
    return payments.filter(payment => payment.payment_method === method);
  }

  static async getTotalPayments(startDate?: string, endDate?: string): Promise<number> {
    const payments = await this.findAll();
    let filteredPayments = payments.filter(payment => payment.status === 'completed');
    
    if (startDate) {
      filteredPayments = filteredPayments.filter(payment => payment.payment_date >= startDate);
    }
    
    if (endDate) {
      filteredPayments = filteredPayments.filter(payment => payment.payment_date <= endDate);
    }
    
    return filteredPayments.reduce((total, payment) => total + payment.amount, 0);
  }

  static async markAsCompleted(id: string, transactionId?: string): Promise<PaymentType> {
    return this.update(id, {
      status: 'completed',
      transaction_id: transactionId,
    });
  }

  static async markAsFailed(id: string, notes?: string): Promise<PaymentType> {
    return this.update(id, {
      status: 'failed',
      notes: notes,
    });
  }
}
