// "use client";

// import CountUp from "react-countup";
// import { motion, useAnimation,easeOut } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";


// const stats = [
//   { label: "Years of Professional Expertise ", value: 30 , suffix: "+" },
//   { label: "Successful Consultations", value: 50, suffix: "+" },
//   { label: "Trusted Investors & Partners ", value: 75, suffix: "+" },
//   { label: "Client & Partner Trust", value: 100, suffix: "%" },
// ];

// export default function StatsSection() {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.25,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//  const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.7,
//       ease: easeOut, // ✅ FIXED
//     },
//   }),
// };


//   return (
//     <section className="w-full flex items-center px-4 py-16 bg-[#F3F4F6]">
//       <div className="container max-w-7xl mx-auto    flex items-center justify-center mx-auto" ref={ref}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               animate={controls}
//               className="group p-6 rounded-lg bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* NUMBER */}
//               <motion.p
//   className="md:text-5xl text-3xl font-extrabold font-mono tracking-tight
//              text-transparent bg-clip-text
//              bg-gradient-to-r from-[#1B2D5C] via-[#142964] to-[#C9A240]"
//   whileHover={{ scale: 1.1 }}
//   transition={{ type: "spring", stiffness: 200, damping: 15 }}
// >
//   {inView && (
//     <CountUp
//       end={stat.value}
//       duration={2.5}
//       suffix={stat.suffix}
//     />
//   )}
// </motion.p>


//               {/* LABEL */}
//               <p className="text-gray-500 mt-2 text-sm transition-colors duration-300 group-hover:text-gray-700">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiBriefcase, FiCheckCircle, FiUsers, FiShield } from "react-icons/fi";

const stats = [
  {
    value: 30,
    suffix: "+",
    label: "Years of Experience",
    icon: FiBriefcase,
  },
  {
    value: 10,
    suffix: "+",
    label: "Successful Consultations",
    icon: FiCheckCircle,
  },
  {
    value: 25,
    suffix: "+",
    label: "Trusted Partners",
    icon: FiUsers,
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Trust",
    icon: FiShield,
  },
];

export default function OurJourneySection() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  /* 🔍 Observe when stats come into view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  /* 🔢 Slow count animation */
  useEffect(() => {
    if (!hasStarted) return;

    stats.forEach((stat, index) => {
      let current = 0;
      const duration = 2500; // slow & premium
      const steps = 60;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        current += increment;

        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, duration / steps);
    });
  }, [hasStarted]);

  return (
    <section className="md:py-6 py-0 px-4 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-7">
         

          <h2 className="text-2xl md:text-4xl font-bold text-[#0B1D3A] mb-6 mt-4">
            Our Journey So Far
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            The founders of CapValuez have been advising clients independently
            for several years through an independent consulting structure.
            With a clear intent to create higher impact, extend reach, and
            deliver consistent, brand-led solutions, CapValuez was conceived
            as a distinct advisory brand.
          </p>

          <p className="text-gray-600 leading-relaxed">
            CapValue Assets Advisory Private Limited was recently incorporated
            to provide a formal and scalable structure for this vision.
          </p>

          {/* STATS */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10"
          >
            {stats.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-gray-300/20  rounded-xl p-6 text-center
                  shadow-xs hover:shadow-lg transition-all duration-500"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full
                    bg-[#C9A240]/10 text-[#C9A240]
                    group-hover:bg-[#C9A240] group-hover:text-white transition"
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B1D3A]">
                    {counts[i]}
                    {item.suffix}
                  </h3>

                  <p className="text-xs text-gray-500 mt-2">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            className="group relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]
            rounded-full border-[8px] border-[#C9A240]
            overflow-hidden shadow-xl
            transition-all duration-500 ease-out
            hover:border-[#0B1D3A] hover:shadow-2xl"
          >
            <Image
              src="/assets/banner/journey.jpg"
              alt="CapValue Journey"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
