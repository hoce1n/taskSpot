const BASE_CLASSES = "cursor-pointer bg-secondary px-4 py-2 rounded-none";

export function button(
    inner,
    { className = "", type = "button", dataset = {} } = {}
) {

    const el = document.createElement("button");
    
    el.type = type;
    el.className = `${BASE_CLASSES} ${className}`
    el.textContent = inner;
    Object.assign(el.dataset, dataset);

    return el;
}