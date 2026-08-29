import { useEffect, useRef, useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { toast } from "./components/ui/toast";
import { CheckCircleIcon, Trash2Icon, Undo2 } from "lucide-react";

type Product = {
  name: string;
  quantity: number;
  checked: boolean;
};

function App() {
  const [productInput, setProductInput] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);

  const [productList, setProductList] = useState<Product[]>([]);

  const LOCALSTORAGE_KEY = "einkaufsListe";

  const data = useRef(false);

  useEffect(() => {
    setProductList(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "[]"));
    data.current = true;
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(productList));
    }
  }, [productList]);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setProductInput(e.target.value);
    console.log(productInput);
  }

  function handleClick() {
    if (productList.find((item) => productInput === item.name)) {
      toast.add({
        title: "Product shon vorhanden",
        description: "bitte check die Liste der Produkt ist schon vorhanden",
        type: "error",
      });
    } else {
      setProductList([{ name: productInput, quantity: productQuantity, checked: false }, ...productList]);
      setProductInput("");
      setProductQuantity(1);
    }
  }

  return (
    <div className="max-w-lg mx-auto flex flex-col justify-center items-center mt-20 ">
      <h1 className="text-3xl font-semibold">Einkaufsliste</h1>
      <div className="flex w-full gap-2 mt-10">
        <Input className="" placeholder="Product eingeben..." value={productInput} onChange={handleInput} />
        <Input
          className="w-14"
          type="number"
          min={1}
          value={productQuantity}
          onChange={(e) => {
            setProductQuantity(Number(e.target.value));
          }}
        />
      </div>
      <Button disabled={productInput.length < 1} className="mt-3 w-full" onClick={handleClick}>
        Eintrag Hinzufügen
      </Button>

      <div className="flex w-full justify-between items-center flex-col mt-7 gap-2">
        {productList.map((product, index) => (
          <div key={index} className="flex w-full justify-between items-center border rounded-2xl p-7 text-card-foreground shadow">
            <div className="flex flex-col justify-center  ">
              <h3 className={`text-lg ${product.checked ? " line-through" : "font-semibold"}`}>{product.name}</h3>
              <p className="text-slate-400">Anzahl: {product.quantity}</p>
            </div>
            {product.checked ? (
              <div className="flex gap-1 items-center">
                <Button
                  variant={"destructive"}
                  size={"icon-lg"}
                  onClick={() => {
                    setProductList([...productList.filter((item) => item.name !== product.name)]);
                    toast.add({
                      title: "Produkt gelöscht",
                      description: product.name + " wurde aus der Einkaufsliste entfernt.",
                      type: "success",
                    });
                  }}
                >
                  <Trash2Icon />
                </Button>
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  onClick={() => {
                    setProductList([
                      { name: product.name, quantity: product.quantity, checked: false },
                      ...productList.filter((item) => item.name !== product.name),
                    ]);
                  }}
                >
                  <Undo2 />
                  Zurück
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => {
                  setProductList([
                    ...productList.filter((item) => item.name !== product.name),
                    { name: product.name, quantity: product.quantity, checked: true },
                  ]);
                }}
              >
                <CheckCircleIcon />
                Abhaken
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
