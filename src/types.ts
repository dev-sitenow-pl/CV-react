export interface Experience {
  description: string;
  year: number;
}

export interface CVPresonal {
  photo: string;
  name: string;
  lastName: string;
  position: string;
}

export interface CVDetails {
  experience: Experience[];
  education: string[];
}

export interface CVData {
  personal: CVPresonal;
  details: CVDetails;
}