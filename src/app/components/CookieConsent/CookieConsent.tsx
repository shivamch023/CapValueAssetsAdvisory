"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Full width blurred background */}
      <div className="bg-white/80 backdrop-blur-md border-t border-yellow-200 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        
        {/* Content container */}
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Content */}
            <div className="text-sm text-gray-700 leading-relaxed">
              <h2 className="text-base font-semibold text-sky-700 mb-1">
                🍪 We use cookies to improve your experience
              </h2>
              <p>
                Capvaluez Assets Advisory uses cookies to ensure smooth website
                functionality, enhance user experience, and analyse engagement.
                Some cookies are essential for secure access and performance.
                <Link
                  href="/privacy-policy"
                  className="ml-1 underline text-sky-600 hover:text-sky-700"
                >
                  Read our Cookie Policy
                </Link>
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button className="text-sm underline text-gray-500 hover:text-gray-700">
                Customize cookies
              </button>

              <button
                onClick={acceptCookies}
                className="rounded-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 text-sm font-medium transition"
              >
                Accept all cookies
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
