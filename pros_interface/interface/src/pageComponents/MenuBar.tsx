import { Component } from "solid-js";
import { Portal } from "solid-js/web";
import {
  Clock,
  Eye,
  FilePlus,
  FloppyDisk,
  MagnifyingGlass,
  PencilLine,
} from "phosphor-solid";
import TopBar from "./TopBar";

const MenuBar: Component = () => {
  return (
    <>
      <TopBar
        viewType="edit"
        itemType="Role Assignment"
        itemLabel="John Smith is named the President of the United Federation of Planets and the England and Wales Cricket Board by Kaiser Maximilian I, Emperor of Austria and King of Hungary"
        saveButton={{
          show: true,
          onClick: () => {
            alert("yo");
          },
        }}
      />
      <div class="mx-2">
        <h2 class="">Bar</h2>
        <ul class="uppercase font-semibold text-sm">
          <li>What the arse is it is it is</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
          <li>What</li>
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
