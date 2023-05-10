import { useState } from "react";
import { Select, SelectOption } from "./Select";

const options = [
  { label: "Option 1", value: "option-1" },
  { label: "Option 2", value: "option-2" },
  { label: "Option 3", value: "option-3" },
  { label: "Option 4", value: "option-4" },
  { label: "Option 5", value: "option-5" },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
    </>
  );
}

export default App;
