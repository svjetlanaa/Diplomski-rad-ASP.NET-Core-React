export interface ShippingAddress {
    fullName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
  }
   export interface OrderItem {
    orderId: number;
    productId: number;
    ime: string;
    slika: string;
    cijena: number;
    kolicina: number;
    returned: boolean;
  }
  export interface Order {
    id: number;
    bUyerId: string;
    shippingAddress: ShippingAddress;
    orderData: string;
    orderItems: OrderItem[];
    subtotal: number;
    orderStatus: string;
    total: number;
    days: number;
  }
  export interface Reservation {
    id:number;
    customerName: string;
    customerEmail: string;
    productId: number;
    reservedFrom: string;
    reservedTo: string;
  }