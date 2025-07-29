// controllers/binController.js

// Temporary mock data for demo for now.. need to tie to database if we have time. 
const mockBins = [
  { id: "103", location: "Watters Drive", status: "FULL", days: 2, level: 99 },
  { id: "207", location: "Fuentes Avenue", status: "95%", days: 1.9, level: 95 },
  { id: "191", location: "7th Ave 191", status: "Error", days: 1.8, level: "OFF" },
  { id: "312", location: "Maple Blvd", status: "88%", days: 1.5, level: 88 },
  { id: "415", location: "Pine & 4th St", status: "FULL", days: 2.2, level: 100 },
  { id: "527", location: "Cedar Lane", status: "73%", days: 1.2, level: 73 },
  { id: "638", location: "Oak St", status: "67%", days: 1.0, level: 67 },
  { id: "749", location: "Main St & 2nd Ave", status: "92%", days: 1.7, level: 92 },
  { id: "850", location: "Riverwalk Park", status: "FULL", days: 2.4, level: 100 },
  { id: "961", location: "Market Square", status: "80%", days: 1.4, level: 80 },
];

module.exports = {
  // GET all bins
  getBins: (req, res) => {
    res.json(mockBins);
  },

  // POST - add a new bin
  createBin: (req, res) => {
    const newBin = req.body;

    // The following code is for automatically generating an ID for the new bin for demo purposes
    newBin.id = (Math.floor(Math.random() * 1000) + 100).toString();
    mockBins.push(newBin);

    res.status(201).json({
      message: "New bin added successfully",
      bin: newBin,
    });
  },
};

