import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10">something</Button>
      </div>
      <ButtonGradient />
    </>
  );
}
