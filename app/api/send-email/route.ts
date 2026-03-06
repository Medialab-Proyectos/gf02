import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, interest } = await request.json()

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Garagefolio <onboarding@resend.dev>',
        to: ['colombiamarket79@gmail.com'],
        subject: 'New Garagefolio Waitlist Signup',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #C9B68F; margin-top: 20px;">New Waitlist Signup</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Interest:</strong> ${interest}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error('[v0] Resend API error:', data)
      throw new Error(data.message || 'Failed to send email')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[v0] Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
