import { Icon } from "@iconify/react";

const Menu = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="bg-white py-2 px-4 flex flex-row justify-between items-center rounded-lg shadow-lg hover:brightness-95 transition duration-150">
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="font-light">{desc}</p>
      </div>
      <div>
        <Icon icon="mdi:chevron-right" className="text-3xl" />
      </div>
    </div>
  );
};

export default Menu;
