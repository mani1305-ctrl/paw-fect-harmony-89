import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, Send, Phone, Video, MoreVertical, Heart, Image } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image';
}

interface Conversation {
  id: string;
  dogOwner: {
    name: string;
    avatar: string;
    dogName: string;
    dogBreed: string;
    lastSeen: string;
  };
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  isOnline: boolean;
}

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const conversations: Conversation[] = [
    {
      id: "1",
      dogOwner: {
        name: "Sarah Johnson",
        avatar: "/api/placeholder/40/40",
        dogName: "Max",
        dogBreed: "Golden Retriever",
        lastSeen: "2 min ago"
      },
      lastMessage: "That sounds perfect! When would be a good time to meet?",
      lastMessageTime: new Date(Date.now() - 2 * 60 * 1000),
      unreadCount: 2,
      isOnline: true
    },
    {
      id: "2", 
      dogOwner: {
        name: "Mike Chen",
        avatar: "/api/placeholder/40/40",
        dogName: "Luna",
        dogBreed: "Labrador",
        lastSeen: "1 hour ago"
      },
      lastMessage: "Thank you for sharing Luna's health records!",
      lastMessageTime: new Date(Date.now() - 30 * 60 * 1000),
      unreadCount: 0,
      isOnline: false
    },
    {
      id: "3",
      dogOwner: {
        name: "Emma Thompson", 
        avatar: "/api/placeholder/40/40",
        dogName: "Bella",
        dogBreed: "Border Collie",
        lastSeen: "3 hours ago"
      },
      lastMessage: "I'm interested in arranging a meeting between Bella and your dog.",
      lastMessageTime: new Date(Date.now() - 3 * 60 * 60 * 1000),
      unreadCount: 1,
      isOnline: false
    }
  ];

  const messages: Message[] = [
    {
      id: "1",
      senderId: "sarah",
      content: "Hi! I saw Max's profile and I think he would be a great match for my Golden Retriever, Daisy!",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      type: 'text'
    },
    {
      id: "2", 
      senderId: "me",
      content: "Hello Sarah! Thank you for reaching out. I'd love to learn more about Daisy. Could you share some photos and her health records?",
      timestamp: new Date(Date.now() - 90 * 60 * 1000),
      type: 'text'
    },
    {
      id: "3",
      senderId: "sarah", 
      content: "Of course! Here are some recent photos of Daisy and her complete health records.",
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      type: 'text'
    },
    {
      id: "4",
      senderId: "me",
      content: "She's beautiful! Her health records look excellent. I think Max and Daisy would make a wonderful pair.",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      type: 'text'
    },
    {
      id: "5",
      senderId: "sarah",
      content: "That sounds perfect! When would be a good time to meet?",
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      type: 'text'
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.dogOwner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.dogOwner.dogName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.dogOwner.dogBreed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    // Add message sending logic here
    setNewMessage("");
  };

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Messages
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Connect with other dog owners and arrange breeding meetings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[700px]">
            {/* Conversations List */}
            <Card className="col-span-1 shadow-float animate-scale-in">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Conversations</CardTitle>
                  <Badge variant="secondary">{conversations.length}</Badge>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1 max-h-[500px] overflow-y-auto">
                  {filteredConversations.map((conv) => (
                    <div
                      key={conv.id}
                      onClick={() => setSelectedConversation(conv.id)}
                      className={`p-4 cursor-pointer transition-all duration-300 hover:bg-muted/50 border-l-4 ${
                        selectedConversation === conv.id
                          ? 'bg-muted/50 border-l-primary'
                          : 'border-l-transparent'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <div className="w-full h-full bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                              {conv.dogOwner.name.charAt(0)}
                            </div>
                          </Avatar>
                          {conv.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-foreground truncate">
                              {conv.dogOwner.name}
                            </p>
                            <div className="flex items-center space-x-1">
                              {conv.unreadCount > 0 && (
                                <Badge className="bg-primary text-primary-foreground text-xs px-2 py-1">
                                  {conv.unreadCount}
                                </Badge>
                              )}
                              <span className="text-xs text-muted-foreground">
                                {formatTime(conv.lastMessageTime)}
                              </span>
                            </div>
                          </div>
                          <p className="text-xs text-primary font-medium">
                            {conv.dogOwner.dogName} • {conv.dogOwner.dogBreed}
                          </p>
                          <p className="text-sm text-muted-foreground truncate mt-1">
                            {conv.lastMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Area */}
            <Card className="col-span-1 lg:col-span-2 shadow-float animate-scale-in delay-150">
              {selectedConv ? (
                <>
                  {/* Chat Header */}
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <div className="w-full h-full bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                              {selectedConv.dogOwner.name.charAt(0)}
                            </div>
                          </Avatar>
                          {selectedConv.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {selectedConv.dogOwner.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {selectedConv.isOnline ? 'Online' : `Last seen ${selectedConv.dogOwner.lastSeen}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Video className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Messages */}
                  <CardContent className="flex-1 p-0">
                    <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[70%] p-3 rounded-2xl ${
                              message.senderId === 'me'
                                ? 'bg-gradient-hero text-primary-foreground'
                                : 'bg-muted text-foreground'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${
                              message.senderId === 'me' 
                                ? 'text-primary-foreground/70' 
                                : 'text-muted-foreground'
                            }`}>
                              {formatTime(message.timestamp)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Message Input */}
                  <div className="border-t p-4">
                    <div className="flex items-center space-x-3">
                      <Button variant="ghost" size="sm">
                        <Image className="w-4 h-4" />
                      </Button>
                      <div className="flex-1 relative">
                        <Input
                          placeholder="Type your message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          className="pr-12"
                        />
                        <Button
                          size="sm"
                          onClick={handleSendMessage}
                          className="absolute right-1 top-1 h-8 w-8 p-0 bg-gradient-hero text-primary-foreground"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <CardContent className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Select a Conversation
                    </h3>
                    <p className="text-muted-foreground">
                      Choose a conversation from the list to start chatting
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}