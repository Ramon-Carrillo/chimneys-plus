'use server'

import { z } from 'zod'
import { COMPANY } from '@/lib/constants'

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

  // ── Formspree email delivery ───────────────────────────────────
  //
  // Submissions POST to Formspree and are forwarded to
  // chimneyspluswisco@gmail.com. The form ID is public by design —
  // Formspree endpoints are meant to be used from front-end code.
  //
  // To change the notification email or add spam filters, log in to
  // https://formspree.io and edit the "Chimneys Plus Contact" form.
  // ──────────────────────────────────────────────────────────────

  const res = await fetch('https://formspree.io/f/xlgolerq', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(result.data),
  })

  if (!res.ok) {
    // Formspree returned a non-2xx status (e.g. rate limit, bad config).
    // Log the body in dev so you can diagnose quickly.
    if (process.env.NODE_ENV !== 'production') {
      console.error('[Formspree error]', await res.text())
    }
    return {
      status: 'error',
      message:
        `There was a problem sending your message. Please call us directly at ${COMPANY.phone.main}.`,
    }
  }

  return {
    status: 'success',
    message:
      `Thanks! We\u2019ll be in touch within one business day. For urgent matters, call us directly at ${COMPANY.phone.main}.`,
  }
}
