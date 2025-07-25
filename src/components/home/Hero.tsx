// components/sections/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        ¡Hola! Soy <span className="text-blue-600">Jhon Cárdenas</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-6">
        Desarrollador Frontend enfocado en React. Construyo interfaces
        limpias, funcionales y enfocadas en experiencia de usuario.
      </p>
      <a
        href="#contacto"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Contáctame
      </a>
    </section>
  );
}
