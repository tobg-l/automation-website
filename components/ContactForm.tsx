"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Card from "./ui/Card";

export default function ContactForm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    process: "",
    frequency: "",
    timeSpent: "",
    budget: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.process.trim()) newErrors.process = "Please describe the process";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Option 1: Use API route (recommended for custom backend)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Option 2: Use FormSpree (uncomment and configure)
      // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      // Success
      alert("Thank you for your inquiry. I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        company: "",
        process: "",
        frequency: "",
        timeSpent: "",
        budget: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-4 pb-4 md:pt-6 md:pb-6 border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate aria-label="Contact form">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-foreground-light font-medium"
                  style={{ fontSize: "0.875rem" }}
                >
                  Name <span className="text-foreground-medium">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`px-4 py-3 rounded-lg text-foreground-white transition-all duration-300 ${
                    errors.name
                      ? "border-red-500"
                      : "border-white/10 focus:border-accent-blue-40 focus:shadow-[0_0_0_3px_rgba(26,35,50,0.2)]"
                  }`}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "16px", // Prevents zoom on iOS
                  }}
                />
                {errors.name && (
                  <span className="text-red-400 text-sm" role="alert" aria-live="polite">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-foreground-light font-medium"
                  style={{ fontSize: "0.875rem" }}
                >
                  Email <span className="text-foreground-medium">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`px-4 py-3 rounded-lg text-foreground-white transition-all duration-300 ${
                    errors.email
                      ? "border-red-500"
                      : "border-white/10 focus:border-accent-blue-40 focus:shadow-[0_0_0_3px_rgba(26,35,50,0.2)]"
                  }`}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "16px", // Prevents zoom on iOS
                  }}
                />
                {errors.email && (
                  <span className="text-red-400 text-sm" role="alert" aria-live="polite">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="company"
                  className="text-foreground-light font-medium"
                  style={{ fontSize: "0.875rem" }}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg text-foreground-white border-white/10 focus:border-accent-blue-40 focus:shadow-[0_0_0_3px_rgba(26,35,50,0.2)] transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "16px", // Prevents zoom on iOS
                  }}
                />
              </div>

              {/* Process Description */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="process"
                  className="text-foreground-light font-medium"
                  style={{ fontSize: "0.875rem" }}
                >
                  What process do you want to automate?{" "}
                  <span className="text-foreground-medium">*</span>
                </label>
                <textarea
                  id="process"
                  name="process"
                  value={formData.process}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`px-4 py-3 rounded-lg text-foreground-white transition-all duration-300 resize-none ${
                    errors.process
                      ? "border-red-500"
                      : "border-white/10 focus:border-accent-blue-40 focus:shadow-[0_0_0_3px_rgba(26,35,50,0.2)]"
                  }`}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "16px", // Prevents zoom on iOS
                    lineHeight: "1.6",
                  }}
                />
                {errors.process && (
                  <span className="text-red-400 text-sm" role="alert" aria-live="polite">
                    {errors.process}
                  </span>
                )}
              </div>

              {/* Frequency */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="frequency"
                  className="text-foreground-light font-medium"
                  style={{ fontSize: "0.875rem" }}
                >
                  How often does this process run?
                </label>
                <select
                  id="frequency"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg text-foreground-white border-white/10 focus:border-accent-blue-40 focus:shadow-[0_0_0_3px_rgba(26,35,50,0.2)] transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "16px", // Prevents zoom on iOS
                  }}
                >
                  <option value="">Select frequency</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="ad-hoc">Ad-hoc</option>
                </select>
              </div>

              {/* Time Spent */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="timeSpent"
                  className="text-foreground-light font-medium"
                  style={{ fontSize: "0.875rem" }}
                >
                  Estimated time spent manually per week
                </label>
                <input
                  type="text"
                  id="timeSpent"
                  name="timeSpent"
                  value={formData.timeSpent}
                  onChange={handleChange}
                  placeholder="e.g., 5-10 hours"
                  className="px-4 py-3 rounded-lg text-foreground-white border-white/10 focus:border-accent-blue-40 focus:shadow-[0_0_0_3px_rgba(26,35,50,0.2)] transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "16px", // Prevents zoom on iOS
                  }}
                />
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="budget"
                  className="text-foreground-light font-medium"
                  style={{ fontSize: "0.875rem" }}
                >
                  Budget range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg text-foreground-white border-white/10 focus:border-accent-blue-40 focus:shadow-[0_0_0_3px_rgba(26,35,50,0.2)] transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "16px", // Prevents zoom on iOS
                  }}
                >
                  <option value="">Select budget range</option>
                  <option value="500-1000">€500-€1000</option>
                  <option value="1000-2000">€1000-€2000</option>
                  <option value="2000+">€2000+</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 rounded-xl bg-foreground-white text-black-000 font-medium hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontSize: "1rem" }}
                aria-label={isSubmitting ? "Submitting form" : "Submit contact form"}
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

