export function uwuJs(data: { output; body: {}; }): void {
  const root = data.output;
  const elements = data.body;

  for (const element in elements) {
    if (element === "$util") {
      const elementData = elements[element];

      for (const styleName in elementData) {
        const styleValue = elementData[styleName];
        
        if (styleName === "fontImport") {
          const link = document.createElement('link');
          link.setAttribute('rel', 'stylesheet');
          link.setAttribute('type', 'text/css');
          link.setAttribute('href', elementData[styleName]);
          document.head.appendChild(link);
        } else if (styleName === "css") {
          const stylesheet = document.createElement('style');
          stylesheet.innerHTML = elementData[styleName];
          document.head.appendChild(stylesheet);
        } else if (styleName === "title") {
          document.title = elementData[styleName];
        } else if (styleName === "favicon") {
          const link = document.createElement('link');
          link.setAttribute('rel', 'shortcut icon');
          link.setAttribute('type', elementData[styleName].type);
          link.setAttribute('href', elementData[styleName].href);
          document.head.appendChild(link);
        } else if (styleName === "importScript") {
          const script = document.createElement('script');
          script.setAttribute('src', elementData[styleName]);
          document.head.appendChild(script);
        } else {
          document.querySelectorAll("*").forEach(elem => {
            if (elem.tagName.toLowerCase() !== "head" && elem.tagName.toLowerCase() !== "meta" && elem.tagName.toLowerCase() !== "title" && elem.tagName.toLowerCase() !== "script") {
              (elem as HTMLElement).style[styleName.toString()] = styleValue.toString();
            }
          });
        }
      }
      
      continue;
    }

    const elementData = elements[element];
    const createdElement = document.createElement(element);
    
    if ('text' in elementData) {
      createdElement.innerText = elementData.text;
    } else createdElement.innerText = "";

    for (const styleName in elementData.styling) {
      const styleValue = elementData.styling[styleName];
      createdElement.style[styleName.toString()] = styleValue;
    }

    for (const attributeName in elementData.attributes) {
      const attributeValue = elementData.attributes[attributeName];
      createdElement.setAttribute(attributeName.toString(), attributeValue);
    }

    for (const eventName in elementData.events) {
      const eventValue = elementData.events[eventName];
      createdElement[eventName] = eventValue;
    }

    function getelements(elements, output) {
      for (const newElementName in elements) {
        const newCreatedElement = document.createElement(newElementName);
        const newElementData = elements[newElementName];
        newCreatedElement.innerText = newElementData.text;

        if ('text' in newElementData) {
          newCreatedElement.innerText = newElementData.text;
        } else newCreatedElement.innerText = "";

        for (const styleName in newElementData.styling) {
          const styleValue = newElementData.styling[styleName];
          newCreatedElement.style[styleName.toString()] = styleValue;
        }

        for (const attributeName in newElementData.attributes) {
          const attributeValue = newElementData.attributes[attributeName];
          newCreatedElement.setAttribute(attributeName.toString(), attributeValue);
        }

        for (const eventName in newElementData.events) {
          const eventValue = newElementData.events[eventName];
          newCreatedElement[eventName] = eventValue;
        }

        if ('children' in newElementData) {
          getelements(newElementData.children, newCreatedElement);
        }

        output.appendChild(newCreatedElement); 
      }
    }

    if ('children' in elementData) {
      getelements(elementData.children, createdElement);
    }

    document.querySelector(root).appendChild(createdElement); 
  }
}
