
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  UserCircle, 
  Bell, 
  Lock, 
  Smartphone, 
  Globe, 
  CreditCard, 
  LifeBuoy, 
  ChevronRight,
  KeyRound,
  BellRing,
  Shield,
  Bell as BellIcon,
  ShoppingBag,
  Library,
  Sparkles,
  CreditCard as CreditCardIcon,
  Headphones
} from "lucide-react";
import { currentUser } from "@/lib/mock-data";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useIsMobile } from "@/hooks/use-mobile";

const settingSections = [
  {
    id: "profile",
    title: "Profile",
    icon: UserCircle,
    description: "Manage your personal information and profile settings",
  },
  {
    id: "notifications",
    title: "Notifications",
    icon: Bell,
    description: "Configure how and when you receive notifications",
  },
  {
    id: "security",
    title: "Security",
    icon: Lock,
    description: "Update your password and security preferences",
  },
  {
    id: "devices",
    title: "Connected Devices",
    icon: Smartphone,
    description: "Manage devices that are connected to your account",
  },
  {
    id: "integration",
    title: "Integrations",
    icon: Globe,
    description: "Connect third-party services to enhance your workflow",
  },
  {
    id: "billing",
    title: "Billing & Subscription",
    icon: CreditCard,
    description: "Manage your billing information and subscription plan",
  },
  {
    id: "support",
    title: "Help & Support",
    icon: LifeBuoy,
    description: "Get help with using the platform and resolve issues",
  },
];

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const isMobile = useIsMobile();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-dashboard-blue">Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left sidebar with settings options */}
          <Card className="md:col-span-1">
            <CardContent className="p-4">
              <div className="flex flex-col items-center py-6 mb-4">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-2xl font-medium mb-3">
                  {currentUser.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h2 className="text-lg font-semibold">{currentUser.name}</h2>
                <p className="text-sm text-gray-500">{currentUser.role}</p>
              </div>

              <div className="space-y-1">
                {settingSections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left ${
                      activeSection === section.id
                        ? "bg-dashboard-blue/10 text-dashboard-blue"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <section.icon size={18} />
                    <span>{section.title}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right content area for selected setting */}
          <Card className="md:col-span-3">
            <CardHeader className="border-b">
              <CardTitle className="text-lg">
                {settingSections.find(s => s.id === activeSection)?.title || "Profile"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* Profile Settings */}
              {activeSection === "profile" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium block mb-2">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue={currentUser.name} 
                        className="w-full px-3 py-2 border border-gray-200 rounded-md" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2">Role/Specialty</label>
                      <input 
                        type="text" 
                        defaultValue={currentUser.role} 
                        className="w-full px-3 py-2 border border-gray-200 rounded-md" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2">Email Address</label>
                      <input 
                        type="email" 
                        defaultValue="dr.smith@medical.com" 
                        className="w-full px-3 py-2 border border-gray-200 rounded-md" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        defaultValue="+1 (555) 123-4567" 
                        className="w-full px-3 py-2 border border-gray-200 rounded-md" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium block mb-2">Bio</label>
                    <textarea 
                      rows={4}
                      defaultValue="Board-certified cardiologist with over 15 years of experience specializing in preventive cardiology and heart disease management."
                      className="w-full px-3 py-2 border border-gray-200 rounded-md" 
                    />
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-dashboard-blue text-white rounded-md hover:bg-dashboard-blue/90 transition-colors">
                      Save Changes
                    </button>
                    <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              )}
              
              {/* Notifications Settings */}
              {activeSection === "notifications" && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-gray-100">
                      <h3 className="text-base font-medium mb-4">Email Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Appointment Reminders</p>
                            <p className="text-sm text-gray-500">Receive email reminders about upcoming appointments</p>
                          </div>
                          <Switch id="appointment-email" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Patient Updates</p>
                            <p className="text-sm text-gray-500">Get emails when patient information is updated</p>
                          </div>
                          <Switch id="patient-email" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">System Announcements</p>
                            <p className="text-sm text-gray-500">Important updates about the platform</p>
                          </div>
                          <Switch id="system-email" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pb-4 border-b border-gray-100">
                      <h3 className="text-base font-medium mb-4">Push Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">New Messages</p>
                            <p className="text-sm text-gray-500">Be notified when you receive new messages</p>
                          </div>
                          <Switch id="message-push" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Schedule Changes</p>
                            <p className="text-sm text-gray-500">Be alerted when your schedule changes</p>
                          </div>
                          <Switch id="schedule-push" defaultChecked />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-base font-medium mb-4">Notification Preferences</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Do Not Disturb</p>
                            <p className="text-sm text-gray-500">Silence notifications during specific hours</p>
                          </div>
                          <Switch id="dnd" />
                        </div>
                        
                        <div className="flex flex-col space-y-2 mt-3">
                          <Label htmlFor="quiet-hours">Quiet Hours</Label>
                          <div className="grid grid-cols-2 gap-3">
                            <input 
                              type="time" 
                              id="quiet-start" 
                              defaultValue="22:00" 
                              className="px-3 py-2 border border-gray-200 rounded-md" 
                              disabled 
                            />
                            <input 
                              type="time" 
                              id="quiet-end" 
                              defaultValue="06:00" 
                              className="px-3 py-2 border border-gray-200 rounded-md" 
                              disabled 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-dashboard-blue text-white rounded-md hover:bg-dashboard-blue/90 transition-colors">
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
              
              {/* Security Settings */}
              {activeSection === "security" && (
                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-100">
                    <h3 className="text-base font-medium mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium block mb-2">Current Password</label>
                        <input 
                          type="password" 
                          className="w-full px-3 py-2 border border-gray-200 rounded-md" 
                          placeholder="Enter current password" 
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-2">New Password</label>
                        <input 
                          type="password" 
                          className="w-full px-3 py-2 border border-gray-200 rounded-md" 
                          placeholder="Enter new password" 
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-2">Confirm New Password</label>
                        <input 
                          type="password" 
                          className="w-full px-3 py-2 border border-gray-200 rounded-md" 
                          placeholder="Confirm new password" 
                        />
                      </div>
                      <button className="px-4 py-2 bg-dashboard-blue text-white rounded-md hover:bg-dashboard-blue/90 transition-colors">
                        Update Password
                      </button>
                    </div>
                  </div>
                  
                  <div className="pb-6 border-b border-gray-100">
                    <h3 className="text-base font-medium mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-medium">Enable 2FA</p>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <Switch id="2fa" />
                    </div>
                    <div className="flex items-center text-dashboard-blue hover:underline">
                      <KeyRound size={16} className="mr-2" />
                      <span className="text-sm">Set up two-factor authentication</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium mb-4">Login Sessions</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-gray-500">Chrome on Windows • New York, USA • Right now</p>
                        </div>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full h-fit">Active</span>
                      </div>
                      <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                        <div>
                          <p className="font-medium">Previous Session</p>
                          <p className="text-sm text-gray-500">Safari on iPhone • Boston, USA • 2 days ago</p>
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full h-fit">Expired</span>
                      </div>
                      <button className="mt-3 text-dashboard-blue hover:underline flex items-center">
                        <Shield size={16} className="mr-2" />
                        <span>Sign out of all devices</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Connected Devices Settings */}
              {activeSection === "devices" && (
                <div className="space-y-6">
                  <div className="pb-4 border-b border-gray-100">
                    <h3 className="text-base font-medium mb-4">Active Devices</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                        <div className="flex items-start">
                          <Smartphone className="mr-3 text-dashboard-blue" />
                          <div>
                            <p className="font-medium">iPhone 14 Pro</p>
                            <p className="text-sm text-gray-500">iOS 16.5 • Last active: Just now</p>
                            <div className="flex mt-1">
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                Current Device
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="text-red-500 hover:underline text-sm">
                          Revoke
                        </button>
                      </div>
                      
                      <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                        <div className="flex items-start">
                          <Smartphone className="mr-3" />
                          <div>
                            <p className="font-medium">iPad Pro</p>
                            <p className="text-sm text-gray-500">iPadOS 16.4 • Last active: Today, 8:30 AM</p>
                          </div>
                        </div>
                        <button className="text-red-500 hover:underline text-sm">
                          Revoke
                        </button>
                      </div>
                      
                      <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                        <div className="flex items-start">
                          <Smartphone className="mr-3" />
                          <div>
                            <p className="font-medium">Macbook Pro</p>
                            <p className="text-sm text-gray-500">macOS 13.4 • Last active: Yesterday, 6:45 PM</p>
                          </div>
                        </div>
                        <button className="text-red-500 hover:underline text-sm">
                          Revoke
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium mb-4">Device Settings</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Notify on New Device Login</p>
                          <p className="text-sm text-gray-500">Send email when a new device logs in</p>
                        </div>
                        <Switch id="device-notify" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Auto-revoke Unused Devices</p>
                          <p className="text-sm text-gray-500">Automatically revoke access for devices not used in 30 days</p>
                        </div>
                        <Switch id="auto-revoke" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Integrations Settings */}
              {activeSection === "integration" && (
                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-100">
                    <h3 className="text-base font-medium mb-4">Connected Services</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                            <Library className="text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Electronic Health Records (EHR)</p>
                            <p className="text-sm text-gray-500">Connected since Mar 15, 2023</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">
                            Active
                          </span>
                          <button className="text-sm text-gray-500 hover:text-gray-700 underline">
                            Disconnect
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                            <Bell className="text-purple-600" />
                          </div>
                          <div>
                            <p className="font-medium">Appointment Scheduler</p>
                            <p className="text-sm text-gray-500">Connected since Jan 5, 2023</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">
                            Active
                          </span>
                          <button className="text-sm text-gray-500 hover:text-gray-700 underline">
                            Disconnect
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-orange-100 rounded-md flex items-center justify-center mr-3">
                            <ShoppingBag className="text-orange-600" />
                          </div>
                          <div>
                            <p className="font-medium">Pharmacy System</p>
                            <p className="text-sm text-gray-500">Connected since Feb 28, 2023</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">
                            Active
                          </span>
                          <button className="text-sm text-gray-500 hover:text-gray-700 underline">
                            Disconnect
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium mb-4">Available Integrations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-4 rounded-md">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                            <Sparkles className="text-gray-600" />
                          </div>
                          <h4 className="font-medium">Lab Results System</h4>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                          Connect to automatically import lab test results.
                        </p>
                        <button className="text-dashboard-blue hover:underline text-sm flex items-center">
                          <span>Connect</span>
                          <ChevronRight size={16} />
                        </button>
                      </div>
                      
                      <div className="border border-gray-200 p-4 rounded-md">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                            <BellRing className="text-gray-600" />
                          </div>
                          <h4 className="font-medium">Patient Portal</h4>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                          Sync with online patient portal for easier access.
                        </p>
                        <button className="text-dashboard-blue hover:underline text-sm flex items-center">
                          <span>Connect</span>
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Billing & Subscription Settings */}
              {activeSection === "billing" && (
                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-100">
                    <h3 className="text-base font-medium mb-4">Current Plan</h3>
                    <div className="bg-dashboard-blue/10 rounded-md p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-lg">Professional Plan</h4>
                          <p className="text-dashboard-blue">$49.99/month</p>
                        </div>
                        <span className="bg-dashboard-blue px-3 py-1 text-white text-sm rounded-full">Active</span>
                      </div>
                      <p className="text-gray-600 mt-2">
                        Your plan renews on April 15, 2025
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="font-medium text-lg">25 GB</p>
                        <p className="text-sm text-gray-500">Storage Space</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="font-medium text-lg">Unlimited</p>
                        <p className="text-sm text-gray-500">Patients</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="font-medium text-lg">Priority</p>
                        <p className="text-sm text-gray-500">Support</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pb-6 border-b border-gray-100">
                    <h3 className="text-base font-medium mb-4">Payment Method</h3>
                    <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-md mb-4">
                      <CreditCardIcon className="text-gray-600" />
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-gray-500">Expires 06/26</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
                        Change Payment Method
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium mb-4">Billing History</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount
                            </th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Invoice
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-3 text-sm text-gray-900">March 15, 2025</td>
                            <td className="px-4 py-3 text-sm text-gray-900">$49.99</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                                Paid
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <a href="#" className="text-dashboard-blue hover:underline">
                                Download
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm text-gray-900">February 15, 2025</td>
                            <td className="px-4 py-3 text-sm text-gray-900">$49.99</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                                Paid
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <a href="#" className="text-dashboard-blue hover:underline">
                                Download
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm text-gray-900">January 15, 2025</td>
                            <td className="px-4 py-3 text-sm text-gray-900">$49.99</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                                Paid
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <a href="#" className="text-dashboard-blue hover:underline">
                                Download
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Help & Support Settings */}
              {activeSection === "support" && (
                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-100">
                    <h3 className="text-base font-medium mb-4">Support Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-md">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-dashboard-blue/20 rounded-full flex items-center justify-center mr-3">
                            <Headphones className="text-dashboard-blue" />
                          </div>
                          <h4 className="font-medium">Contact Support</h4>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                          Reach out to our support team for assistance with any issue.
                        </p>
                        <button className="px-3 py-1.5 bg-dashboard-blue text-white rounded-md hover:bg-dashboard-blue/90 transition-colors text-sm">
                          Open Support Ticket
                        </button>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-md">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-dashboard-blue/20 rounded-full flex items-center justify-center mr-3">
                            <BellIcon className="text-dashboard-blue" />
                          </div>
                          <h4 className="font-medium">Knowledge Base</h4>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                          Browse our documentation and guides to find answers.
                        </p>
                        <button className="px-3 py-1.5 border border-dashboard-blue text-dashboard-blue rounded-md hover:bg-dashboard-blue/5 transition-colors text-sm">
                          View Documentation
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pb-6 border-b border-gray-100">
                    <h3 className="text-base font-medium mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">How do I reset my password?</h4>
                        <p className="text-sm text-gray-600">
                          You can reset your password in the Security tab of your settings.
                          Alternatively, use the "Forgot Password" option on the login screen.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">How can I export patient data?</h4>
                        <p className="text-sm text-gray-600">
                          Patient data can be exported from the Patients page by selecting the 
                          patients and clicking the "Export" button in the actions menu.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">What devices are supported?</h4>
                        <p className="text-sm text-gray-600">
                          Our platform works on all modern browsers and devices, including
                          desktop computers, tablets, and mobile phones.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium mb-4">Contact Information</h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="flex flex-col space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Support Email</p>
                          <p className="font-medium">support@medicaldashboard.com</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Support Phone</p>
                          <p className="font-medium">+1 (800) 123-4567</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Hours</p>
                          <p className="font-medium">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
