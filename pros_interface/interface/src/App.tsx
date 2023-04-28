import type { Component } from "solid-js";
import { onMount, createSignal } from "solid-js";
import MenuBar from "./pageComponents/MenuBar";
import LoginBox from "./pageComponents/LoginBox";
//import InterfaceConfig from "./InterfaceConfig";

const App: Component = () => {
  const [topBarWidth, setTopBarWidth] = createSignal(0);

  const handler = (event: Event) => {
    const MainContainer = document.getElementById("MainContainer");
    if (MainContainer) {
      setTopBarWidth(MainContainer?.clientWidth - 50);
    }
  };

  onMount(() => {
    const MainContainer = document.getElementById("MainContainer");
    if (MainContainer) {
      setTopBarWidth(MainContainer?.clientWidth - 50);
    }
    window.addEventListener("resize", handler);
  });

  return (
    <>
      <div class="flex flex-row min-h-screen bg-dotted-spacing-100 bg-dotted-slate-300">
        <div class="h-full bg-slate-400 shadow-inner min-h-screen ">
          <LoginBox />
          <MenuBar />
        </div>

        <div class="flex-1 relative" id="MainContainer">
          <div
            class="w-max group "
            style={`width: inherit; max-width: inherit; position: fixed; margin-left:30px; width: ${topBarWidth()}px `}
          >
            <div class="w-full absolute -inset-1 bg-gradient-to-r from-slate-500 to-slate-400 rounded-b-md blur opacity-25 group-hover:opacity-50 transition duration-100 group-hover:duration-200"></div>
            <div
              id="TopBarContainer"
              class="relative min-h-[4rem] bg-slate-600 text-slate-50 ring-1 ring-slate-900/5 rounded-b-md"
            ></div>
          </div>
          <div id="MainContainer" class="mt-32 prose content-center">
            {" "}
            Main Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus facilis similique dolore impedit illo blanditiis
            assumenda animi cumque illum vero, quod, voluptatem odio at ad
            officiis numquam vitae hic accusantium. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Inventore perferendis laudantium id
            quasi incidunt suscipit nihil, animi consequuntur qui enim iure
            distinctio explicabo, repellendus temporibus quidem alias, debitis
            tenetur illo. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Minus quos sapiente quo praesentium magnam! Illum vel odio
            animi libero, cupiditate nam dolorum! Beatae, quibusdam. Ullam ab
            maxime deserunt eligendi perspiciatis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illo libero obcaecati sequi. In culpa
            ullam numquam ex libero reprehenderit dolores, molestias ea ab
            tempore et. Cupiditate fugiat in ipsam inventore!Lorem
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
