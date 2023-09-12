import { MarqueeDirection } from "../types";

export const fadeElement = (
    direction: MarqueeDirection,
    elements: NodeListOf<Element> | (Element | null)[]
) => {
    for (const element of Array.from(elements)) {
        if (!element || !element.classList) continue;
        if (direction === MarqueeDirection.Next) {
            element.classList.add("opacity-1");
            element.classList.remove("opacity-0");
            continue;
        }
        element.classList.add("opacity-0");
        element.classList.remove("opacity-1");
    }
};