import { Adresse } from "./adresse";


export interface Habitant {
    nom : string,
    prenom : string,
    adresse : Adresse|null
}

