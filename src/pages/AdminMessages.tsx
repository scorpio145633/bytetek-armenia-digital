import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  User, 
  Clock, 
  LogOut, 
  CheckCircle, 
  Archive,
  MessageSquare,
  Phone,
  Building,
  FileText
} from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  service?: string;
  message: string;
  status: string;
  created_at: string;
  updated_at?: string;
  ip_address?: string;
  user_agent?: string;
  response_notes?: string;
}

const AdminMessages = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [responseNotes, setResponseNotes] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    checkAuthAndFetchMessages();
  }, []);

  const checkAuthAndFetchMessages = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/admin/login');
        return;
      }

      // Check if user is admin
      const { data: roles, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .single();

      if (roleError || !roles) {
        toast.error('Access denied. Admin privileges required.');
        await supabase.auth.signOut();
        navigate('/admin/login');
        return;
      }

      await fetchMessages();
    } catch (error) {
      console.error('Auth error:', error);
      navigate('/admin/login');
    }
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setMessages(data || []);
    } catch (error: any) {
      toast.error('Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (messageId: string, newStatus: string) => {
    setUpdating(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const { error } = await supabase
        .from('contact_messages')
        .update({ 
          status: newStatus,
          handled_by: session?.user.id,
          response_notes: responseNotes || null,
        })
        .eq('id', messageId);

      if (error) throw error;

      toast.success(`Message marked as ${newStatus}`);
      await fetchMessages();
      
      if (selectedMessage?.id === messageId) {
        setSelectedMessage({ ...selectedMessage, status: newStatus });
      }
    } catch (error: any) {
      toast.error('Failed to update message status');
    } finally {
      setUpdating(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
    toast.success('Logged out successfully');
  };

  const filterMessages = (status: string) => {
    if (status === 'all') return messages;
    return messages.filter(msg => msg.status === status);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'read': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'responded': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'archived': return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{messages.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">New</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-500">
                {messages.filter(m => m.status === 'new').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Read</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-500">
                {messages.filter(m => m.status === 'read').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Responded</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                {messages.filter(m => m.status === 'responded').length}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All ({messages.length})</TabsTrigger>
            <TabsTrigger value="new">New ({filterMessages('new').length})</TabsTrigger>
            <TabsTrigger value="read">Read ({filterMessages('read').length})</TabsTrigger>
            <TabsTrigger value="responded">Responded ({filterMessages('responded').length})</TabsTrigger>
            <TabsTrigger value="archived">Archived ({filterMessages('archived').length})</TabsTrigger>
          </TabsList>

          {['all', 'new', 'read', 'responded', 'archived'].map((status) => (
            <TabsContent key={status} value={status} className="space-y-4">
              {filterMessages(status).length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center text-muted-foreground">
                    No messages in this category
                  </CardContent>
                </Card>
              ) : (
                filterMessages(status).map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Card className="cursor-pointer hover:border-primary/50 transition-colors"
                          onClick={() => {
                            setSelectedMessage(message);
                            setResponseNotes(message.response_notes || '');
                            if (message.status === 'new') {
                              handleStatusUpdate(message.id, 'read');
                            }
                          }}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <CardTitle className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              {message.name}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-4 text-sm">
                              <span className="flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                {message.email}
                              </span>
                              {message.phone && (
                                <span className="flex items-center gap-1">
                                  <Phone className="w-3 h-3" />
                                  {message.phone}
                                </span>
                              )}
                            </CardDescription>
                          </div>
                          <Badge className={getStatusColor(message.status)}>
                            {message.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {message.company && (
                          <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                            <Building className="w-3 h-3" />
                            {message.company}
                          </div>
                        )}
                        {message.subject && (
                          <div className="flex items-center gap-2 mb-2 text-sm">
                            <FileText className="w-3 h-3" />
                            <strong>{message.subject}</strong>
                          </div>
                        )}
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {message.message}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {formatDate(message.created_at)}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
             onClick={() => setSelectedMessage(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <User className="w-5 h-5" />
                    {selectedMessage.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">{selectedMessage.email}</p>
                </div>
                <Badge className={getStatusColor(selectedMessage.status)}>
                  {selectedMessage.status}
                </Badge>
              </div>

              <div className="space-y-2 text-sm">
                {selectedMessage.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{selectedMessage.phone}</span>
                  </div>
                )}
                {selectedMessage.company && (
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-muted-foreground" />
                    <span>{selectedMessage.company}</span>
                  </div>
                )}
                {selectedMessage.subject && (
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <span><strong>Subject:</strong> {selectedMessage.subject}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{formatDate(selectedMessage.created_at)}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-semibold mb-2">Message:</h3>
              <p className="text-sm whitespace-pre-wrap mb-6">{selectedMessage.message}</p>

              <div className="mb-4">
                <Label htmlFor="response-notes">Response Notes (Internal)</Label>
                <Textarea
                  id="response-notes"
                  value={responseNotes}
                  onChange={(e) => setResponseNotes(e.target.value)}
                  placeholder="Add internal notes about this message..."
                  rows={4}
                  className="mt-2"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => handleStatusUpdate(selectedMessage.id, 'read')}
                  disabled={updating || selectedMessage.status === 'read'}
                  variant="outline"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Mark as Read
                </Button>
                <Button
                  onClick={() => handleStatusUpdate(selectedMessage.id, 'responded')}
                  disabled={updating || selectedMessage.status === 'responded'}
                  variant="outline"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Mark as Responded
                </Button>
                <Button
                  onClick={() => handleStatusUpdate(selectedMessage.id, 'archived')}
                  disabled={updating || selectedMessage.status === 'archived'}
                  variant="outline"
                >
                  <Archive className="w-4 h-4 mr-2" />
                  Archive
                </Button>
                <Button
                  onClick={() => setSelectedMessage(null)}
                  variant="ghost"
                >
                  Close
                </Button>
              </div>

              {selectedMessage.ip_address && (
                <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                  <p>IP: {selectedMessage.ip_address}</p>
                  {selectedMessage.user_agent && (
                    <p className="truncate">User Agent: {selectedMessage.user_agent}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
