# Admin System Setup Guide

## Overview
Your project now has a complete admin system with secure authentication, contact message management, and comprehensive spam protection.

## Features Implemented

### 1. **Admin Authentication System**
- Secure login/signup at `/admin/login`
- Role-based access control (admin, moderator, user)
- Protected admin routes

### 2. **Contact Form Security**
- Server-side rate limiting (5 submissions per hour per IP)
- IP address tracking and blocking
- Honeypot spam detection
- Input validation and sanitization
- Content analysis for spam keywords

### 3. **Admin Dashboard** (`/admin/messages`)
- View all contact submissions
- Filter by status (new, read, responded, archived)
- Real-time statistics
- Mark messages with different statuses
- Add internal response notes
- View submission metadata (IP, user agent, timestamps)

### 4. **Database Security**
- Row Level Security (RLS) enabled
- Contact messages are write-only for public (no data exposure)
- Only admins can view contact messages
- Security definer functions prevent RLS recursion

## Getting Started

### Step 1: Create Your First Admin Account

1. Visit `/admin/login`
2. Click on "Sign Up" tab
3. Create an account with your email and password
4. Your account will be created, but you won't have admin privileges yet

### Step 2: Grant Admin Privileges

You need to manually assign admin role to your first account. You have two options:

#### Option A: Using Backend Dashboard
1. Access your backend dashboard
2. Navigate to the SQL Editor
3. Run this query (replace with your email):
```sql
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'your-email@example.com';
```

#### Option B: Using Database Client
If you have direct database access, connect and run:
```sql
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'your-email@example.com';
```

### Step 3: Log In as Admin
1. Return to `/admin/login`
2. Sign in with your credentials
3. You'll be redirected to `/admin/messages`
4. You can now view and manage all contact submissions

## Usage

### Managing Contact Messages

**Status Workflow:**
- `new` → Message just received
- `read` → Admin has viewed the message
- `responded` → Admin has replied to the customer
- `archived` → Message is no longer active

**Dashboard Features:**
- Click any message to view full details
- Add internal notes for team collaboration
- Update status with one click
- Filter messages by status category
- View submission metadata for security monitoring

### Security Monitoring

The admin dashboard shows:
- IP addresses of submissions (for blocking spam)
- User agents (for identifying bots)
- Submission timestamps
- Rate limit violations

### Adding More Admins

Once logged in as admin, you can assign admin role to other users:
1. Have them create an account at `/admin/login`
2. As an existing admin, go to backend dashboard
3. Run:
```sql
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'new-admin@example.com';
```

## Security Features

### Rate Limiting
- **Client-side**: 60-second cooldown between submissions
- **Server-side**: 5 submissions per hour per IP address
- Both layers provide defense in depth

### Spam Prevention
- Honeypot fields (invisible to humans, trigger for bots)
- Spam keyword detection
- Content length validation
- Email format validation

### Data Protection
- Contact messages are not readable by public users
- Only authenticated admins can view submissions
- Generic error messages prevent information disclosure
- Audit trail tracks who handled each message

## Troubleshooting

### Can't Access Admin Dashboard
- Verify your account has admin role in `user_roles` table
- Check that you're logged in
- Clear browser cache and try again

### Rate Limit Issues
- Server-side rate limits reset after 1 hour
- Check `rate_limits` table in database
- To reset: `DELETE FROM public.rate_limits WHERE ip_address = 'xxx.xxx.xxx.xxx';`

### Messages Not Appearing
- Verify RLS policies are enabled on `contact_messages`
- Check that edge function `submit-contact` is deployed
- Review edge function logs for errors

## Database Tables

### `contact_messages`
Stores all contact form submissions with full audit trail.

### `user_roles`
Maps users to their roles (admin, moderator, user).

### `rate_limits`
Tracks submission attempts for rate limiting (auto-cleaned after 24 hours).

## API Endpoints

### `submit-contact` Edge Function
- Handles contact form submissions
- Validates input and checks spam
- Enforces rate limits
- Captures IP address and user agent
- Stores messages in database

## Next Steps

Consider these enhancements:
- Email notifications when new messages arrive
- Export messages to CSV
- Advanced filtering (date ranges, search)
- Multiple file attachments
- Integration with CRM systems
- Automated spam scoring
- IP blocklist management

## Support

If you encounter issues:
1. Check edge function logs in backend dashboard
2. Review RLS policies on tables
3. Verify user has admin role assigned
4. Check browser console for client-side errors
