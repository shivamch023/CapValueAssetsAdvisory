"use client"
import { services } from '@/app/data/services';
import Image from 'next/image';
import React from 'react';

interface Props {
  params: Promise<{ slug: string }>; // Update params to be a Promise
}

const ServiceDetail: React.FC<Props> = ({ params }) => {
  const [slug, setSlug] = React.useState<string | null>(null);

  React.useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  if (!slug) {
    return (
      <p className="text-center text-blue-500 mt-12 font-semibold text-xl">
        Loading service details...
      </p>
    );
  }

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <p className="text-center text-red-500 mt-12 font-semibold text-xl">
        Service not found!
      </p>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4 md:px-12 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">{service.title}</h1>
        <Image
          src={service.image}
          alt={service.title}
          width={800}
          height={500}
          className="w-full h-auto rounded-xl shadow-md mb-6 object-cover"
        />
        <p className="text-lg leading-relaxed">{service.description}</p>
      </div>
    </section>
  );
}

export default ServiceDetail;