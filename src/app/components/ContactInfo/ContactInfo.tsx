"use client";
import { motion } from "framer-motion";

export default function ContactInfo() {
  const headingText = "Contact Info";

  return (
    <section className="w-full px-4 md:px-12 py-10 bg-[#010913] text-white">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-3xl md:text-5xl font-extrabold mb-11"
      >
        {headingText.split("").map((char, index) => {
          const color =
            index % 3 === 0
              ? "#FFD700"
              : index % 3 === 1
              ? "#CCCCCC"
              : "#FFFFFF";
          const showUnderline = color !== "#CCCCCC";

          return (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`relative inline-block ${char === " " ? "w-2" : ""}`}
              style={{ color }}
            >
              {char}
              {showUnderline && (
                <motion.span
                  className="absolute left-0 bottom-0 h-[2px] w-full"
                  style={{ backgroundColor: color, transformOrigin: "left" }}
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.05,
                  }}
                />
              )}
            </motion.span>
          );
        })}
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left: Google Map */}
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg p-2 border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.307258911098!2d77.09163117396498!3d28.849315012245684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda05c70aa0df%3A0x50a94cb9cfad2780!2sNarela%2C%20Delhi%2C%20110040!5e0!3m2!1sen!2sin!4v1710278926630!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Right: Text with Background Image & Animation */}
        <div className="flex items-center justify-center  shadow-md  p-2 border border-gray-700 rounded-lg  bg-cover bg-center bg-no-repeat ">
            <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex w-full h-full items-center justify-center rounded-lg shadow-md  bg-cover bg-center bg-no-repeat p-2 border border-gray-700"
          style={{
            backgroundImage: `url('/assets/brands/conttt.jpg')`, // Replace with your image path
          }}
        >
          <div className="p-6 rounded-md bg-yellow-500 text-gray-900 text-lg leading-relaxed text-center md:text-center shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold tracking-wide mb-2 drop-shadow-md">
              Our Location
            </h3>
            <p className="text-gray-900/90 font-medium drop-shadow-sm">
              Near Main Market,
              <br />
              Narela, Delhi - 110040
              <br />
              <span className="block mt-3">
                📞 <strong>+91-9876543210</strong>
              </span>
              <span className="block">
                📧 <strong>info@yourwebsite.com</strong>
              </span>
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
