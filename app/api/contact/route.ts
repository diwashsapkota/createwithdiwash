import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting store
// In production, use Redis or a database for distributed systems
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 requests per 15 minutes
const MIN_FORM_TIME = 3000; // Minimum 3 seconds to fill form (prevents bots)

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetTime < now) {
      rateLimitStore.delete(key);
    }
  }
}, 60 * 1000); // Clean up every minute

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIP || 'unknown';
}

function sanitizeInput(input: string): string {
  // Remove potentially dangerous characters and trim
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove HTML brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .slice(0, 10000); // Max length
}

function validateInput(name: string, email: string, message: string): { valid: boolean; error?: string } {
  // Check for empty or whitespace-only fields
  if (!name || !name.trim() || name.length < 2) {
    return { valid: false, error: 'Name must be at least 2 characters' };
  }

  if (name.length > 100) {
    return { valid: false, error: 'Name is too long' };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  if (email.length > 254) {
    return { valid: false, error: 'Email is too long' };
  }

  // Check for common spam patterns in email
  const spamDomains = ['tempmail', 'guerrillamail', '10minutemail', 'throwaway'];
  const emailLower = email.toLowerCase();
  if (spamDomains.some(domain => emailLower.includes(domain))) {
    return { valid: false, error: 'Invalid email domain' };
  }

  // Validate message
  if (!message || !message.trim() || message.length < 10) {
    return { valid: false, error: 'Message must be at least 10 characters' };
  }

  if (message.length > 5000) {
    return { valid: false, error: 'Message is too long' };
  }

  // Check for suspicious patterns (too many links, spam keywords)
  const linkCount = (message.match(/https?:\/\//g) || []).length;
  if (linkCount > 3) {
    return { valid: false, error: 'Too many links in message' };
  }

  // Check for common spam keywords
  const spamKeywords = ['viagra', 'casino', 'lottery winner', 'click here now', 'limited time offer'];
  const messageLower = message.toLowerCase();
  if (spamKeywords.some(keyword => messageLower.includes(keyword))) {
    return { valid: false, error: 'Message contains prohibited content' };
  }

  return { valid: true };
}

function checkRateLimit(ip: string): { allowed: boolean; remaining?: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || record.resetTime < now) {
    // New IP or window expired, create new record
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false };
  }

  // Increment count
  record.count++;
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count };
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    
    // Rate limiting check
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, timestamp, website } = body;

    // Honeypot check - if this field is filled, it's a bot
    if (website && website.trim() !== '') {
      console.log('Bot detected via honeypot:', clientIP);
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Time-based validation - check if form was filled too quickly
    if (timestamp) {
      const timeSpent = Date.now() - timestamp;
      if (timeSpent < MIN_FORM_TIME) {
        console.log('Bot detected via time validation:', clientIP, timeSpent);
        return NextResponse.json(
          { error: 'Please take your time filling out the form' },
          { status: 400 }
        );
      }
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name || '');
    const sanitizedEmail = sanitizeInput(email || '').toLowerCase();
    const sanitizedMessage = sanitizeInput(message || '');

    // Validate inputs
    const validation = validateInput(sanitizedName, sanitizedEmail, sanitizedMessage);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error || 'Invalid input' },
        { status: 400 }
      );
    }

    // Additional checks
    // Check for suspicious patterns in name (too many special characters)
    const specialCharCount = (sanitizedName.match(/[^a-zA-Z\s]/g) || []).length;
    if (specialCharCount > sanitizedName.length * 0.3) {
      return NextResponse.json(
        { error: 'Invalid name format' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to a database
    // 2. Send an email notification
    // 3. Integrate with a CRM system
    
    // Log successful submission
    console.log('Contact form submission:', { 
      name: sanitizedName, 
      email: sanitizedEmail, 
      messageLength: sanitizedMessage.length,
      ip: clientIP,
      timestamp: new Date().toISOString()
    });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: 'Message received successfully' },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Remaining': rateLimit.remaining?.toString() || '0',
        }
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

