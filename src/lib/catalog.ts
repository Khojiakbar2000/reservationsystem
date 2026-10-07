export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  emoji: string;
  image: string;
  color: string;
  description: string;
  details: string[];
  rating: number;
  reviews: number;
  badge?: string;
};

export const categories = [
  { name: "Kitchen & table", slug: "kitchen", image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85", note: "small rituals, made useful" },
  { name: "Home & storage", slug: "home", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85", note: "a place for everything" },
  { name: "Beauty & care", slug: "beauty", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=85", note: "everyday little luxuries" },
  { name: "Stationery", slug: "stationery", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85", note: "for notes worth keeping" },
  { name: "Travel & outdoors", slug: "travel", image: "https://images.unsplash.com/photo-1553531889-56c1aabcf3fb?auto=format&fit=crop&w=1200&q=85", note: "ready when you are" },
  { name: "Seasonal finds", slug: "seasonal", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=85", note: "a new reason to browse" },
];

export const products: Product[] = [
  { id: "ceramic-cup", name: "Morning ceramic cup", category: "kitchen", price: 4.5, unit: "each", emoji: "☕", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1200&q=85", color: "#F0B647", description: "A sunny, stackable cup for slow mornings and quick refills.", details: ["360 ml capacity", "Microwave safe", "Dishwasher safe"], rating: 4.9, reviews: 128, badge: "Best seller" },
  { id: "mesh-basket", name: "Soft mesh storage basket", category: "home", price: 6, unit: "each", emoji: "🧺", image: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=1200", color: "#B7CA85", description: "Flexible storage that tucks neatly into shelves, drawers and daily life.", details: ["Folds flat", "Wipe-clean fabric", "27 × 18 cm"], rating: 4.8, reviews: 89, badge: "New" },
  { id: "color-pens", name: "Fine line color pens", category: "stationery", price: 5.5, unit: "set of 8", emoji: "🖍️", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85", color: "#A7CBD6", description: "Eight calm, considered colors with a precise 0.5 mm point.", details: ["Water-based ink", "0.5 mm tip", "Set of 8"], rating: 4.7, reviews: 231 },
  { id: "travel-pouches", name: "Travel pouch trio", category: "travel", price: 7, unit: "set of 3", emoji: "🧳", image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1200", color: "#DFC575", description: "Three airy pouches that bring a little order to your on-the-go essentials.", details: ["Three sizes", "Zip closure", "Machine washable"], rating: 4.9, reviews: 64, badge: "Travel edit" },
  { id: "scalp-massager", name: "Cloud scalp massager", category: "beauty", price: 4, unit: "each", emoji: "🫧", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=85", color: "#E2A7B9", description: "A gentle, flexible companion for a thoughtful wash-day routine.", details: ["Soft silicone", "Easy-grip handle", "Waterproof"], rating: 4.6, reviews: 176 },
  { id: "glass-vase", name: "Petal glass vase", category: "home", price: 8, unit: "each", emoji: "🌷", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85", color: "#D8A39A", description: "A softly shaped vase made for one stem, a small bunch, or nothing at all.", details: ["Hand-finished look", "15 cm high", "For fresh or dried flowers"], rating: 4.8, reviews: 43 },
  { id: "bento-box", name: "Everyday bento box", category: "kitchen", price: 9.5, unit: "each", emoji: "🍱", image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85", color: "#B9CCA7", description: "A compact lunch box that keeps a weekday favorite feeling fresh.", details: ["Two compartments", "Elastic band included", "700 ml capacity"], rating: 4.7, reviews: 95, badge: "Popular" },
  { id: "clip-set", name: "Happy clips", category: "stationery", price: 3, unit: "set of 6", emoji: "📎", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85", color: "#D4B8D6", description: "Six sturdy little clips for papers, snacks, cables and bright ideas.", details: ["Set of 6", "Powder-coated steel", "Assorted colors"], rating: 4.5, reviews: 52 },
];

export const formatPrice = (price: number) => `$${price.toFixed(2)}`;
export const getProduct = (id: string) => products.find((product) => product.id === id);
