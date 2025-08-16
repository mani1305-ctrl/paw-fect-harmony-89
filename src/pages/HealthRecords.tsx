import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUpload } from "@/components/ui/file-upload";
import { 
  Shield, 
  FileText, 
  Calendar, 
  Heart, 
  Plus, 
  Download,
  Eye,
  Upload,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface HealthRecord {
  id: string;
  dogName: string;
  dogId: string;
  type: 'vaccination' | 'health-test' | 'checkup' | 'medication' | 'surgery';
  title: string;
  description: string;
  date: Date;
  veterinarian: string;
  clinic: string;
  status: 'up-to-date' | 'due-soon' | 'overdue';
  documents: string[];
  nextDue?: Date;
}

export default function HealthRecords() {
  const [activeTab, setActiveTab] = useState("overview");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const healthRecords: HealthRecord[] = [
    {
      id: "1",
      dogName: "Max",
      dogId: "dog-1",
      type: 'vaccination',
      title: "Annual Vaccinations",
      description: "DHPP, Rabies, Lyme Disease, Bordetella",
      date: new Date(2024, 2, 15),
      veterinarian: "Dr. Sarah Mitchell",
      clinic: "Austin Veterinary Clinic", 
      status: 'up-to-date',
      documents: ["vaccination-record-2024.pdf", "health-certificate.pdf"],
      nextDue: new Date(2025, 2, 15)
    },
    {
      id: "2",
      dogName: "Max",
      dogId: "dog-1", 
      type: 'health-test',
      title: "Hip Dysplasia Screening",
      description: "OFA Hip Evaluation - Excellent rating",
      date: new Date(2024, 1, 20),
      veterinarian: "Dr. Michael Chen",
      clinic: "Orthopedic Veterinary Specialists",
      status: 'up-to-date',
      documents: ["hip-dysplasia-results.pdf", "x-ray-images.zip"]
    },
    {
      id: "3",
      dogName: "Max", 
      dogId: "dog-1",
      type: 'health-test',
      title: "Genetic Testing Panel",
      description: "Complete breed-specific genetic health screening",
      date: new Date(2024, 0, 10),
      veterinarian: "Dr. Emma Rodriguez",
      clinic: "Canine Genetics Lab",
      status: 'up-to-date',
      documents: ["genetic-test-results.pdf"]
    },
    {
      id: "4",
      dogName: "Max",
      dogId: "dog-1",
      type: 'checkup',
      title: "Annual Wellness Exam",
      description: "Complete physical examination and blood work",
      date: new Date(2023, 11, 5),
      veterinarian: "Dr. Sarah Mitchell", 
      clinic: "Austin Veterinary Clinic",
      status: 'due-soon',
      documents: ["wellness-exam-2023.pdf"],
      nextDue: new Date(2024, 11, 5)
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'up-to-date':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'due-soon':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'overdue':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <FileText className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'up-to-date':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'due-soon':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'overdue':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'vaccination':
        return <Shield className="w-5 h-5 text-blue-500" />;
      case 'health-test':
        return <FileText className="w-5 h-5 text-purple-500" />;
      case 'checkup':
        return <Heart className="w-5 h-5 text-pink-500" />;
      case 'medication':
        return <Plus className="w-5 h-5 text-green-500" />;
      case 'surgery':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <FileText className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const handleFileUpload = (files: File[]) => {
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  const upToDateRecords = healthRecords.filter(r => r.status === 'up-to-date');
  const dueSoonRecords = healthRecords.filter(r => r.status === 'due-soon');
  const overdueRecords = healthRecords.filter(r => r.status === 'overdue');

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Health Records
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Manage your dog's complete health documentation and medical history
            </p>
          </div>

          {/* Health Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="shadow-card animate-scale-in">
              <CardContent className="p-4 text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600 mb-1">{upToDateRecords.length}</div>
                <div className="text-sm text-muted-foreground">Up to Date</div>
              </CardContent>
            </Card>
            <Card className="shadow-card animate-scale-in delay-75">
              <CardContent className="p-4 text-center">
                <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-600 mb-1">{dueSoonRecords.length}</div>
                <div className="text-sm text-muted-foreground">Due Soon</div>
              </CardContent>
            </Card>
            <Card className="shadow-card animate-scale-in delay-150">
              <CardContent className="p-4 text-center">
                <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-600 mb-1">{overdueRecords.length}</div>
                <div className="text-sm text-muted-foreground">Overdue</div>
              </CardContent>
            </Card>
            <Card className="shadow-card animate-scale-in delay-200">
              <CardContent className="p-4 text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">{healthRecords.length}</div>
                <div className="text-sm text-muted-foreground">Total Records</div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="records">All Records</TabsTrigger>
              <TabsTrigger value="add-record">Add Record</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Quick Actions */}
              <Card className="shadow-float animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 text-primary mr-2" />
                    Health Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Recent Records</h3>
                      {healthRecords.slice(0, 3).map((record) => (
                        <div key={record.id} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                          {getTypeIcon(record.type)}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                              {record.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {formatDate(record.date)}
                            </p>
                          </div>
                          {getStatusIcon(record.status)}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Upcoming Due Dates</h3>
                      {healthRecords
                        .filter(r => r.nextDue)
                        .sort((a, b) => (a.nextDue?.getTime() || 0) - (b.nextDue?.getTime() || 0))
                        .slice(0, 3)
                        .map((record) => (
                          <div key={record.id} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                            {getTypeIcon(record.type)}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">
                                {record.title}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Due: {record.nextDue && formatDate(record.nextDue)}
                              </p>
                            </div>
                            <Badge className={getStatusColor(record.status)}>
                              {record.status.replace('-', ' ')}
                            </Badge>
                          </div>
                        ))}
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Quick Actions</h3>
                      <div className="space-y-2">
                        <Button 
                          className="w-full justify-start bg-gradient-hero text-primary-foreground hover:shadow-float transition-bounce"
                          onClick={() => setActiveTab("add-record")}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add New Record
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Download className="w-4 h-4 mr-2" />
                          Export All Records
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Upload className="w-4 h-4 mr-2" />
                          Bulk Upload
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="records" className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {healthRecords.map((record, index) => (
                  <Card key={record.id} className="shadow-card hover:shadow-float transition-bounce animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          {getTypeIcon(record.type)}
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-foreground">{record.title}</h3>
                              <Badge className={getStatusColor(record.status)}>
                                {record.status.replace('-', ' ')}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{record.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium">Date:</span> {formatDate(record.date)}
                              </div>
                              <div>
                                <span className="font-medium">Veterinarian:</span> {record.veterinarian}
                              </div>
                              <div>
                                <span className="font-medium">Clinic:</span> {record.clinic}
                              </div>
                              {record.nextDue && (
                                <div>
                                  <span className="font-medium">Next Due:</span> {formatDate(record.nextDue)}
                                </div>
                              )}
                            </div>
                            {record.documents.length > 0 && (
                              <div className="mt-4">
                                <p className="text-sm font-medium text-foreground mb-2">Documents:</p>
                                <div className="flex flex-wrap gap-2">
                                  {record.documents.map((doc, idx) => (
                                    <Badge key={idx} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                                      <FileText className="w-3 h-3 mr-1" />
                                      {doc}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="add-record" className="space-y-6">
              <Card className="shadow-float animate-scale-in">
                <CardHeader>
                  <CardTitle>Add New Health Record</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="record-title">Record Title</Label>
                      <Input id="record-title" placeholder="e.g., Annual Vaccination" />
                    </div>
                    <div>
                      <Label htmlFor="record-type">Record Type</Label>
                      <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="vaccination">Vaccination</option>
                        <option value="health-test">Health Test</option>
                        <option value="checkup">Checkup</option>
                        <option value="medication">Medication</option>
                        <option value="surgery">Surgery</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="veterinarian">Veterinarian</Label>
                      <Input id="veterinarian" placeholder="Dr. Name" />
                    </div>
                    <div>
                      <Label htmlFor="clinic">Clinic/Hospital</Label>
                      <Input id="clinic" placeholder="Clinic name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <textarea 
                      id="description"
                      className="w-full min-h-20 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Detailed description of the health record..."
                    />
                  </div>

                  <div>
                    <Label>Upload Documents</Label>
                    <FileUpload onChange={handleFileUpload} />
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground">
                          {uploadedFiles.length} file(s) uploaded successfully
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-gradient-hero text-primary-foreground hover:shadow-float transition-bounce">
                      Save Record
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}