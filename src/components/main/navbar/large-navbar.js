import Link from "next/link";

export default function LargeNavbar({ items, currentPath }) {
  return (
    <div className="flex items-center gap-8 text-[15px] font-medium">
      {items.map((item) => {
        const isActive = currentPath === item.path;

        return (
          <Link
            key={item.id}
            href={item.path}
            className={`relative group transition ${
              isActive ? "text-green-700" : "text-gray-700 hover:text-green-700"
            }`}
          >
            {item.name}

            {/* Animated underline */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-green-700 transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
        );
      })}
    </div>
  );
}
