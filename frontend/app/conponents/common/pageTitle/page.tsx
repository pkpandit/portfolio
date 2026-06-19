"use client";

const PageTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <header className="mb-12 w-full px-8 sm:px-10 lg:px-12 xl:px-24">
      <h2 className="font-bold mb-6 text-4xl">{title}</h2>
      <p className="font-light mb-6 text-base md:text-lg text-foreground/80 block">
        {description}
      </p>
    </header>
  );
};

export default PageTitle;
