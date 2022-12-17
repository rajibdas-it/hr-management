import React from "react";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  return (
    <aside
      class="hidden lg:block w-64 border border-red-600"
      aria-label="Sidebar"
    >
      <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <MenuItem></MenuItem>
      </div>
    </aside>
  );
};

export default Sidebar;
