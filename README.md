# Water My Plants

## API Docs

## to-do

* fix plants model
* fix plants router
* finish documentation

---

# Documentation

### base url: https://water-my-plants-1.herokuapp.com/api

### Data Schemas

user:
```
{
  "username": "user",
  "password": "password",
  "phone_number": "(123)456-7890"
}
```

plant:
```
{
  "id": 1,
  "nickname": "Steve",
  "species_id": 1,
  "location": "living room",
  "user_id": 1
}
```

species:
```
{
  id: 1,
  common_name: 'ficus',
  scientific_name: 'ficus benjamina',
  h2o_frequency: 3.5,
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ficus_benjamina2.jpg/800px-Ficus_benjamina2.jpg'
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
```
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
```
{
  "username": "user",
  "password": "password"
}
```

Returns token used for authorization on other endpoints

---

### PUT - Update a User
`/users/:id`

No required fields for updating a user.

data schema:
```
{
  "username": "updateduser",
  "password": "updatedpassword"
  "phone_number": "(555)123-0987"
}
```

Returns updated user information.

---

### DELETE - Delete a User
`/users/:id`

No required fields for deleting a user.


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