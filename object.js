const symbol1=Symbol("hye")
const ob={
    name:"sadia",
    id:"63",
    isloggedin:true,
    [symbol1]:"idd"
}
//console.log(Object.keys(ob));
//console.log(Object.values(ob));
ob.name="sidra";
//Object.freeze(ob); 
ob.id=66;
ob.greeting=function(){
    console.log(`how are you!, ${this.name}`);
}
delete ob.greeting;
//console.log(ob);

const o1={name:"s", 2:"y",3:"u"};
const o2={4:"ee",3:"dhe"};
//Object.assign(o1,o2);
//console.log(Object.assign(o1));
const {name}=o1;
console.log(name);