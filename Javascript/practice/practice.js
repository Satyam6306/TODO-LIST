const list1=document.createElement("li")
const PL=document.querySelector("ul")
list1.textContent="Huwaei"
PL.append(list1)


const l2=document.createElement("li")
l2.textContent="SastaPhone"
PL.prepend(l2)



const Firefox=document.querySelector(".Firefox")


const l3=document.createElement("li")
l3.textContent="Mehnga phone"
PL.insertBefore(l3,Firefox)


PL.removeChild(Firefox)