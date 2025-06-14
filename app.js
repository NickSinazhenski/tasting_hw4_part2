const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (id === 1) {
    return res.status(200).json({
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      username: "johndoe",
      phone: "+1-555-123-4567",
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipcode: "10001",
        country: "USA"
      },
      company: {
        name: "Doe Enterprises",
        industry: "Technology",
        position: "Software Engineer"
      },
      dob: "1990-05-15",
      profile_picture_url: "https://example.com/images/johndoe.jpg",
      is_active: true,
      created_at: "2023-01-01T12:00:00Z",
      updated_at: "2023-10-01T12:00:00Z",
      preferences: {
        language: "en",
        timezone: "America/New_York",
        notifications_enabled: true
      }
    });
  }

  if ([204, 403, 404, 502].includes(id)) {
    return res.status(id).json({
      error: `Error ${id}`,
      details: `Simulated error with status ${id}`
    });
  }

  res.status(400).json({ error: "Bad Request" });
});

module.exports = app;