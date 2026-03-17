import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Mail, User, MessageSquare, Phone } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "I'm interested in scheduling a call",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.trim();

      if (!whatsappNumber) {
        throw new Error("WhatsApp number is not configured yet.");
      }

      const whatsappMessage = `
New Schedule Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Message: ${formData.message}
      `.trim();

      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappLink, "_blank", "noopener,noreferrer");

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "I'm interested in scheduling a call",
      });

      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to open WhatsApp right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-black"
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-2 dark:border-white/10">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Schedule a Call</h2>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-white/10"
                aria-label="Close contact form"
                title="Close contact form"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </motion.button>
            </div>

            <div className="px-5 py-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20"
                  >
                    <div className="h-8 w-8 rounded-full bg-green-500" />
                  </motion.div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Opening WhatsApp
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Send the message to confirm your call.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <User className="mr-2 inline h-4 w-4" />
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-gray-900 transition-all placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-400"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                    <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Mail className="mr-2 inline h-4 w-4" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-gray-900 transition-all placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-400"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Phone className="mr-2 inline h-4 w-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-gray-900 transition-all placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-400"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                    <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Calendar className="mr-2 inline h-4 w-4" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Clock className="mr-2 inline h-4 w-4" />
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                    <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <MessageSquare className="mr-2 inline h-4 w-4" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-gray-900 transition-all placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-400"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-premium mt-4 w-full rounded-lg bg-brand-500 py-2 font-semibold text-black transition-all hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? "Opening WhatsApp..." : "Send to WhatsApp"}
                  </motion.button>

                  {error ? <p className="text-center text-xs text-red-500 dark:text-red-400">{error}</p> : null}

                  <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                    We'll confirm your call through WhatsApp
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
