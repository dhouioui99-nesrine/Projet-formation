

export class UserModel {
  id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  role?: string;
  // image?: string[];
  createdOn?: Date;
  updatedOn?: Date;


  constructor(
    id?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string,
    role?: string,
    // image?: string[],
    createdOn?: Date,
    updatedOn?: Date
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.role = role;
    // this.image = image;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
  }
}
