
const outputElement=document.getElementById('output');
const copyBtn=document.getElementById('btnCopy');
const frm=document.getElementById('frm');
const number=document.getElementById('number');
const capital=document.getElementById('capital');
const small=document.getElementById('small');
const symbols=document.getElementById('symbols');
const length=document.getElementById('length');

copyBtn.addEventListener('click',async()=>{
  const copy=outputElement.value;
 
 if(copy){
  await navigator.clipboard.writeText(copy)
 }
 else
 alert('password box can\'t be empty')

})
function random(min,max){
  const limit=max-min+1;
  return String.fromCharCode(Math.floor(Math.random()*limit)+min)
}

function numbers(){
 return random(48,57)
}
function capitals(){
 return  random(65,90)
}
function smalls(){
 return random(97,122)
}
function symbol(){

  const sym="~!#$%^&*(){}/<>[];:"
 const index=  Math.floor(Math.random()*sym.length);
return sym[index]
}
const functionArray=[
  {
    element:number,
    fun:numbers
  },
  {
    element:capital,
    fun:capitals
  },
  {
    element:small,
    fun:smalls
  },
  {
    element:symbols,
    fun:symbol
  }
]

frm.addEventListener('submit',(e)=>{
 e.preventDefault()

 const limit=length.value
 let generatePassword=""
 const funArr=functionArray.filter(({element})=>element.checked)

  for(let i=0;i<=limit;i++){
    const show=Math.floor(Math.random()*funArr.length)
    const res=funArr[show].fun;
    
    generatePassword +=res()
   
    }
   outputElement.value=generatePassword
  

})

