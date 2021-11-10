interface Product {
  description: string;
  unit: number;
  maximum: number;
  code_no: number;
  minimun: number;
  reorder_level?: number;
  reorder_quantity?: number;
  receipts?: any;
  issue?: number;
  date: number;
  ref_no: number;
  quantity: number;
  image: string;
  name: string;
  cost: number;
}

interface User {
  name: string;
  email: string;
}

interface Supplied {
  supplier_name: string;
  date_issued: string | number;
  date_delivered: string | number;
  serial_no: number;
  purchase_no: number;
  invoice_no: number;
  description?: string;
  quantity: number;
  inspection_report?: string;
  remarks: number;
  received_by: string;
  date: string | number;
  insection_name: string;
}
export { Product, User, Supplied };
