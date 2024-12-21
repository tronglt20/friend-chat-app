import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MessageSquare, Users, Plus } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - will be replaced with API calls later
  const mockUsers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];

  const mockChats = [
    { id: 1, name: "Team Chat", isGroup: true, lastMessage: "Meeting at 3 PM" },
    { id: 2, name: "John Doe", isGroup: false, lastMessage: "Hello!" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Login Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-card p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Welcome to Chat App</h1>
          <Button 
            className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 hover:bg-gray-100 border"
            variant="outline"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>
        </div>
      </div>

      {/* Chat Interface - Initially hidden, shown after login */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="bg-card p-4 rounded-lg shadow-lg">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Create Group Chat Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full mb-4" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Group Chat
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Group Chat</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input placeholder="Group Name" />
                  <Button className="w-full">Create Group</Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Chats List */}
            <div className="space-y-2">
              {mockChats.map((chat) => (
                <div
                  key={chat.id}
                  className="p-3 hover:bg-accent rounded-lg cursor-pointer flex items-center gap-3"
                >
                  {chat.isGroup ? (
                    <Users className="h-6 w-6" />
                  ) : (
                    <MessageSquare className="h-6 w-6" />
                  )}
                  <div>
                    <h3 className="font-medium">{chat.name}</h3>
                    <p className="text-sm text-muted-foreground">{chat.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="col-span-2 bg-card p-4 rounded-lg shadow-lg min-h-[600px] flex flex-col">
            <div className="flex-1">
              <div className="text-center text-muted-foreground">
                Select a chat to start messaging
              </div>
            </div>
            <div className="mt-4">
              <Input placeholder="Type a message..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;