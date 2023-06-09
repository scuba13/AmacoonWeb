export interface Cat {
  catData: CatData;
  ownerData: OwnerData;
}

export interface CatData {
  id: number;
  name: string;
  registration: string;
  microchip: string;
  breedName: string;
  breedID: string;
  colorID: number;
  colorName: string;
  emsCode: string;
  gender: string;
  birthdate: Date;
  countryCode: string;
  fatherName: string;
  motherName: string;
}

export interface OwnerData {
  id: number;
  name: string;
  cpf: string;
  address: string;
  zipCode: string;
  city: string;
  state: string;
  phone: string;
  countryName: string;
  catteryId: number;
  catteryName: string;
}




export interface ManualCat {
  name: string;
  chip: string;
  breed: string;
  color: string;
  ems: string;
  ffb: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  ownerGatil: string;
  ownerCpf: string;
}

export interface CatShort {
  ID: number;
  Name: string;
  Breed: string;
  Color: string;
  EmsCode: string;
  
}
