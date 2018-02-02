//CSS Variables!

//<style>
//    
///*   set css variables!*/
//  
//    :root {
//      --base: #b616d3;
//      --spacing: 10px;
//      --blur: 1px;
//    }
///* call css variables */
//    
//    img {
//      padding: var(--spacing);
//      background: var(--base);
//      filter: blur(var(--blur));
//    }
//    
//    .hl {
//      color: var(--base);
//    }
//    
//</style>


const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  //make sure to add 'px' to the end of value:
  const suffix = this.dataset.sizing || '';
  //(this.dataset contains ALL data attributes that is a so fucking cool)
  //select by name of element, change the value of the elemnt
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}

//run function on change of slider position 'change'
inputs.forEach(input => input.addEventListener('change', handleUpdate));
//run function on movement of slider 'mousemove'
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))


