import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface DesignOption {
  value: string;
  label: string;
  description: string;
}

interface DesignSelectorProps {
  designOptions: DesignOption[];
  selectedDesign: string;
  onChange: (value: string) => void;
}

export default function DesignSelector({
  designOptions,
  selectedDesign,
  onChange,
}: DesignSelectorProps) {
  return (
    <>
      {/* Design Selector */}
      <div className="max-w-md mx-auto mb-12">
        <label
          htmlFor="design-select"
          className="block text-sm font-semibold text-gray-700 mb-3"
        >
          Choose Portfolio Design
        </label>
        <Select value={selectedDesign} onValueChange={onChange}>
          <SelectTrigger className="w-full h-12 bg-white/80 backdrop-blur-sm border-gray-200 hover:border-blue-300 transition-colors">
            <SelectValue placeholder="Select a design template" />
          </SelectTrigger>
          <SelectContent className="bg-white/95 backdrop-blur-md">
            {designOptions.map((design) => (
              <SelectItem
                key={design.value}
                value={design.value}
                className="cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-left">{design.label}</span>
                  <span className="text-xs text-gray-500">
                    {design.description}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Selected Design Info */}
      {selectedDesign && (
        <div className=" hidden lg:block max-w-2xl mx-auto mb-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className=" flex flex-col lg:flex-row font-medium text-sm lg:text-[16px] text-gray-800">
                <span> Selected: </span>
                <span>
                  {designOptions.find((d) => d.value === selectedDesign)?.label}
                </span>
              </span>
              <Badge variant="secondary" className="ml-auto">
                {
                  designOptions.find((d) => d.value === selectedDesign)
                    ?.description
                }
              </Badge>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
