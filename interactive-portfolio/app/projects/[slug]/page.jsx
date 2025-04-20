// app/projects/[slug]/page.js

// Dummy data - Replace this with your backend fetch or CMS call
const projects = [
    {
      slug: "interactive-ui",
      title: "Interactive UI Project",
      description: "A beautiful interactive UI built with React and Tailwind.",
    },
    {
      slug: "portfolio-v2",
      title: "Portfolio v2",
      description: "An upgraded portfolio with animation and dark mode.",
    },
  ];
  
  // Fetch single project
  async function getProject(slug) {
    return projects.find((project) => project.slug === slug);
  }
  
  // 1. generateMetadata (Dynamic SEO)
  export async function generateMetadata({ params }) {
    const project = await getProject(params.slug);
  
    if (!project) {
      return {
        title: "Project Not Found",
        description: "Sorry, the project you are looking for does not exist.",
      };
    }
  
    return {
      title: project.title,
      description: project.description,
    };
  }
  
  // 2. Page component
  export default async function ProjectPage({ params }) {
    const project = await getProject(params.slug);
  
    if (!project) {
      return <div className="p-8">Project not found.</div>;
    }
  
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-4">{project.description}</p>
      </div>
    );
  }