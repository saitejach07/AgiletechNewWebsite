import {
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Check,
  Sparkles,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import * as emailjs from '@emailjs/browser';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_r8azu5b', // ✅ Service ID
        'template_ao9kna6', // ✅ Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          subject: formData.subject,
          message: formData.message,
        },
        'ItAh88BhaVWtq7oME' // ✅ Public Key
      );

      setShowCelebration(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setShowCelebration(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert(
        'Failed to send message. Please try again or email us directly at contact@agiletechinc.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-[#0F172A] to-[#1E293B] relative"
    >
      {/* Success Overlay */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-12 max-w-md text-center animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-gradient-to-r from-[#22D3EE] to-[#A855F7] rounded-full mx-auto flex items-center justify-center mb-6 animate-bounce">
              <Check className="size-12 text-white" />
            </div>

            <h3 className="text-3xl mb-4 bg-gradient-to-r from-[#0F172A] to-[#22D3EE] bg-clip-text text-transparent">
              Message Sent Successfully!
            </h3>

            <p className="text-gray-600 text-lg mb-6">
              Thank you for reaching out. We’ll get back to you shortly.
            </p>

            <div className="flex items-center justify-center gap-2 text-[#22D3EE]">
              <Sparkles className="size-5 animate-pulse" />
              <span className="text-sm">Your inquiry is important to us</span>
              <Sparkles className="size-5 animate-pulse" />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl text-white">CONTACT</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <div className="bg-[#1E293B] rounded-2xl shadow-xl p-8 md:p-10 border border-white/10">
            <h3 className="text-3xl text-white mb-6">
              Interested in discussing?
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#0F172A] text-white border-gray-600"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#0F172A] text-white border-gray-600"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#0F172A] text-white border-gray-600"
                />
              </div>

              <Input
                name="subject"
                placeholder="Enter Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-[#0F172A] text-white border-gray-600"
              />

              <Textarea
                name="message"
                placeholder="Enter Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-[#0F172A] text-white border-gray-600"
              />

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#22D3EE] to-[#A855F7]"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send className="ml-2 size-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div className="bg-[#1E293B] rounded-2xl shadow-xl p-8 border border-white/10">
              <h3 className="text-3xl text-white mb-6">
                Get in touch with us
              </h3>

              {/* Social Media */}
              <div className="flex gap-4 mb-8">
                <a className="bg-[#3b5998] p-3 rounded-full">
                  <Facebook className="size-5 text-white" />
                </a>
                <a className="bg-[#1da1f2] p-3 rounded-full">
                  <Twitter className="size-5 text-white" />
                </a>
                <a className="bg-[#0077b5] p-3 rounded-full">
                  <Linkedin className="size-5 text-white" />
                </a>
                <a className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-3 rounded-full">
                  <Instagram className="size-5 text-white" />
                </a>
              </div>

              {/* CONTACT DETAILS */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#22D3EE] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="size-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg text-white mb-1">
                      Our Office Location
                    </h4>
                    <p className="text-gray-300">MN USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-[#22D3EE] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="size-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg text-white mb-1">
                      Email Address
                    </h4>
                    <a
                      href="mailto:contact@agiletechinc.com"
                      className="text-gray-300 hover:text-[#22D3EE] transition-colors"
                    >
                      contact@agiletechinc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-[#22D3EE] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="size-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg text-white mb-1">
                      Phone Number
                    </h4>
                    <p className="text-gray-300">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="bg-[#1E293B] h-64 rounded-2xl flex items-center justify-center border border-white/10">
              <div className="text-center text-white">
                <MapPin className="size-16 mx-auto mb-4 opacity-80" />
                <p className="text-xl">Map Location</p>
                <p className="text-sm opacity-80 mt-2">Minnesota, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




            //   {/* Contact Details */}
            //   <div className="space-y-6">
            //     <div className="flex items-start gap-4 group">
            //       <div className="bg-[#22D3EE] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
            //         <MapPin className="size-6 text-white" />
            //       </div>
            //       <div>
            //         <h4 className="text-lg text-white mb-1">Our Office Location</h4>
            //         <p className="text-gray-300">MN USA</p>
            //       </div>
            //     </div>

            //     <div className="flex items-start gap-4 group">
            //       <div className="bg-[#22D3EE] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
            //         <Mail className="size-6 text-white" />
            //       </div>
            //       <div>
            //         <h4 className="text-lg text-white mb-1">Email Address</h4>
            //         <a
            //           href="mailto:contact@agiletechinc.com"
            //           className="text-gray-300 hover:text-[#22D3EE] transition-colors"
            //         >
            //           contact@agiletechinc.com
            //         </a>
            //       </div>
            //     </div>

            //     <div className="flex items-start gap-4 group">
            //       <div className="bg-[#22D3EE] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
            //         <Phone className="size-6 text-white" />
            //       </div>
            //       <div>
            //         <h4 className="text-lg text-white mb-1">Phone Number</h4>
            //         <p className="text-gray-300">+1 (555) 123-4567</p>
            //       </div>
            //     </div>
            //   </div>
            // </div>