const rateLimit = new Map();

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'];
  const now = Date.now();
  const limit = 3;
  const window = 60000; // 1 minute

  if (rateLimit.has(ip)) {
    const { count, timestamp } = rateLimit.get(ip);
    if (now - timestamp < window) {
      if (count >= limit) {
        return {
          statusCode: 429,
          body: JSON.stringify({ error: 'Too many requests. Please try again later.' })
        };
      }
      rateLimit.set(ip, { count: count + 1, timestamp });
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now });
    }
  } else {
    rateLimit.set(ip, { count: 1, timestamp: now });
  }

  try {
    const { name, email, phone, message } = JSON.parse(event.body);
    
    console.log('Contact form submission:', { name, email, phone, message });
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message' })
    };
  }
};
