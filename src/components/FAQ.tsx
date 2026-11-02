import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

export const FAQ = (faqs: { q: string; a: string }[]) => {
  return (
    <Accordion type="single" collapsible defaultValue="item-0">
      {faqs.map((item, idx) => (
        <AccordionItem
          key={idx}
          value={`item-${idx}`}
          className="rounded-xl mb-4 border border-border px-4"
        >
          <AccordionTrigger className="text-left text-xl text-foreground font-normal">
            {item.q}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-2">
              <div className="w-7 h-7 mt-[6px]">
                <CheckCircle className="text-primary" />
              </div>
              <p className="text-muted-foreground text-xl mt-[3px] leading-[28px]">
                {item.a}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
