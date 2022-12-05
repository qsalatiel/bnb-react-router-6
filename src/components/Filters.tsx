import { Button, ButtonVariants } from "./Button";
import { SelectInput } from "./SelectInput";
import { SubTitle } from "./SubTitle";

export function Filters() {
  return (
    <div className="flex flex-col">
      <SubTitle>Filters</SubTitle>
      <SelectInput />

      <div className="flex flex-row lg:flex-col gap-3 mt-3">
        <div className="flex-1">
          <SelectInput />
        </div>
        <div className="flex-1">
          <SelectInput />
        </div>
      </div>

      <div className="flex flex-row lg:flex-col gap-3 mt-3">
        <div className="flex-1">
          <SelectInput />
        </div>
        <div className="flex-1">
          <SelectInput />
        </div>
      </div>

      <Button className="mt-3" variant={ButtonVariants.secondary}>
        Apply filters
      </Button>
    </div>
  );
}
