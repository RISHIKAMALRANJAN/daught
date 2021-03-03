const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box8,box9,box10,box11,box12,bx13,box14,box15,box16 ;
var stand1,stand2;
var plygon, slingShot;

function preload() {
    
}

function Setup() {
    createCnvas(700,700)
    background=brown;
    engine= Engine .create();
    world =engine.world;


    stand1=new stand()
    

}

