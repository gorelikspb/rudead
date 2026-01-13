// Cloudflare Worker для "Are You Dead?" app
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
        
        // Test email - send to contact's email to preview
        if (data.type === 'test') {
          const testEmailHtml = `
            <h2>🧪 TEST EMAIL - Preview</h2>
            <p style="background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0;">
              <strong>⚠️ This is a TEST email.</strong><br>
              This is what the emergency contact will receive if you don't check in for 4+ days.
            </p>
            
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
              This is an automated alert from Are You Dead? app.<br>
              If you received this by mistake, please ignore it.
            </p>
          `;
          
          // Try to send to contact's email first (if Resend allows)
          // If fails, fallback to ADMIN_EMAIL
          const targetEmail = data.contact_email && data.contact_email.includes('@') 
            ? data.contact_email 
            : env.ADMIN_EMAIL;
          
          const emailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${env.RESEND_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: 'Are You Dead? <onboarding@resend.dev>',
              to: targetEmail,
              reply_to: env.ADMIN_EMAIL,
              subject: `🧪 TEST: Are You Dead? - Preview (${data.days_overdue} days overdue)`,
              html: testEmailHtml
            })
          });
          
          let emailResult;
          try {
            emailResult = await emailResponse.json();
          } catch (jsonError) {
            // If JSON parsing fails, try to get text
            const errorText = await emailResponse.text();
            console.error('Failed to parse Resend response as JSON:', errorText);
            emailResult = { message: errorText || 'Unknown error from Resend API' };
          }
          
          if (!emailResponse.ok) {
            // If failed (e.g., Resend test mode restriction), send to ADMIN_EMAIL with note
            console.log('Failed to send to contact email, sending to admin:', emailResult);
            
            const fallbackResponse = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                from: 'Are You Dead? <onboarding@resend.dev>',
                to: env.ADMIN_EMAIL,
                reply_to: env.ADMIN_EMAIL,
                subject: `🧪 TEST EMAIL (for ${data.contact_email || 'contact'}) - Are You Dead? Preview`,
                html: `
                  <p style="background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107;">
                    <strong>⚠️ TEST EMAIL</strong><br>
                    This test email was requested by the user.<br>
                    <strong>Intended recipient:</strong> ${data.contact_email || 'Not provided'}<br>
                    <strong>Note:</strong> Resend test mode only allows sending to ${env.ADMIN_EMAIL}. 
                    For production, verify your domain in Resend to send to any email.
                  </p>
                  ${testEmailHtml}
                `
              })
            });
            
            let fallbackResult;
            try {
              fallbackResult = await fallbackResponse.json();
            } catch (jsonError) {
              const errorText = await fallbackResponse.text();
              console.error('Failed to parse fallback response as JSON:', errorText);
              return new Response(JSON.stringify({ 
                success: false, 
                error: errorText || 'Email sending failed - could not parse response',
                details: { status: fallbackResponse.status, text: errorText }
              }), {
                status: 500,
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*'
                }
              });
            }
            
            if (!fallbackResponse.ok) {
              return new Response(JSON.stringify({ 
                success: false, 
                error: fallbackResult.message || fallbackResult.error || 'Email sending failed',
                details: fallbackResult
              }), {
                status: 500,
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*'
                }
              });
            }
            
            // Fallback succeeded - return success with note
            return new Response(JSON.stringify({ 
              success: true,
              sentTo: env.ADMIN_EMAIL,
              note: `Sent to admin email (${env.ADMIN_EMAIL}) because Resend test mode restricts sending to other addresses. Intended recipient was: ${data.contact_email || 'Not provided'}`
            }), {
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              }
            });
          }
          
          return new Response(JSON.stringify({ 
            success: true,
            sentTo: targetEmail,
            note: targetEmail === env.ADMIN_EMAIL 
              ? 'Sent to admin email (Resend test mode). Verify domain to send to contact email.'
              : 'Sent to contact email'
          }), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }
        
        // Emergency notification for Are You Dead? app
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
              This is an automated alert from Are You Dead? app.<br>
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
              from: 'Are You Dead? <onboarding@resend.dev>',
              to: env.ADMIN_EMAIL,
              reply_to: data.contact_email || env.ADMIN_EMAIL,
              subject: `🚨 Are You Dead? - User hasn't checked in for ${data.days_overdue} days`,
              html: emailHtml
            })
          });
          
          let emailResult;
          try {
            emailResult = await emailResponse.json();
          } catch (jsonError) {
            const errorText = await emailResponse.text();
            console.error('Failed to parse Resend response as JSON:', errorText);
            return new Response(JSON.stringify({ 
              success: false, 
              error: errorText || 'Email sending failed - could not parse response',
              details: { status: emailResponse.status, text: errorText }
            }), {
              status: 500,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              }
            });
          }
          
          if (!emailResponse.ok) {
            console.error('Resend API error:', emailResult);
            return new Response(JSON.stringify({ 
              success: false, 
              error: emailResult.message || emailResult.error || 'Email sending failed',
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
        
        // Log email addresses to admin
        if (data.type === 'log_email') {
          const emailTypeLabels = {
            'contact': 'Emergency Contact',
            'test': 'Test Email',
            'emergency': 'Emergency Notification',
            'user': 'User Email (for sync)',
            'contact_dev': 'Contact Developer'
          };
          const emailTypeLabel = emailTypeLabels[data.email_type] || data.email_type;
          
          const logEmailHtml = `
            <h2>📧 ${emailTypeLabel === 'Contact Developer' ? 'Contact Message from User' : 'Email Address Logged'}</h2>
            <p><strong>Type:</strong> ${emailTypeLabel}</p>
            <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
            <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
            ${data.message ? `<p><strong>Message:</strong><br><div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0; white-space: pre-wrap; color: #333;">${data.message.replace(/\n/g, '<br>')}</div></p>` : ''}
            <p><strong>Timestamp:</strong> ${data.timestamp || new Date().toISOString()}</p>
            <hr>
            <p style="color: #666; font-size: 12px;">
              This is an automated ${emailTypeLabel === 'Contact Developer' ? 'contact message' : 'log'} from Are You Dead? app.<br>
              ${emailTypeLabel === 'Contact Developer' ? 'A user sent a message through the contact form.' : 'All email addresses entered by users are logged here for tracking purposes.'}
            </p>
          `;
          
          try {
            const logResponse = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                from: 'Are You Dead? <onboarding@resend.dev>',
                to: env.ADMIN_EMAIL,
                reply_to: env.ADMIN_EMAIL,
                subject: `📧 Email Logged: ${emailTypeLabel} - ${data.email || 'No email'}`,
                html: logEmailHtml
              })
            });
            
            const logResult = await logResponse.json();
            
            if (!logResponse.ok) {
              console.error('Failed to send log email:', logResult);
              return new Response(JSON.stringify({ 
                success: false, 
                error: 'Failed to send log email',
                details: logResult 
              }), {
                status: 500,
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*'
                }
              });
            }
            
            console.log('Log email sent successfully to:', env.ADMIN_EMAIL);
          } catch (logError) {
            console.error('Error sending log email:', logError);
            return new Response(JSON.stringify({ 
              success: false, 
              error: 'Error sending log email',
              details: logError.message 
            }), {
              status: 500,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              }
            });
          }
          
          return new Response(JSON.stringify({ success: true, logged: true }), {
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

