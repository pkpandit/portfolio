import Link from "next/link";

const MyStatements = ({
  titleStatements,
  descrStatements,
}: {
  titleStatements: string;
  descrStatements: string;
}) => {
  return (
    <section className="w-full px-8 sm:px-10 lg:px-12 xl:px-24 py-16 bg-background">
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-750 rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-500/15 text-white text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="font-extrabold mb-3 text-3xl md:text-4xl tracking-tight">{titleStatements}</h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed font-light">
            {descrStatements}
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white hover:bg-neutral-50 text-blue-600 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-sm text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyStatements;
