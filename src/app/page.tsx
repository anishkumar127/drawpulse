import { Board } from "@/components/Board/Board";
import { Menu } from "@/components/Menu/Menu";
import { Toolbox } from "@/components/Toolbox/Toolbox";

export default function Home() {
  return (
    <main>
      {/* jai shree ram */}
      {/* Menubar */}
      <Menu />
      {/* Toolbar */}
      <Toolbox />
      {/* Board */}
      <Board/>
    </main>
  );
}
