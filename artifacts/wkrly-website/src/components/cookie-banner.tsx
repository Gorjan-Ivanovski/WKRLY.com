import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "wkrly_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
          className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div
              className="px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{ background: "#0c1a2b", border: "1px solid rgba(255,255,255,.09)", borderRadius: 14, boxShadow: "0 16px 48px rgba(0,0,0,.5)" }}
            >
              <p className="flex-1 text-sm" style={{ fontFamily: "'Manrope', sans-serif", color: "#92a6b8" }}>
                We use cookies to improve your experience on our site. By continuing, you agree to our use of cookies.{" "}
                <Link
                  to="/cookie-policy"
                  className="underline underline-offset-2 transition-colors"
                  style={{ color: "#eef3f7" }}
                >
                  Learn more
                </Link>
                .
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleDecline}
                  className="h-9 px-4 rounded-md text-sm font-medium transition-colors focus-visible:outline-none"
                  style={{ border: "1px solid rgba(255,255,255,.18)", color: "#cdd8e1", background: "transparent" }}
                  data-testid="button-cookie-decline"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="h-9 px-4 rounded-md text-sm transition-opacity focus-visible:outline-none"
                  style={{ background: "#34d6a6", color: "#08121f", fontFamily: "'Sora', sans-serif", fontWeight: 700 }}
                  data-testid="button-cookie-accept"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
