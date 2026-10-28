import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { TeamMembers } from "./team";

export default async function AboutUs() {

  return (
    <main className="mx-auto max-w-8xl flex w-full flex-col px-6 py-8 sm:px-10 sm:py-12">
      <section className="flex flex-1 flex-col justify-center py-5">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          They're bigger, they're badder, they're lazier...
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          THE BSG "TEAM"
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Whilst no one has any obligation to take part, these are the folk who've been in the mix from the beginning.
        </p>
      </section>

      <section className="w-full items-between flex flex-wrap justify-center gap-6 gap-y-12 mt-6">
        {TeamMembers.map((member, i) => (
          <Card className="w-full lg:max-w-19/40 flex gap-3" key={i}>
            <CardContent className="w-full flex flex-col md:flex-row items-center gap-3">
              {i % 2 == 0 && <span className="rounded-full w-64 aspect-square bg-red-500 hidden md:block"></span>}
              <span className="rounded-full w-64 aspect-square bg-red-500 md:hidden"></span>
              <div className="md:max-w-3/5 float-right flex flex-col items-center md:items-start">
                <CardTitle>{member.name} </CardTitle>
                <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href={member.link}>{member.link}</a>
                <div className="my-2">
                  {member.tags && member.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 ">
                      {member.tags.map((tag, index) => (
                        <span key={index} className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-2xs md:text-sm shrink flex items-center">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <CardDescription className="w-full">{member.description}</CardDescription>
              </div>
              {i % 2 != 0 && <span className="rounded-full w-64 aspect-square bg-red-500 hidden md:block"></span>}
            </CardContent>
          </Card>
        ))}
      </section>
    </main>

  );
}