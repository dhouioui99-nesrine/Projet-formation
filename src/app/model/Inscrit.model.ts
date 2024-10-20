export class Inscrit{
    id?: string;
    nom?:string;
    domaine?:string;
    periode?:string;
    prix?:string;
    email?:String;
  






    constructor(  id?: string,
        nom?:string,
        domaine?:string,
        periode?:string,
        prix?:string,
        email?:String)
        {
            this.id=id;
            this.nom=nom;
            this.domaine=domaine;
            this.periode=periode;
            this.prix=prix;
            this.email=email;
          
        }
}

