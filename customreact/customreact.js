function customrender(reactelement, container) {
   const domElement =  document.createElement(reactelement.type)   
   domElement.innerHTML = reactelement.children
   for(const prop in reactelement.props) {
    if(props === 'children') continue
    domElement.setAttribute(prop, reactelement.props[prop])
   }
//    domElement.setAttribute('href', reactelement.props.href) 
//    domElement.setAttribute('target', reactelement.props.target) 
   container.appendChild(domElement)
}
const reactelement= {
    type: 'a',
    props: {
        href: 'http://www.baidu.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const maincontainer = document.querySelector('#root')

customrender(reactelement, maincontainer)