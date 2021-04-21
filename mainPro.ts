import { Professional } from './professional'

let actor1: Professional = new Professional("nombreActor1", 21, "masculino", 79, 1.80, "cabelloActor1", "ojosActor1", "caucásica", false, "española", 0, "actor");
let actor2: Professional = new Professional("nombreActor2", 22, "femenino", 65, 1.76, "cabelloActor2", "ojosActor2", "negroide", true, "venezolana", 0, "actor");
let actor3: Professional = new Professional("nombreActor3", 23, "masculino", 81, 1.82, "cabelloActor3", "ojosActor3", "caucásica", false, "estadounidense", 1, "actor");

let director1: Professional = new Professional("nombreDirector1", 51, "masculino", 74, 1.72, "cabelloDirector1", "ojosDirector1", "caucásica", true, "española", 0, "director");
let director2: Professional = new Professional("nombreDirector2", 52, "masculino", 75, 1.73, "cabelloDirector2", "ojosDirector2", "caucásica", false, "aleman", 1, "director");
let director3: Professional = new Professional("nombreDirector3", 53, "femenino", 64, 1.73, "cabelloDirector3", "ojosDirector3", "australoide", false, "australiana", 1, "director");

let escritor1: Professional = new Professional("nombreEscritor1", 30, "masculino", 70, 1.75, "cabelloEscritor1", "ojosEscritor1", "caucásica", false, "española", 0, "escritor");
let escritor2: Professional = new Professional("nombreEscritor2", 31, "masculino", 71, 1.76, "cabelloEscritor2", "ojosEscritor2", "negroide", false, "frances", 0, "escritor");
let escritor3: Professional = new Professional("nombreEscritor3", 32, "masculino", 72, 1.77, "cabelloEscritor3", "ojosEscritor3", "mogoloide", true, "ingles", 0, "escritor");

let productor1: Professional = new Professional("nombreProductor1", 41, "femenino", 80, 1.80, "cabelloProductor1", "ojosProductor1", "caucásica", false, "española", 0, "productor");
let productor2: Professional = new Professional("nombreProductor2", 42, "masculino", 81, 1.79, "cabelloProductor2", "ojosProductor2", "caucásica", false, "española", 0, "productor");
let productor3: Professional = new Professional("nombreProductor3", 43, "femenino", 71, 1.78, "cabelloProductor3", "ojosProductor3", "negroide", true, "española", 0, "productor");

let distribuidor1: Professional = new Professional("nombreDistribuidor1", 45, "masculino", 80, 1.75, "cabelloDistribuidor1", "ojosDistribuidor1", "caucásica", false, "española", 0, "distribuidor");
let distribuidor2: Professional = new Professional("nombreDistribuidor2", 46, "masculino", 80, 1.74, "cabelloDistribuidor2", "ojosDistribuidor2", "caucásica", true, "española", 0, "distribuidor");
let distribuidor3: Professional = new Professional("nombreDistribuidor3", 47, "femenino", 80, 1.76, "cabelloDistribuidor3", "ojosDistribuidor3", "caucásica", false, "española", 0, "distribuidor");

actor1.imprimirValores();

director2.imprimirValores();

escritor3.imprimirValores();

productor2.imprimirValores();

distribuidor1.imprimirValores();