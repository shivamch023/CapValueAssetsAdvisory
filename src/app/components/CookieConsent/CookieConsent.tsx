"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="max-w-3xl w-full mx-4 rounded-lg bg-[#0B0B0B] text-white p-8 shadow-2xl">
        
        <h2 className="text-2xl font-semibold mb-4">
          We use cookies to enhance your experience
        </h2>

        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Capvaluez Assets Advisory uses cookies and similar technologies to
          ensure the efficient functioning of our website, improve user
          experience, and understand how visitors interact with our services.
          Cookies help us remember your preferences, support secure access, and
          provide insights that allow us to deliver relevant content and
          advisory solutions.
          <br /><br />
          You may choose to accept all cookies or customise your preferences.
          Please note that disabling certain cookies may impact the
          functionality and performance of the website.
          <a
            href="/cookie-policy"
            className="underline ml-1 text-white"
          >
            Read our Cookie Policy
          </a>
        </p>

        <div className="flex flex-col sm:flex-row justify-end gap-4">
          <button className="text-sm underline text-gray-300 hover:text-white">
            Customize cookies
          </button>

          <button
            onClick={acceptCookies}
            className="bg-[#2F6FED] hover:bg-[#255ad1] text-white px-6 py-2 rounded-full text-sm font-medium"
          >
            Accept all cookies
          </button>
        </div>
      </div>
    </div>
  );
}
