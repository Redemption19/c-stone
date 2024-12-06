import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional, but if provided should be valid)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare the template params
      const templateParams = {
        to_name: 'Website Owner', // Replace with the name you want to appear in the email
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
      };

      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!, 
        templateParams
      );

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setErrors({});
      setSubmitStatus('success');
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the specific error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-transparent 
                ${errors.name 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:ring-green-500'
                }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-transparent 
                ${errors.email 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:ring-green-500'
                }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-transparent 
                ${errors.phone 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:ring-green-500'
                }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-transparent 
                ${errors.subject 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:ring-green-500'
                }`}
            >
              <option value="">Select a subject</option>
              <option value="financial-services">Financial Services</option>
              <option value="livestock">Livestock Supply</option>
              <option value="telecommunications">Telecommunications</option>
              <option value="partnership">Partnership Opportunities</option>
              <option value="other">Other</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {errors.subject}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-transparent 
              ${errors.message 
                ? 'border-red-500 focus:ring-red-200' 
                : 'border-gray-300 focus:ring-green-500'
              }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" /> {errors.message}
            </p>
          )}
        </div>

        {submitStatus === 'success' && (
          <div className="text-green-600 text-center mb-4 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 mr-2" />
            Your message has been sent successfully!
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="text-red-600 text-center mb-4 flex items-center justify-center">
            <AlertCircle className="w-6 h-6 mr-2" />
            Failed to send message. Please try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;