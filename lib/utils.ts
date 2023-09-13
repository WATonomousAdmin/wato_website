import { Fade } from "../types";

export const fadeElement = (
    direction: Fade,
    elements: NodeListOf<Element> | (Element | null)[]
) => {
    for (const element of Array.from(elements)) {
        if (!element || !element.classList) continue;
        if (direction === Fade.In) {
            element.classList.add("opacity-1");
            element.classList.remove("opacity-0");
            continue;
        }
        element.classList.add("opacity-0");
        element.classList.remove("opacity-1");
    }
};