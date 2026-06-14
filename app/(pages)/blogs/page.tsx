import PageTitle from "@/app/conponents/common/pageTitle/page";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";

const Blogs = () => {
  const topics = [
    {
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern frontend frameworks, scalable backends, and databases.",
    },
    {
      title: "Frontend Engineering",
      description: "Crafting highly responsive, interactive, and user-centric interfaces focused on smooth animations and accessibility.",
    },
    {
      title: "Backend Systems & APIs",
      description: "Engineering secure databases, robust server architectures, and high-performance RESTful/GraphQL APIs.",
    },
    {
      title: "Performance Optimization",
      description: "Maximizing lighthouse scores, page speed, core web vitals, and asset management for optimal UX.",
    },
    {
      title: "Web Architecture",
      description: "Designing reliable development environments, microservices, serverless components, and DevOps flows.",
    },
    {
      title: "Freelancing & Digital Growth",
      description: "Insights on managing technical projects, scope definition, building brands, and launching products successfully.",
    },
  ];

  return (
    <section className="py-12 w-full">
      <PageTitle
        title="Insights, Technology & Development Expertise"
        description="Thoughtful articles, technical insights, and practical knowledge on full stack development, digital systems, performance optimization, and modern engineering practices."
      />

      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24">
        <div className="mb-10">
          <h5 className="text-2xl font-semibold mb-6">Topics Covered</h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="flex items-start gap-4 p-6 bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <BiCheck size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{topic.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed font-light">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5"
          >
            Explore All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
