import { Component, Switch, Match, Show } from "solid-js";
import { Portal } from "solid-js/web";
import {
  Clock,
  Eye,
  FilePlus,
  FloppyDisk,
  MagnifyingGlass,
  PencilLine,
} from "phosphor-solid";

type TopBarProps = {
  itemType: string;
  itemLabel: string;
  viewType: "new" | "edit" | "viewItem" | "viewList";
  itemData?: object;
  hasUnsavedChange?: boolean;
  createButton?: {
    show: boolean;
  };
  editButton?: {
    show: boolean;
  };
  returnToViewButton?: {
    show: boolean;
  };
  showButton?: {
    show: boolean;
  };
  saveButton?: {
    show: boolean;
    onClick: (e: MouseEvent) => void;
  };
};

const TopBar: Component<TopBarProps> = (props) => {
  return (
    <Portal
      mount={document.getElementById("TopBarContainer") as HTMLDivElement}
    >
      <div class="flex flex-row items-center">
        {/* View Icon and Item Type */}
        <div class="uppercase text-sm text-center  bg-slate-700 min-h-[4rem] flex flex-row items-center pl-4 pr-2 border-r-white border-r-[0.5px] rounded-bl-sm min-w-[12rem]">
          <Switch>
            <Match when={props.viewType === "edit"}>
              <FilePlus class="mr-3" size={20} weight="fill" />
            </Match>
            <Match when={props.viewType === "new"}>
              <PencilLine class="mr-3" size={20} weight="fill" />
            </Match>
            <Match when={props.viewType === "viewItem"}>
              <Eye class="mr-3" size={20} weight="fill" />
            </Match>
          </Switch>
          <div class="text-center flex-grow">{props.itemType}</div>
        </div>
        {/* Entity Label wrapper */}
        <div class="min-h-[4rem] bg-primary flex flex-row items-center px-4 mr-4  border-r-white border-r-[0.5px] ">
          <div
            class="text-center"
            classList={{
              "text-xs": props.itemLabel.length > 50,
              "text-sm": props.itemLabel.length <= 50,
            }}
          >
            {props.itemLabel}
          </div>
        </div>
        <div class="grid grid-cols-2 text-xs uppercase min-w-[18rem]">
          <div class="p-0 m-0 flex flex-row">
            <FilePlus class="mt-[2px] mr-2" /> rhadden
          </div>
          <div class="flex flex-row">
            <Clock class="mt-[2px] mr-2" />
            Two weeks ago
          </div>
          <div class="col-span-2 border-b-[0.5px] border-b-white mt-1 mb-1"></div>
          <div class="p-0 m-0 flex flex-row">
            <PencilLine class="mt-[2px] mr-2" /> rhadden
          </div>
          <div class="flex flex-row">
            <Clock class="mt-[2px] mr-2" />
            Three weeks ago
          </div>
        </div>
        <div class="flex-grow ml-3"></div>
        <Show when={props.editButton?.show}>
          <button class="btn btn-square btn-accent min-h-[4rem] min-w-[4rem] rounded-none justify-self-end border-l-[0.5px] border-l-white">
            <PencilLine size={24} />
          </button>
        </Show>
        <Show when={props.saveButton?.show}>
          <button
            onclick={props.saveButton?.onClick}
            class="btn btn-square btn-accent min-h-[4rem] min-w-[4rem] rounded-l-none rounded-tr-none rounded-br-sm justify-self-end border-l-[0.5px] border-l-white"
          >
            <FloppyDisk size={24} />
          </button>
        </Show>
      </div>
    </Portal>
  );
};

export default TopBar;
