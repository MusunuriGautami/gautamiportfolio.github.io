import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, FileText } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import SpotlightButton from './SpotlightButton';
import SpotlightCard from './SpotlightCard';
import BorderGlow from './BorderGlow';
import TiltedCard from './TiltedCard';

const inputStyle = {
  padding: '1rem',
  background: 'rgba(25, 25, 25, 0.45)',
  border: '1px solid var(--color-glass-border)',
  borderRadius: 'var(--radius-sm)',
  fontFamily: 'inherit',
  fontSize: '1rem',
  color: 'var(--color-text-primary)',
  outline: 'none',
  transition: 'var(--transition-smooth)',
  width: '100%',
  boxSizing: 'border-box',
};

const errorStyle = {
  fontSize: '0.8rem',
  color: '#f87171',
  marginTop: '0.25rem',
};

const Contact = () => {
  const [state, handleSubmit] = useForm("xdavkjld");

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Get In Touch</h2>
          <p className="section-subtitle">
            Open to opportunities and collaborations.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ height: '100%' }}
          >
            <TiltedCard rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
              <BorderGlow borderRadius={16} glowRadius={30} animated={false} style={{ height: '100%' }}>
                <SpotlightCard className="glass-card" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
                      Let's discuss your next project.
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                      I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ padding: '0.75rem', background: 'var(--color-glass-bg)', border: '1px solid var(--color-glass-border)', borderRadius: '50%', color: 'var(--color-text-primary)' }}>
                        <Mail size={20} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: '500' }}>Email</p>
                        <a href="mailto:gautamimusunuri@gmail.com" style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>gautamimusunuri@gmail.com</a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ padding: '0.75rem', background: 'var(--color-glass-bg)', border: '1px solid var(--color-glass-border)', borderRadius: '50%', color: 'var(--color-text-primary)' }}>
                        <Phone size={20} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: '500' }}>Phone</p>
                        <a href="tel:+918459304881" style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>+91 8459304881</a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ padding: '0.75rem', background: 'var(--color-glass-bg)', border: '1px solid var(--color-glass-border)', borderRadius: '50%', color: 'var(--color-text-primary)' }}>
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: '500' }}>Location</p>
                        <p style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>Rajahmundry, A.P</p>
                      </div>
                    </div>

                    {/* View Resume Button */}
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        marginTop: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'var(--color-glass-bg)',
                        border: '1px solid var(--color-glass-border)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--color-text-primary)',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'background 0.2s, border-color 0.2s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--color-glass-bg)';
                        e.currentTarget.style.borderColor = 'var(--color-glass-border)';
                      }}
                    >
                      <FileText size={18} />
                      Download Resume
                    </a>
                  </div>
                </SpotlightCard>
              </BorderGlow>
            </TiltedCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ height: '100%' }}
          >
            <TiltedCard rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
              <BorderGlow borderRadius={16} glowRadius={30} animated={false} style={{ height: '100%' }}>
                <SpotlightCard className="glass-card" style={{ padding: '2.5rem', height: '100%' }}>

                  <AnimatePresence mode="wait">
                    {/* ✅ Success State */}
                    {state.succeeded && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%',
                          gap: '1.5rem',
                          textAlign: 'center',
                          padding: '2rem 0',
                        }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                        >
                          <CheckCircle size={64} style={{ color: '#4ade80' }} />
                        </motion.div>
                        <div>
                          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                            Message Sent Successfully!
                          </h3>
                          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                            Thank you for reaching out. I'll get back to you as soon as possible.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* ❌ Error State */}
                    {!state.succeeded && state.errors && state.errors.length > 0 && (
                      <motion.div
                        key="error-banner"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '1rem',
                          background: 'rgba(239, 68, 68, 0.12)',
                          border: '1px solid rgba(239, 68, 68, 0.35)',
                          borderRadius: 'var(--radius-sm)',
                          marginBottom: '1rem',
                          color: '#f87171',
                          fontSize: '0.9rem',
                        }}
                      >
                        <XCircle size={20} style={{ flexShrink: 0 }} />
                        <span>Message delivery failed. Please check your inputs and try again.</span>
                      </motion.div>
                    )}

                    {/* 📝 Form */}
                    {!state.succeeded && (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%', justifyContent: 'center' }}
                      >
                        {/* Full Name */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="      "
                            required
                            style={inputStyle}
                            onFocus={(e) => e.target.style.background = 'rgba(45, 45, 45, 0.55)'}
                            onBlur={(e) => e.target.style.background = 'rgba(25, 25, 25, 0.45)'}
                          />
                          <ValidationError prefix="Name" field="name" errors={state.errors} style={errorStyle} />
                        </div>

                        {/* Email */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="   "
                            required
                            style={inputStyle}
                            onFocus={(e) => e.target.style.background = 'rgba(45, 45, 45, 0.55)'}
                            onBlur={(e) => e.target.style.background = 'rgba(25, 25, 25, 0.45)'}
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} style={errorStyle} />
                        </div>

                        {/* Message */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>Your Message</label>
                          <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Send a Message...."
                            required
                            style={{ ...inputStyle, resize: 'vertical' }}
                            onFocus={(e) => e.target.style.background = 'rgba(45, 45, 45, 0.55)'}
                            onBlur={(e) => e.target.style.background = 'rgba(25, 25, 25, 0.45)'}
                          />
                          <ValidationError prefix="Message" field="message" errors={state.errors} style={errorStyle} />
                        </div>

                        <SpotlightButton
                          as="button"
                          type="submit"
                          disabled={state.submitting}
                          className="primary"
                          style={{ marginTop: '1rem', padding: '1rem', width: '100%', opacity: state.submitting ? 0.7 : 1, cursor: state.submitting ? 'not-allowed' : 'pointer' }}
                        >
                          <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                          <Send size={18} />
                        </SpotlightButton>
                      </motion.form>
                    )}
                  </AnimatePresence>

                </SpotlightCard>
              </BorderGlow>
            </TiltedCard>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
