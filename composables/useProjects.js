// Projects are ordered by the number that prefixes their file name
// (1.foo.md, 2.bar.md, ... 10.baz.md). Nuxt Content sorts file names as
// text, which would put 10 before 2, so the number is compared here.
const fileOrder = (project) => {
  const number = Number.parseInt(project.stem.split("/").pop(), 10);
  return Number.isNaN(number) ? Number.MAX_SAFE_INTEGER : number;
};

export const useProjects = () =>
  useAsyncData("projects", async () => {
    const projects = await queryCollection("projects").all();
    return projects.sort((a, b) => fileOrder(a) - fileOrder(b));
  });
