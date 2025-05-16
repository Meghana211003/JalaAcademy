import React, { useState } from "react";

const tabs = [
  "Multiple Tabs",
  "Autocomplete",
  "Collapsible Content",
  "Images",
  "Slider",
  "Tooltips",
  "Popups",
  "Links",
  "CSS Properties",
  "IFrames",
];

export default function MoreMenuCRUD() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">More Menu Features</h2>
      <div className="flex space-x-4 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded whitespace-nowrap ${
              selectedTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="border p-4 rounded bg-white min-h-[200px]">
        {selectedTab === "Multiple Tabs" && <p>This is where Multiple Tabs CRUD will go.</p>}
        {selectedTab === "Autocomplete" && <p>Autocomplete component placeholder.</p>}
        {selectedTab === "Collapsible Content" && <p>Collapsible Content placeholder.</p>}
        {selectedTab === "Images" && <p>Images CRUD placeholder.</p>}
        {selectedTab === "Slider" && <p>Slider component placeholder.</p>}
        {selectedTab === "Tooltips" && <p>Tooltips placeholder.</p>}
        {selectedTab === "Popups" && <p>Popups placeholder.</p>}
        {selectedTab === "Links" && <p>Links placeholder.</p>}
        {selectedTab === "CSS Properties" && <p>CSS Properties placeholder.</p>}
        {selectedTab === "IFrames" && <p>IFrames placeholder.</p>}
      </div>
    </div>
  );
}