# Water My Plants API Documentation

### base url: https://water-my-plants-1.herokuapp.com/api

### Data Schemas

user:
```json
{
  "id": 1,
  "username": "user",
  "password": "password",
  "phone_number": "(123)456-7890"
}
```

plant:
```json
{
  "id": 1,
  "nickname": "Steve",
  "species_id": 1,
  "location": "living room",
  "user_id": 1
}
```

species:
```json
{
  "id": 1,
  "common_name": "ficus",
  "scientific_name": "ficus benjamina",
  "h2o_frequency": 3.5,
  "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ficus_benjamina2.jpg/800px-Ficus_benjamina2.jpg"
}
```

## User Actions
---
### POST - Register a User 
`/users/register`

Required fields for registering a user:

- username (unique)
- password
- phone_number (unique)

data schema:
```json
{
  "username": "user",
  "password": "password",
  "phone_number": "(123)456-7890"
}
```

Returns registered user's info, with password hashed.

---

### POST - Login a User
`/users/login`

Required fields for logging in a user:

- username (unique)
- password

data schema:
```json
{
  "username": "user",
  "password": "password"
}
```

Returns token used for authorization on other endpoints, and user ID.

---

### PUT - Update a User
`/users/:id`

No required fields for updating a user.

data schema:
```json
{
  "username": "updateduser",
  "password": "updatedpassword",
  "phone_number": "(555)123-0987"
}
```

Returns updated user information.

---

### DELETE - Delete a User
`/users/:id`

No required fields for deleting a user.

No data required for deleting a user.

Returns deleted user's ID.

---

## Plant Actions

---

### GET - Get Plants by User ID
`/plants/user/:id`

Requires a valid token for access.

Returns all plants with given user_id

---

### GET - Get Plants by Species ID
`/plants/species/:id`

Requires a valid token for access.

Returns all plants with given species_id

---

### POST - Create a Plant
`/plants`

Requires valid token for access.

Required fields for creating a plant:

- nickname
- species_id

#### NOTE: as of now, species MUST exist BEFORE creating plant. It will throw an error if the species doesn't exist when you create the plant.

data schema:
```json
{
  "id": 1,
  "nickname" : "Steve",
  "species_id": 1,
  "location": "living room",
  "user_id": 1
}
```

Returns created plant.

---

### POST - Create a Species
`/plants/species`

Requires valid token for access.

Required fields for creating a species:

- common_name (unique)
- scientific_name (unique)
- h2o_frequency (in days)

data schema:
```json
{
  "id": 1,
  "common_name": "ficus",
  "scientific_name": "ficus benjamina",
  "h2o_frequency": 3.5,
  "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ficus_benjamina2.jpg/800px-Ficus_benjamina2.jpg"
}
```

Returns species_id of new species.

---

### PUT - Update a Plant
`/plants/:id`

Requires valid token for access.

No required fields for updating a plant.

#### NOTE: like creating a plant, editing a plant requires that the species_id exists before updating it.

data schema:
```json
{
  "id": 1, // this will auto update!
  "nickname" : "Steve II",
  "species_id": 1,
  "location": "bedroom",
  "user_id": 1
}
```

Returns updated plant.

---

### PUT - Update a Species
`/plants/species/:id`

Requires a valid token for access.

There are no required fields for updating a species.

data schema:
```json
{
  "id": 1, // this will auto update! 
  "common_name": "updated ficus",
  "scientific_name": "updated ficus benjamina",
  "h2o_frequency": 0.5,
  "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ficus_benjamina2.jpg/800px-Ficus_benjamina2.jpg"
}
```

Returns updated species.

---

### DELETE - Delete a Plant
`/plants/:id`

Requires a valid token for access.

There are no required fields for deleting a plant.

No data is required for deleting a plant.

Returns deleted plants ID.

---

### DELETE - Delete a Species
`/plants/species/:id`

Requires a valid token for access.

There are no required fields for deleting a species.

No data is required for deleting a species.

Returns deleted species ID.

---