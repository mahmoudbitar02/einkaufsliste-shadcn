import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

function App() {
  return (
    <>
      <h1 className="bg-slate-900">hallo</h1>
      <Button variant="outline">Button</Button>
      <Slider defaultValue={[75]} max={100} step={1} className="mx-auto w-full max-w-xs" />
    </>
  );
}

export default App;
