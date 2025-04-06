
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PatientInitials } from "@/components/dashboard/PatientInitials";
import { Search, Send, Paperclip } from "lucide-react";
import { useState } from "react";

const conversationsData = [
  {
    id: "m1",
    patientId: "p1",
    patientName: "Michael Johnson",
    patientInitials: "MJ",
    lastMessage: "Thank you for the prescription details, doctor.",
    timestamp: "10:30 AM",
    unread: false,
    messages: [
      {
        id: "msg1",
        sender: "patient",
        text: "Hello Dr. Smith, I wanted to check if my new medication is causing these side effects I'm experiencing.",
        time: "Yesterday, 2:30 PM",
      },
      {
        id: "msg2",
        sender: "doctor",
        text: "Hi Michael, what symptoms are you experiencing exactly?",
        time: "Yesterday, 3:15 PM",
      },
      {
        id: "msg3",
        sender: "patient",
        text: "I've been feeling dizzy and have a dry cough since starting the new blood pressure medication.",
        time: "Yesterday, 3:20 PM",
      },
      {
        id: "msg4",
        sender: "doctor",
        text: "Those can be side effects of Lisinopril. Let's schedule a quick appointment to assess this. In the meantime, make sure you're staying hydrated.",
        time: "Yesterday, 4:00 PM",
      },
      {
        id: "msg5",
        sender: "patient",
        text: "Thank you for the prescription details, doctor.",
        time: "10:30 AM",
      },
    ],
  },
  {
    id: "m2",
    patientId: "p2",
    patientName: "Emily Davis",
    patientInitials: "ED",
    lastMessage: "I'll bring my blood glucose monitoring log to the appointment.",
    timestamp: "Yesterday",
    unread: true,
    messages: [
      {
        id: "msg1",
        sender: "doctor",
        text: "Emily, remember to bring your blood glucose log to our next appointment.",
        time: "Yesterday, 11:30 AM",
      },
      {
        id: "msg2",
        sender: "patient",
        text: "I'll bring my blood glucose monitoring log to the appointment.",
        time: "Yesterday, 12:45 PM",
      },
    ],
  },
  {
    id: "m3",
    patientId: "p6",
    patientName: "Olivia Martinez",
    patientInitials: "OM",
    lastMessage: "Is there anything I should do before the ECG test?",
    timestamp: "2 days ago",
    unread: false,
    messages: [
      {
        id: "msg1",
        sender: "patient",
        text: "Dr. Smith, I'm a bit nervous about the ECG test next week.",
        time: "2 days ago, 9:15 AM",
      },
      {
        id: "msg2",
        sender: "doctor",
        text: "No need to worry, Olivia. It's a completely painless and non-invasive procedure that takes just a few minutes.",
        time: "2 days ago, 10:30 AM",
      },
      {
        id: "msg3",
        sender: "patient",
        text: "Is there anything I should do before the ECG test?",
        time: "2 days ago, 10:45 AM",
      },
    ],
  },
];

const MessagesPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversationsData[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversationsData.filter(
    conversation => conversation.patientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // In a real app, this would send the message to an API
    // For now, we'll just clear the input
    setNewMessage("");
  };

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-11rem)]">
        <h1 className="text-2xl font-semibold text-dashboard-blue mb-6">Messages</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          <Card className="md:col-span-1 flex flex-col h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Conversations</CardTitle>
              <div className="relative mt-2">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-9 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dashboard-blue/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-0">
              <div className="space-y-1 py-2">
                {filteredConversations.map(conversation => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                      selectedConversation.id === conversation.id ? "bg-gray-50" : ""
                    }`}
                  >
                    <div className="relative">
                      <PatientInitials initials={conversation.patientInitials} />
                      {conversation.unread && (
                        <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-dashboard-blue rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium">{conversation.patientName}</div>
                      <div className="text-sm text-gray-500 truncate">{conversation.lastMessage}</div>
                    </div>
                    <div className="text-xs text-gray-400">{conversation.timestamp}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 flex flex-col h-full">
            {selectedConversation ? (
              <>
                <CardHeader className="pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <PatientInitials initials={selectedConversation.patientInitials} />
                    <div>
                      <CardTitle className="text-lg">{selectedConversation.patientName}</CardTitle>
                      <p className="text-sm text-gray-500">Patient</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-auto p-4 space-y-4">
                  {selectedConversation.messages.map(message => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.sender === "doctor" ? "justify-end" : "justify-start"}`}
                    >
                      <div 
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === "doctor" 
                            ? "bg-dashboard-blue text-white rounded-br-none" 
                            : "bg-gray-100 rounded-bl-none"
                        }`}
                      >
                        <p>{message.text}</p>
                        <div 
                          className={`text-xs mt-1 ${
                            message.sender === "doctor" ? "text-blue-100" : "text-gray-500"
                          }`}
                        >
                          {message.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <div className="p-4 border-t">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <button 
                      type="button"
                      className="p-2 text-gray-400 hover:text-gray-600 rounded-md"
                    >
                      <Paperclip size={20} />
                    </button>
                    <input
                      type="text"
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dashboard-blue/30"
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button 
                      type="submit"
                      className="p-2 bg-dashboard-blue text-white rounded-md hover:bg-dashboard-blue/90"
                    >
                      <Send size={20} />
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <CardContent className="flex items-center justify-center h-full">
                <p className="text-gray-500">Select a conversation to view messages</p>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessagesPage;
