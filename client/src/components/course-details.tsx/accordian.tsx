import React, { createContext, useContext, useRef, useEffect, useState, ReactNode } from "react";
import { ChevronDown } from "react-feather";

interface AccordianProps {
  children: ReactNode;
  value: any;
  onChange?: (value: any) => void;
  [key: string]: any;
}

interface AccordianItemProps {
  children: ReactNode;
  value: any;
  trigger: ReactNode;
  [key: string]: any;
}

interface ContextProps {
  selected: any;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}

const AccordianContext = createContext<ContextProps | undefined>(undefined);

export default function Accordian({ children, value, onChange, ...props }: AccordianProps) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <ul className="rounded-md" {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }: AccordianItemProps) {
  const { selected, setSelected } = useContext(AccordianContext)!;
  const open = selected === value;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <li className="border-b " {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? (ref.current?.offsetHeight || 0) : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
