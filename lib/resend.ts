import { Resend } from 'resend'

export async function sendNotificationEmail(data: Record<string, string>) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.NOTIFICATION_EMAIL || 'obi@tastcoffee.com'

  const fields = [
    ['Roastery Name', data.roasteryName],
    ['Contact Name', data.contactName],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Location', data.location],
    ['Website', data.website],
    ['Instagram', data.instagram ? `@${data.instagram}` : ''],
    ['Year Founded', data.yearFounded],
    ['How they heard about tāst', data.hearAbout],
    ['What interests them most', data.interest],
    ['Additional notes', data.notes],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')

  await resend.emails.send({
    from: 'tāst VRP <onboarding@resend.dev>',
    to,
    subject: `New VRP Application: ${data.roasteryName}`,
    text: `New Verified Roaster Partner application received.\n\n${fields}\n\nSubmitted at ${new Date().toISOString()}`,
  })
}
