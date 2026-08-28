import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  return (
    <div className="max-w-lg mx-auto flex flex-col justify-center items-center mt-20 ">
      <h1 className="text-3xl font-semibold">Einkaufsliste</h1>
      <div className="flex w-full gap-2 mt-10">
        <Input className="" placeholder="Product eingeben..." />
        <Input className="w-14" type="number" min={1} />
      </div>
      <Button disabled className="mt-3 w-full">
        Eintrag Hinzufügen
      </Button>

      <div className="flex w-full justify-between items-center flex-col mt-7 gap-2">
        <div className="flex w-full justify-between items-center border rounded-2xl p-7 text-card-foreground shadow">
          <div className="flex flex-col justify-center items-center gap-1 ">
            <h3>product</h3>
            <p>Anzahl: 1</p>
          </div>
          <Button>Abhaken</Button>
        </div>

        <div className="flex w-full justify-between items-center border rounded-2xl p-7 text-card-foreground shadow">
          <div className="flex flex-col justify-center items-center gap-1 ">
            <h3>product</h3>
            <p>Anzahl: 1</p>
          </div>
          <Button>Abhaken</Button>
        </div>
        <div className="flex w-full justify-between items-center border rounded-2xl p-7 text-card-foreground shadow">
          <div className="flex flex-col justify-center items-center gap-1 ">
            <h3>product</h3>
            <p>Anzahl: 1</p>
          </div>
          <Button>Abhaken</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
