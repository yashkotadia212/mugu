import all from "../assets/images/structure/all.svg";
import withoutBack from "../assets/images/structure/withoutBack.svg";
import withoutShelves from "../assets/images/structure/withoutShelves.svg";
import withoutShelvesAndWalls from "../assets/images/structure/withoutShelvesAndWalls.svg";
import withTopAndBottomOnly from "../assets/images/structure/withTopAndBottomOnly.svg";

export const shelfTypeOption = [
  {
    label: (
      <div className="flex flex-col items-center justify-center min-h-[111px] h-full w-full text-center">
        <img
          src={withTopAndBottomOnly}
          alt="All (no front)"
          className="w-[53px] h-[53px] mix-blend-multiply"
        />
        <div className="text-[12px] leading-4">Acrylic Panel Shelf</div>
        <div className="text-[12px] font-light leading-3">
          *Open shelves only
        </div>
      </div>
    ),
    value: "acrylic",
  },
  {
    label: (
      <div className="flex flex-col items-center justify-center min-h-[111px] h-full w-full text-center">
        <img
          src={all}
          alt="All (no front)"
          className="w-[53px] h-[53px] mix-blend-multiply"
        />
        <div className="text-[12px] leading-4">Stainless Panel Shelf</div>
        <div className="text-[12px] font-light leading-3">
          *Open & closed shelves
        </div>
      </div>
    ),
    value: "stainless",
  },
];

export const structureElements = [
  {
    label: (
      <div className="flex flex-col items-center justify-start pt-5 h-full min-h-[111px] w-full px-1">
        <img src={all} alt="All (no front)" className="w-[53px] h-[53px]" />
        <p className="text-xs leading-3">All (no front)</p>
      </div>
    ),
    value: "all",
  },
  {
    label: (
      <div className="flex flex-col items-center justify-start pt-5 h-full min-h-[111px] w-full px-1">
        <img
          src={withoutBack}
          alt="Without Back"
          className="w-[53px] h-[53px]"
        />
        <p className="text-xs leading-3">Without Back</p>
      </div>
    ),
    value: "withoutBack",
  },
  {
    label: (
      <div className="flex flex-col items-center justify-start pt-5 h-full min-h-[111px] w-full px-1">
        <img
          src={withTopAndBottomOnly}
          alt="With top and bottom only"
          className="w-[53px] h-[53px]"
        />
        <p className="text-xs leading-3">With top and bottom only</p>
      </div>
    ),
    value: "withTopAndBottomOnly",
  },
  {
    label: (
      <div className="flex flex-col items-center justify-start pt-5 h-full min-h-[111px] w-full px-1">
        <img
          src={withoutShelves}
          alt="Without Shelves"
          className="w-[53px] h-[53px]"
        />
        <p className="text-xs leading-3">Without Shelves</p>
      </div>
    ),
    value: "withoutShelves",
  },
  {
    label: (
      <div className="flex flex-col items-center justify-start pt-5 h-full min-h-[111px] w-full px-1">
        <img
          src={withoutShelvesAndWalls}
          alt="Without Shelves and walls"
          className="w-[53px] h-[53px]"
        />
        <p className="text-xs leading-3">Without Shelves and walls</p>
      </div>
    ),
    value: "withoutShelvesAndWalls",
  },
];

export const colorOptions = [
  {
    label: (
      <div className="w-full h-[70px] flex flex-col justify-start items-center">
        <div
          style={{ backgroundColor: "black" }}
          className="w-8 h-8 rounded-full border mt-1 hover:border-theme-primary transition-all duration-300 ease-in-out"
        />
        <div className="text-[12px] text-center font-normal leading-3 mt-1">
          Transparent Black
        </div>
      </div>
    ),
    value: "transparentBlack",
  },

  {
    label: (
      <div className="w-full h-[70px] flex flex-col justify-start items-center">
        <div
          style={{ backgroundColor: "white" }}
          className="w-8 h-8 rounded-full border mt-1 hover:border-theme-primary transition-all duration-300 ease-in-out"
        />
        <div className="text-[12px] text-center font-normal leading-3 mt-1">
          White
        </div>
      </div>
    ),
    value: "white",
  },
  {
    label: (
      <div className="w-full h-[70px] flex flex-col justify-start items-center">
        <div
          style={{ backgroundColor: "orange" }}
          className="w-8 h-8 rounded-full border mt-1 hover:border-theme-primary transition-all duration-300 ease-in-out"
        />
        <div className="text-[12px] text-center font-normal leading-3 mt-1">
          Transparent Orange
        </div>
      </div>
    ),
    value: "transparentOrange",
  },

  {
    label: (
      <div className="w-full h-[70px] flex flex-col justify-start items-center">
        <div
          style={{ backgroundColor: "transparent" }}
          className="w-8 h-8 rounded-full border mt-1 hover:border-theme-primary transition-all duration-300 ease-in-out"
        />
        <div className="text-[12px] text-center font-normal leading-3 mt-1">
          Clear
        </div>
      </div>
    ),
    value: "clear",
  },
];

export const widthOptions = [
  { label: "270", value: "270" },
  { label: "370", value: "370" },
];

export const heightOptions = [
  { label: "121", value: "121" },
  { label: "180", value: "180" },
  { label: "200", value: "200" },
  { label: "270", value: "270" },
  { label: "313", value: "313" },
  { label: "370", value: "370" },
  { label: "483", value: "483" },
  { label: "603", value: "603" },
];

export const depthOptions = [
  { label: "270", value: "270" },
  { label: "370", value: "370" },
];
