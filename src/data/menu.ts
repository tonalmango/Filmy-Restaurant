export type MenuCategory = "Indian" | "Chinese" | "Italian" | "Fusion";

export type MenuItem = {
  id: number;
  name: string;
  category: MenuCategory;
  description: string;
  price: string;
  image: string;
  spice?: "Mild" | "Medium" | "Hot";
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Royal Butter Truffle Paneer",
    category: "Indian",
    description: "Smoked tomato velouté, fenugreek microgreens, truffle finish.",
    price: "₹890",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
    spice: "Mild",
  },
  {
    id: 2,
    name: "Dragon Lotus Dim Sums",
    category: "Chinese",
    description: "Crystal dumplings with shiitake, lotus root, and chili oil pearl.",
    price: "₹760",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop",
    spice: "Medium",
  },
  {
    id: 3,
    name: "Gold Leaf Saffron Risotto",
    category: "Italian",
    description: "Aged arborio, parmesan cloud, saffron broth, edible gold leaf.",
    price: "₹1,050",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop",
    spice: "Mild",
  },
  {
    id: 4,
    name: "Noir Pepper Lamb",
    category: "Fusion",
    description: "Slow-braised lamb, black pepper jus, roasted root textures.",
    price: "₹1,280",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    spice: "Hot",
  },
  {
    id: 5,
    name: "Silk Route Hakka Noodles",
    category: "Chinese",
    description: "Charred vegetables, wok-seared noodles, umami soy reduction.",
    price: "₹680",
    image: "https://images.unsplash.com/photo-1617622141675-d3005b9067c5?q=80&w=1200&auto=format&fit=crop",
    spice: "Medium",
  },
  {
    id: 6,
    name: "Cinema Fire Tandoori Platter",
    category: "Indian",
    description: "Chef’s signature grill selection with smoked yogurt dip.",
    price: "₹1,490",
    image: "https://images.unsplash.com/photo-1596797038530-2c107aa8e1fa?q=80&w=1200&auto=format&fit=crop",
    spice: "Hot",
  },
];
