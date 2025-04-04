import project1 from "../image1.jpg";
import project2 from "../image2.jpg";
import project3 from "../image3.jpg";
import project4 from "../image4.jpg";
import g1 from "../image1.jpg";
import g2 from "../image2.jpg";
import g3 from "../image3.jpg";
// import video1 from "../assets/videos/sample.mp4";

export const allProjects = [
  {
    id: 1,
    category: "Premier",
    title: "Skyline Heights",
    address: "Downtown City",
    price: "$300,000",
    image: project1,
    shortDescription: "Modern apartments in the heart of the city.",
    fullDescription: "Skyline Heights is a luxurious project offering 2BHK and 3BHK homes with amenities including a swimming pool, gym, and 24/7 security.",
    gallery: [g1, g2, g3],
    // video: video1,
  },
  {
    id: 2,
    category: "Ongoing",
    title: "Greenwoods Villa",
    address: "Near Park Avenue",
    price: "$250,000",
    image: project2,
    shortDescription: "Peaceful living surrounded by nature.",
    fullDescription: "Greenwoods Villa provides a serene environment with villas having private gardens and nearby lake views.",
    gallery: [g1, g2],
  },
  {
    id: 3,
    category: "Completed",
    title: "Oceanview Residency",
    address: "Beachside Road",
    price: "$280,000",
    image: project3,
    shortDescription: "Wake up to the ocean breeze every day.",
    fullDescription: "Oceanview Residency is an elegant property close to the beach. It offers excellent resale value and rental potential.",
    gallery: [g3, g1],
  },
  {
    id: 4,
    category: "Premier",
    title: "The Platinum Homes",
    address: "Uptown",
    price: "$320,000",
    image: project4,
    shortDescription: "Premium living for elite families.",
    fullDescription: "Platinum Homes provides top-tier features including rooftop gardens, smart home systems, and valet services.",
    gallery: [g2, g3],
  },
];
