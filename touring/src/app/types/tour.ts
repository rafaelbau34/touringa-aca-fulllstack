export interface Tour {
  id: number;
  name: string;
  description: string;
  location: string;
  price: number;
  availableDate: string; // ISO string o formato dd/MM/yyyy HH:mm:ss (puedes transformar)
}
