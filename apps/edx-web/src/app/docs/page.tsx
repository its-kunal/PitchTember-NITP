import Image from "next/image";
import Collabrate from "@/assets/Collabrate.svg";
import Learning from "@/assets/Learning.svg";
import Teaching from "@/assets/Teaching.svg";

export default function Page() {
  return (
    <div className="px-4 py-4 mx-2">
      <h1 className="text-3xl font-bold">
        ed<span className="text-red-500 skew-x-12 scale-150 text-4xl">X</span>
      </h1>
      <div className="h-3"></div>

      <p>
        edX is an open source e-learning platform, nowadays a lot of content was
        created and owned by edTech companies. So, edX is a platform where any
        teacher can share its content and any student can access to it for free.
        Also, users can interact with each other in discussion groups. Futher
        improve learning materials and can easily collaborate and work.
      </p>
      <div className="h-10"></div>
      <h1 className="text-3xl font-bold">
        Why ed
        <span className="text-red-500 skew-x-12 scale-150 text-4xl hover:skew-x-0">
          X
        </span>
        ?
      </h1>
      <div className="h-3"></div>
      <p>
        Learning material for all, no publication, no copyright only free
        content either generated by AI, Free Education for all. This platform
        will cover every topic, every subject, every skill.
      </p>
      <div className="h-10"></div>
      <div className="h-0.5 bg-gray-700 my-5 rounded-xl"></div>
      <div className="h-10"></div>
      <EdXPrinciples />
    </div>
  );
}

const principles = [
  {
    title: "Quality Education and Teaching",
    description:
      "EdX isn't just about access, it's about excellence. We partner with renowned educators and institutions to offer expert-curated content, rigorous academic standards, diverse learning paths, and continuous improvement.",
    actionText: "Visit our Content Library",
    actionLink: "/content-library",
    imageUrl: Teaching,
    altText: "Diverse learners engaged in EdX's interactive content",
  },
  {
    title: "Interactive and Organized Learning",
    description:
      "Passive learning is a thing of the past! EdX engages your mind and senses through dynamic elements, organized structure, personalization, and community interaction.",
    actionText: "Explore our Interactive Features",
    actionLink: "/interactive-features",
    imageUrl: Learning,
    altText: "Learners interacting with EdX's interactive elements",
  },
  {
    title: "Collaboration and Discussions",
    description:
      "Learning is not a solitary pursuit. EdX fosters a collaborative and discussion-driven environment with built-in communication tools, collaborative projects, global community forums, and expert support.",
    actionText: "Join our Community Hub",
    actionLink: "/community-hub",
    imageUrl: Collabrate,
    altText: "Learners collaborating on a project within EdX",
  },
];

function EdXPrinciples() {
  return (
    <div className="flex flex-col gap-y-16">
      {/* Loop through principles array and render each section*/}
      {principles.map((principle, index) => (
        <section key={index} className="text-center">
          <h2 className="text-3xl font-bold mb-4">{principle.title}</h2>
          <p className="text-lg">{principle.description}</p>
          <div className="h-10"></div>

          <div className="flex justify-center">
            <Image src={principle.imageUrl} alt="" className="h-56 w-fit" />
          </div>
          {/* Show additional components like cards based on content*/}
          {/* ... cards ... */}
        </section>
      ))}
    </div>
  );
}

// export default EdXPrinciples;
