import { Component } from "solid-js";

const LoginBox: Component = () => {
  return (
    <div class=" p-5 bg-slate-300 ring-1 ring-slate-900/5">
      <h1 class="font-bold">Proso4J</h1>
      <h2>
        <span class="uppercase text-xs font-semibold mr-4">Logged in as:</span>{" "}
        <span class="bg-slate-400 text-sm p-2 text-slate-50 rounded-sm">
          rhadden
        </span>
      </h2>
    </div>
  );
};

export default LoginBox;
