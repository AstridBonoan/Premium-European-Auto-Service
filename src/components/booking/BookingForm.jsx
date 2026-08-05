import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { services } from '../../data/services';
import { brands } from '../../data/brands';
import { packages } from '../../data/packages';
import { validateBooking } from '../../utils/validation';

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  brand: '',
  model: '',
  year: '',
  mileage: '',
  service: '',
  packageId: '',
  preferredDate: '',
  notes: '',
};

export default function BookingForm() {
  const location = useLocation();
  const [values, setValues] = useState({
    ...initial,
    service: location.state?.service || '',
    packageId: location.state?.packageId || '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateBooking(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div
        className="border border-gold/40 bg-gold/10 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-display text-3xl font-semibold text-ink dark:text-offwhite">
          Request Received
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-ink/70 dark:text-silver/80">
          Thank you, {values.firstName}. Our service advisors will confirm your{' '}
          {values.preferredDate} appointment request within one business hour. A confirmation email
          will be sent to {values.email}.
        </p>
        <button
          type="button"
          className="btn-primary mt-8"
          onClick={() => {
            setSubmitted(false);
            setValues(initial);
          }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <fieldset>
        <legend className="font-display text-2xl font-semibold text-ink dark:text-offwhite">
          Customer Information
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={onChange}
            error={errors.firstName}
            required
          />
          <Field
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={onChange}
            error={errors.lastName}
            required
          />
          <Field
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            error={errors.email}
            required
          />
          <Field
            label="Phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={onChange}
            error={errors.phone}
            required
          />
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-display text-2xl font-semibold text-ink dark:text-offwhite">
          Vehicle Information
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="brand" className="label-field">
              Brand
            </label>
            <select
              id="brand"
              name="brand"
              className="input-field"
              value={values.brand}
              onChange={onChange}
              aria-invalid={!!errors.brand}
            >
              <option value="">Select brand</option>
              {brands.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
            {errors.brand && <ErrorText>{errors.brand}</ErrorText>}
          </div>
          <Field
            label="Model"
            name="model"
            value={values.model}
            onChange={onChange}
            error={errors.model}
            required
          />
          <Field
            label="Year"
            name="year"
            type="number"
            value={values.year}
            onChange={onChange}
            error={errors.year}
            required
          />
          <Field
            label="Mileage (optional)"
            name="mileage"
            type="number"
            value={values.mileage}
            onChange={onChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-display text-2xl font-semibold text-ink dark:text-offwhite">
          Service Selection
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="service" className="label-field">
              Service
            </label>
            <select
              id="service"
              name="service"
              className="input-field"
              value={values.service}
              onChange={onChange}
              aria-invalid={!!errors.service}
            >
              <option value="">Select service</option>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            {errors.service && <ErrorText>{errors.service}</ErrorText>}
          </div>
          <div>
            <label htmlFor="packageId" className="label-field">
              Package (optional)
            </label>
            <select
              id="packageId"
              name="packageId"
              className="input-field"
              value={values.packageId}
              onChange={onChange}
            >
              <option value="">None</option>
              {packages.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <Field
            label="Preferred Date"
            name="preferredDate"
            type="date"
            value={values.preferredDate}
            onChange={onChange}
            error={errors.preferredDate}
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="notes" className="label-field">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className="input-field"
            value={values.notes}
            onChange={onChange}
            placeholder="Symptoms, preferred times, or special requests"
          />
        </div>
      </fieldset>

      <button type="submit" className="btn-primary">
        Submit Appointment Request
      </button>
    </form>
  );
}

function Field({ label, name, error, required, ...props }) {
  return (
    <div>
      <label htmlFor={name} className="label-field">
        {label}
        {required ? ' *' : ''}
      </label>
      <input
        id={name}
        name={name}
        className="input-field"
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        required={required}
        {...props}
      />
      {error && <ErrorText id={`${name}-error`}>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children, id }) {
  return (
    <p id={id} className="mt-1 text-xs text-red-700" role="alert">
      {children}
    </p>
  );
}
