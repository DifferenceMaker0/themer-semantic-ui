import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Phone, Building } from "lucide-react";

interface ClientCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (clientData: any) => void;
}

export default function ClientCreationModal({ 
  isOpen, 
  onClose, 
  onSubmit 
}: ClientCreationModalProps) {
  const [formData, setFormData] = useState({
    company_name: '',
    primary_contact_name: '',
    primary_contact_email: '',
    primary_contact_phone: '',
    industry: '',
    company_size: '',
    website: '',
    timezone: '',
    communication_frequency: '',
    communication_style: '',
    business_hours_start: '',
    business_hours_end: '',
    total_revenue: '',
    satisfaction_score: 8,
    relationship_status: 'prospect'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      company_name: '',
      primary_contact_name: '',
      primary_contact_email: '',
      primary_contact_phone: '',
      industry: '',
      company_size: '',
      website: '',
      timezone: '',
      communication_frequency: '',
      communication_style: '',
      business_hours_start: '',
      business_hours_end: '',
      total_revenue: '',
      satisfaction_score: 8,
      relationship_status: 'prospect'
    });
  };

  const handleCancel = () => {
    setFormData({
      company_name: '',
      primary_contact_name: '',
      primary_contact_email: '',
      primary_contact_phone: '',
      industry: '',
      company_size: '',
      website: '',
      timezone: '',
      communication_frequency: '',
      communication_style: '',
      business_hours_start: '',
      business_hours_end: '',
      total_revenue: '',
      satisfaction_score: 8,
      relationship_status: 'prospect'
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Add New Client
          </DialogTitle>
          <DialogDescription>
            Add a new client to your workspace. Fill in their contact information and details.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company_name">Company Name *</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="company_name"
                  value={formData.company_name}
                  onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  placeholder="Enter company name"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="primary_contact_name">Primary Contact Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="primary_contact_name"
                  value={formData.primary_contact_name}
                  onChange={(e) => setFormData({ ...formData, primary_contact_name: e.target.value })}
                  placeholder="Enter contact name"
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primary_contact_email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="primary_contact_email"
                  type="email"
                  value={formData.primary_contact_email}
                  onChange={(e) => setFormData({ ...formData, primary_contact_email: e.target.value })}
                  placeholder="Enter email address"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="primary_contact_phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="primary_contact_phone"
                  value={formData.primary_contact_phone}
                  onChange={(e) => setFormData({ ...formData, primary_contact_phone: e.target.value })}
                  placeholder="Enter phone number"
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                placeholder="Enter industry"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company_size">Company Size</Label>
              <Select value={formData.company_size} onValueChange={(value) => setFormData({ ...formData, company_size: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="startup">Startup</SelectItem>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="relationship_status">Relationship Status</Label>
              <Select value={formData.relationship_status} onValueChange={(value) => setFormData({ ...formData, relationship_status: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="prospect">Prospect</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Input
                id="timezone"
                value={formData.timezone}
                onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                placeholder="e.g., America/New_York"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="communication_frequency">Communication Frequency</Label>
              <Select value={formData.communication_frequency} onValueChange={(value) => setFormData({ ...formData, communication_frequency: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="communication_style">Communication Style</Label>
              <Select value={formData.communication_style} onValueChange={(value) => setFormData({ ...formData, communication_style: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="satisfaction_score">Satisfaction Score (1-10)</Label>
              <Input
                id="satisfaction_score"
                type="number"
                min="1"
                max="10"
                value={formData.satisfaction_score}
                onChange={(e) => setFormData({ ...formData, satisfaction_score: parseInt(e.target.value) || 8 })}
                placeholder="8"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="business_hours_start">Business Hours Start</Label>
              <Input
                id="business_hours_start"
                type="time"
                value={formData.business_hours_start}
                onChange={(e) => setFormData({ ...formData, business_hours_start: e.target.value })}
                placeholder="09:00"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="business_hours_end">Business Hours End</Label>
              <Input
                id="business_hours_end"
                type="time"
                value={formData.business_hours_end}
                onChange={(e) => setFormData({ ...formData, business_hours_end: e.target.value })}
                placeholder="17:00"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="total_revenue">Total Revenue ($)</Label>
            <Input
              id="total_revenue"
              type="number"
              min="0"
              step="0.01"
              value={formData.total_revenue}
              onChange={(e) => setFormData({ ...formData, total_revenue: e.target.value })}
              placeholder="0.00"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit">
              Add Client
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
