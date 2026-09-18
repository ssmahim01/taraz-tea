export type Category = {
  id: string;
  name: string;
  banglaName: string;
  emoji: string;
};

export const categories: Category[] = [
  { id: "green", name: "Green Tea", banglaName: "গ্রিন টি", emoji: "🍵" },
  { id: "black", name: "Black Tea", banglaName: "ব্ল্যাক টি", emoji: "🫖" },
  { id: "orthodox", name: "Orthodox Tea", banglaName: "অর্থোডক্স টি", emoji: "🍃" },
  { id: "white", name: "White Tea", banglaName: "হোয়াইট টি", emoji: "🤍" },
  { id: "yellow", name: "Yellow Tea", banglaName: "ইয়েলো টি", emoji: "🌼" },
  { id: "herbal", name: "Herbal Tea", banglaName: "হারবাল টি", emoji: "🌿" },
];

export type Product = {
  id: string;
  name: string;
  weight: string;
  info: string;
  price: number;
  oldPrice?: number;
  image: string;
  categoryId: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Green Tea",
    weight: "200g",
    info: "খাঁটি প্রাকৃতিক গ্রিন টি পাতা",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=600&auto=format&fit=crop",
    categoryId: "green",
  },
  {
    id: "p2",
    name: "Black Tea",
    weight: "200g",
    info: "সিলেটের বাগান থেকে সংগৃহীত ব্ল্যাক টি",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=600&auto=format&fit=crop",
    categoryId: "black",
  },
  {
    id: "p3",
    name: "Orthodox Tea",
    weight: "200g",
    info: "সম্পূর্ণ হাতে তৈরি অর্থোডক্স চা পাতা",
    price: 550,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop",
    categoryId: "orthodox",
  },
  {
    id: "p4",
    name: "Orthodox Tea",
    weight: "200g",
    info: "প্রিমিয়াম মানের চা পাতা, সতেজ ঘ্রাণ",
    price: 550,
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop",
    categoryId: "orthodox",
  },
  {
    id: "p5",
    name: "White Tea",
    weight: "200g",
    info: "সূক্ষ্মভাবে প্রক্রিয়াজাত হোয়াইট টি",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=600&auto=format&fit=crop",
    categoryId: "white",
  },
];

export type Feature = {
  id: string;
  title: string;
  subtitle: string;
  icon: "factory" | "package" | "handshake" | "truck";
};

export const features: Feature[] = [
  {
    id: "f1",
    title: "Tea Tester Checked",
    subtitle: "মান যাচাইকৃত",
    icon: "factory",
  },
  {
    id: "f2",
    title: "Fresh Packing",
    subtitle: "সতেজ প্যাকেজিং",
    icon: "package",
  },
  {
    id: "f3",
    title: "Wholesale Available",
    subtitle: "পাইকারি সুবিধা",
    icon: "handshake",
  },
  {
    id: "f4",
    title: "Nationwide Delivery",
    subtitle: "সারাদেশে ডেলিভারি",
    icon: "truck",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Md. Rahim",
    location: "ঢাকা",
    rating: 5,
    review: "চায়ের স্বাদ সত্যিই অসাধারণ, একদম বাগানের তাজা ঘ্রাণ পাওয়া যায়।",
  },
  {
    id: "t2",
    name: "Sadia Aktar",
    location: "চট্টগ্রাম",
    rating: 5,
    review: "প্যাকেজিং এবং ডেলিভারি দুটোই খুব ভালো লেগেছে, নিয়মিত কিনি।",
  },
  {
    id: "t3",
    name: "Hasan Mahmud",
    location: "সিলেট",
    rating: 4,
    review: "দামের তুলনায় মান অনেক ভালো, পরিবারের সবাই পছন্দ করেছে।",
  },
];
