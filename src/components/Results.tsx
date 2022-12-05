import { BeachCard } from "./BeachCard";
import { SubTitle } from "./SubTitle";

export function Results() {
  return (
    <div className="flex flex-col w-full">
      <SubTitle>Results</SubTitle>

      <div className="flex flex-row wrap w-full flex-wrap lg:-mx-2">
        {[1, 2, 4, 5, 6, 7, 8].map(() => (
          <div className="w-full lg:w-1/2 pb-4 lg:p-2">
            <BeachCard
              title="Lagoinha do lest"
              city="Florianópolis"
              image="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              review={4.5}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
