


let nome;
let xp;
nome = prompt ("qual seu nome ?");
xp = prompt ("qual o xp de " + nome);
if(xp < 1.000){
    console.log("o Herói " + nome + " esta no nível ferro " );
}else if(xp >= 1.001 && xp< 2.000 ) {
     console.log("o Herói " + nome + " está no nivel bronze ");
}else if(xp >= 2.000 && xp < 5.000 ) {
    console.log("o Herói " + nome + " está no nivel prata");
}else if(xp >= 5.000 && xp < 7.000 ) {
    console.log("o Herói " + nome + " está no nivel ouro ");
}else if(xp >= 7.000 && xp < 8.000 ) {
    console.log("o Herói " + nome + " está no nivel platina ");
}else if(xp >= 8.000 && xp < 9.000 ) {
    console.log("o Herói " + nome + " está no nivel Ascendente ");
}else if(xp >= 9.000 && xp < 10.000 ) {
    console.log("o Herói " + nome + " está no nivel Imortal");
} else{
    console.log("o Herói " + nome + " está no nível Radiante");
}


/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante*/