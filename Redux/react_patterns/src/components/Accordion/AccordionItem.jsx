import { createContext, useContext } from "react";

const AccordionContent = createContext();

export function useAccordionItemContext()
{
    const ctx = useContext(AccordionContent);
    if(!ctx)
    {
        throw new Error('Accordion-related components must be wrapped by <Accordion.Item>')
    }

      return ctx;
}

export default function AccordionItem({id, className, children})
{
    return (
        <AccordionContent.Provider value={id}>
            <li className={className}>{children}</li>
        </AccordionContent.Provider>
        
    );
}