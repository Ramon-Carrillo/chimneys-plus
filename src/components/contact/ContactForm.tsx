'use client'

import { useActionState } from 'react'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { submitContactForm, type FormState } from '@/app/contact/actions'

// ── Service dropdown options ──────────────────────────────────────

const SERVICE_OPTIONS = [
  { value: 'chimney-inspection-cleaning', label: 'Chimney Inspection & Cleaning' },
  { value: 'chimney-repair-rebuild',      label: 'Chimney Repair or Rebuild' },
  { value: 'chimney-liner-cap',           label: 'Chimney Liner or Cap' },
  { value: 'fireplace-stove-insert',      label: 'Fireplace or Wood Stove Insert' },
  { value: 'roofing',                     label: 'Roofing (Replacement or Repair)' },
  { value: 'siding-exterior',             label: 'Siding & Exterior Work' },
  { value: 'not-sure',                    label: "Not sure — I need an assessment" },
] as const

// ── Shared field/label styles ─────────────────────────────────────

const inputBase = [
  'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-foreground',
  'placeholder:text-muted-foreground/60',
  'outline-none transition-colors duration-150',
  'focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20',
].join(' ')

const inputError = 'border-destructive focus:border-destructive focus:ring-destructive/20'
const inputOk    = 'border-border'

// ─────────────────────────────────────────────────────────────────

const initialState: FormState = { status: 'idle' }

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  )

  // ── Success screen ────────────────────────────────────────────
  if (state.status === 'success') {
    return (
      <div
        role='alert'
        className='flex flex-col items-center gap-5 rounded-2xl border border-green-200 bg-green-50 px-8 py-14 text-center'>
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-green-100'>
          <CheckCircle2 className='h-8 w-8 text-green-600' strokeWidth={1.75} />
        </div>
        <div>
          <h3 className='font-heading text-xl font-bold text-green-800'>
            Message Sent!
          </h3>
          <p className='mt-2 text-sm leading-relaxed text-green-700'>
            {state.message}
          </p>
        </div>
      </div>
    )
  }

  // ── Form ──────────────────────────────────────────────────────
  const e = state.errors ?? {}

  return (
    <form action={formAction} noValidate className='flex flex-col gap-5'>

      {/* Top-level error banner */}
      {state.status === 'error' && state.message && (
        <div
          role='alert'
          className='flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/8 px-4 py-3 text-sm text-destructive'>
          <AlertCircle className='h-4 w-4 shrink-0' aria-hidden='true' />
          {state.message}
        </div>
      )}

      {/* ── Name ──────────────────────────────────────────────── */}
      <Field
        id='name'
        label='Full Name'
        required
        errors={e.name}>
        <input
          id='name'
          name='name'
          type='text'
          autoComplete='name'
          placeholder='Jane Smith'
          required
          aria-describedby={e.name ? 'name-error' : undefined}
          aria-invalid={!!e.name}
          className={`${inputBase} ${e.name ? inputError : inputOk}`}
        />
      </Field>

      {/* ── Phone + Email (side-by-side on sm+) ───────────────── */}
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
        <Field
          id='phone'
          label='Phone Number'
          required
          hint='We may call to confirm your appointment.'
          errors={e.phone}>
          <input
            id='phone'
            name='phone'
            type='tel'
            autoComplete='tel'
            placeholder='(608) 555-0100'
            required
            aria-describedby={e.phone ? 'phone-error' : 'phone-hint'}
            aria-invalid={!!e.phone}
            className={`${inputBase} ${e.phone ? inputError : inputOk}`}
          />
        </Field>

        <Field
          id='email'
          label='Email Address'
          required
          errors={e.email}>
          <input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            placeholder='jane@example.com'
            required
            aria-describedby={e.email ? 'email-error' : undefined}
            aria-invalid={!!e.email}
            className={`${inputBase} ${e.email ? inputError : inputOk}`}
          />
        </Field>
      </div>

      {/* ── Service ───────────────────────────────────────────── */}
      <Field
        id='service'
        label='Service Needed'
        required
        errors={e.service}>
        <select
          id='service'
          name='service'
          required
          defaultValue=''
          aria-describedby={e.service ? 'service-error' : undefined}
          aria-invalid={!!e.service}
          className={[
            inputBase,
            e.service ? inputError : inputOk,
            // native select needs explicit text color when placeholder value selected
            'text-foreground',
          ].join(' ')}>
          <option value='' disabled>
            Select a service…
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      {/* ── Message ───────────────────────────────────────────── */}
      <Field
        id='message'
        label='Message'
        hint='Describe the issue or what you need — the more detail, the better.'
        errors={e.message}>
        <textarea
          id='message'
          name='message'
          rows={4}
          placeholder='e.g. My chimney has a crack in the crown and I notice water coming in after heavy rain…'
          aria-describedby='message-hint'
          className={`${inputBase} ${e.message ? inputError : inputOk} resize-none`}
        />
      </Field>

      {/* ── Submit ────────────────────────────────────────────── */}
      <button
        type='submit'
        disabled={pending}
        className={[
          'mt-1 flex w-full items-center justify-center gap-2.5',
          'rounded-lg bg-brand-orange px-6 py-3.5',
          'font-heading text-sm font-bold text-white',
          'shadow-md shadow-brand-orange/30',
          'transition-all duration-200',
          'hover:bg-brand-orange-hover hover:shadow-lg hover:shadow-brand-orange/40',
          'active:scale-[0.98]',
          'disabled:cursor-not-allowed disabled:opacity-60',
        ].join(' ')}>
        {pending ? (
          <>
            <Loader2 className='h-4 w-4 animate-spin' aria-hidden='true' />
            Sending…
          </>
        ) : (
          'Get My Free Estimate'
        )}
      </button>

      <p className='text-center text-xs text-muted-foreground'>
        No spam, ever. We only use your contact info to respond to your request.
      </p>
    </form>
  )
}

// ── Field wrapper ─────────────────────────────────────────────────

type FieldProps = {
  id: string
  label: string
  required?: boolean
  hint?: string
  errors?: string[]
  children: React.ReactNode
}

function Field({ id, label, required, hint, errors, children }: FieldProps) {
  return (
    <div className='flex flex-col gap-1.5'>
      <label
        htmlFor={id}
        className='text-sm font-semibold text-foreground'>
        {label}
        {required && (
          <span className='ml-1 text-brand-orange' aria-hidden='true'>
            *
          </span>
        )}
      </label>

      {children}

      {hint && !errors?.length && (
        <p id={`${id}-hint`} className='text-xs text-muted-foreground'>
          {hint}
        </p>
      )}

      {errors?.map((err) => (
        <p
          key={err}
          id={`${id}-error`}
          role='alert'
          className='flex items-center gap-1.5 text-xs font-medium text-destructive'>
          <AlertCircle className='h-3.5 w-3.5 shrink-0' aria-hidden='true' />
          {err}
        </p>
      ))}
    </div>
  )
}
