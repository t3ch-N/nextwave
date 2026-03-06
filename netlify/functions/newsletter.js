exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { email } = JSON.parse(event.body);
    
    // Add email service integration here (Mailchimp, ConvertKit, etc.)
    console.log('Newsletter subscription:', email);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscribed successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to subscribe' })
    };
  }
};
