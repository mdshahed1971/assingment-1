function getTextValueById(id){
    const element = document.getElementById(id).innerText;
    const convertedElement = parseFloat(element);
    return convertedElement;
}

function setInnerTextById(id,value){
    const element = document.getElementById(id);
    const elementValue = element.innerText = value;
}