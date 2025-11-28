export interface CustomErrorType extends Error {
  status?: number;
}

export interface EmailInfoType {
  reciever: string;
  subject: string;
  html: string;
}
