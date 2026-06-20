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
            <div className="bg-background border border-border rounded-xl shadow-lg px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="flex-1 text-sm text-muted-foreground">
                We use cookies to improve your experience on our site. By continuing, you agree to our use of cookies.{" "}
                <Link
                  to="/cookie-policy"
                  className="underline underline-offset-2 text-foreground hover:text-primary transition-colors"
                >
                  Learn more
                </Link>
                .
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleDecline}
                  className="h-9 px-4 rounded-md border border-border text-sm font-medium text-foreground/80 hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  data-testid="button-cookie-decline"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="h-9 px-4 rounded-md bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
