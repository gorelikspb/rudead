// Cloudflare Worker для "R U Dead?" app
// Вставь этот код в Cloudflare Dashboard → Workers & Pages → rudead → Edit code

export default {
  async fetch(request, env) {
    // CORS - разрешаем запросы с любого домена
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method === 'POST') {
      try {
        const data = await request.json();
        
        // Emergency notification for R U Dead? app
        if (data.type === 'emergency') {
          const emailHtml = `
            <h2>🚨 Emergency Alert</h2>
            <p><strong>User hasn't checked in for ${data.days_overdue} days!</strong></p>
            
            <h3>Contact Information:</h3>
            <ul>
              <li><strong>Name:</strong> ${data.contact_name || 'Not provided'}</li>
              <li><strong>Phone:</strong> ${data.contact_phone || 'Not provided'}</li>
              <li><strong>Email:</strong> ${data.contact_email || 'Not provided'}</li>
            </ul>
            
            <h3>Check-in Details:</h3>
            <ul>
              <li><strong>Last check-in:</strong> ${data.last_checkin}</li>
              <li><strong>Days overdue:</strong> ${data.days_overdue}</li>
            </ul>
            
            <p><strong>Please check on the user immediately!</strong></p>
            
            <hr>
            <p style="color: #666; font-size: 12px;">
              This is an automated alert from R U Dead? app.<br>
              If you received this by mistake, please ignore it.
            </p>
          `;
          
          const emailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${env.RESEND_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: 'R U Dead? <onboarding@resend.dev>',
              to: env.ADMIN_EMAIL,
              reply_to: data.contact_email || env.ADMIN_EMAIL,
              subject: `🚨 R U Dead? - User hasn't checked in for ${data.days_overdue} days`,
              html: emailHtml
            })
          });
          
          const emailResult = await emailResponse.json();
          
          if (!emailResponse.ok) {
            console.error('Resend API error:', emailResult);
            return new Response(JSON.stringify({ 
              success: false, 
              error: emailResult.message || 'Email sending failed',
              details: emailResult
            }), {
              status: 500,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              }
            });
          }
          
          return new Response(JSON.stringify({ success: true }), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }
        
        return new Response(JSON.stringify({ success: false, error: 'Unknown type' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    return new Response('Method not allowed', { status: 405 });
  }
}

