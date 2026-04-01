'use server'

import { z } from 'zod'

// ── Service options (kept in sync with ContactForm dropdown) ──────

const SERVICE_VALUES = [
  'chimney-inspection-cleaning',
  'chimney-repair-rebuild',
  'chimney-liner-cap',
  'fireplace-stove-insert',
  'roofing',
  'siding-exterior',
  'not-sure',
] as const

// ── Validation schema ─────────────────────────────────────────────

const ContactSchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your full name.')
    .max(100, 'Name is too long.'),
  phone: z
    .string()
    .regex(
      /^[\d\s()\-+.]{7,20}$/,
      'Please enter a valid phone number.',
    ),
  email: z.string().email('Please enter a valid email address.'),
  service: z
    .string()
    .refine(
      (val) => (SERVICE_VALUES as readonly string[]).includes(val),
      { message: 'Please select a service.' },
    ),
  message: z.string().max(2000, 'Message is too long.').optional(),
})

// ── Shared state type ─────────────────────────────────────────────

export type FormState = {
  status: 'idle' | 'success' | 'error'
  errors?: Partial<
    Record<'name' | 'phone' | 'email' | 'service' | 'message', string[]>
  >
  message?: string
}

// ── Server Action ─────────────────────────────────────────────────

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const raw = {
    name:    formData.get('name'),
    phone:   formData.get('phone'),
    email:   formData.get('email'),
    service: formData.get('service'),
    message: formData.get('message') ?? '',
  }

  const result = ContactSchema.safeParse(raw)

  if (!result.success) {
    return {
      status: 'error',
      errors: result.error.flatten().fieldErrors as FormState['errors'],
      message: 'Please fix the errors below and try again.',
    }
  }

  // ── Swap this block for your email provider ────────────────────
  //
  //   Formspree (no backend needed):
  //     await fetch('https://formspree.io/f/{YOUR_FORM_ID}', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  //       body: JSON.stringify(result.data),
  //     })
  //
  //   Resend (node mailer alternative):
  //     await resend.emails.send({
  //       from: 'no-reply@chimneysplus.com',
  //       to: 'chimneyspluswisco@gmail.com',
  //       subject: `New estimate request from ${result.data.name}`,
  //       html: `<pre>${JSON.stringify(result.data, null, 2)}</pre>`,
  //     })
  //
  //   EmailJS (client-side alternative — move logic to ContactForm):
  //     emailjs.send(SERVICE_ID, TEMPLATE_ID, result.data, PUBLIC_KEY)
  //
  // ──────────────────────────────────────────────────────────────
  console.log('[Contact Form Submission]', result.data)

  return {
    status: 'success',
    message:
      "Thanks! We\u2019ll be in touch within one business day. For urgent matters, call us directly at (608)\u00a0738-1268.",
  }
}
