const express = require("express");
const app = express();

/* API Endpoints */
app.get("/", (req, res) => {
  res.json({ message: "Hello from the airport server!" });
});

// Get a list of all flights
app.get("/api/flights", (req, res) => {
  res.send("List of all flights");
});

// Get details of a specific flight by ID
app.get("/api/flights/:flightId", (req, res) => {
  const flightId = req.params.flightId;
  res.send(`Flight details for Flight ID ${flightId}`);
});

// Create a new flight
app.post("/api/flights", (req, res) => {
  const flightData = req.body;
  // Process and save the flight data
  res.json({ message: "Flight created successfully", flight: flightData });
});

// Update flight information by ID
app.put("/api/flights/:flightId", (req, res) => {
  const flightId = req.params.flightId;
  const updatedFlightData = req.body;
  res.send(`Flight ${flightId} updated successfully`);
});

// Delete a flight by ID
app.delete("/api/flights/:flightId", (req, res) => {
  const flightId = req.params.flightId;
  res.send(`Flight ${flightId} deleted successfully`);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Airport Server running on port ${port}..`);
});
