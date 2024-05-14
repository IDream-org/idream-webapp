interface Data {
  error: string;
  message: string[];
}

interface Response {
  data: Data;
}

export interface CustomError {
  response: Response;
}
