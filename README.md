# Tha Cappa Api

This is a api of `The Cappa Luxury Hotel ` & providing a REST
API.

Here is the hotel website https://the-cappa-luxury-hotel.vercel.app/

# Auth

### Register

${\color{orange}Post}$ ` /admin/register`

    https://the-cappa-api.vercel.app/api/v1/admin/register

#### Body

    {
        "name": "Admin",
        "email": "admin@gmail.com",
        "password": "admin1234",
        "password_confirmation": "admin1234"
    }

### Login

${\color{orange}Post}$ ` /admin/login`

    https://the-cappa-api.vercel.app/api/v1/admin/login

#### Body

    {
        "email": "admin@gmail.com",
        "password": "admin1234",
    }

<----------------------------------------------------------->

# Booking

### Create

${\color{orange}Post}$ ` /booking/create`

    https://the-cappa-api.vercel.app/api/v1/booking/create

#### Body

    {
        "name": "Aung Aung",
        "guests": "4",
        "mobile": "+959969969969",
        "email": "aa@gmail.com",
        "check_in_check_out": "11-22",
        "room_type": "Deluxe Suite"
    }

### Get All

${\color{green}Get}$ ` /booking/all`

    https://the-cappa-api.vercel.app/api/v1/booking/all

### Get

${\color{green}Get}$ ` /booking/:id`

    https://the-cappa-api.vercel.app/api/v1/booking/:id

### Update

${\color{blue}Update}$ ` /booking/:id`

    https://the-cappa-api.vercel.app/api/v1/booking/:id

### Delete

${\color{red}Delete}$ ` /booking/:id`

    https://the-cappa-api.vercel.app/api/v1/booking/:id

<----------------------------------------------------------->

# Leader

### Create

${\color{orange}Post}$ ` /leader/create`

    https://the-cappa-api.vercel.app/api/v1/leader/create

#### Body

    {
        'name': 'John Doe',
        'image': 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg',
        'department': 'Financial',
        'email': 'johndoe@gmail.com',
        'instagram': 'https://www.instagram.com',
        'twitter': 'https://www.twitter.com',
        'facebook': 'https://www.facebook.com',
        'pinterest': 'https://www.pinterest.com'
    }

### Get All

${\color{green}Get}$ ` /leader/all`

    https://the-cappa-api.vercel.app/api/v1/leader/all

### Get

${\color{green}Get}$ ` /leader/:id`

    https://the-cappa-api.vercel.app/api/v1/leader/:id

### Update

${\color{blue}Update}$ ` /leader/:id`

    https://the-cappa-api.vercel.app/api/v1/leader/:id

### Delete

${\color{red}Delete}$ ` /leader/:id`

    https://the-cappa-api.vercel.app/api/v1/leader/:id

<----------------------------------------------------------->

# Room

### Create

${\color{orange}Post}$ ` /room/create`

    https://the-cappa-api.vercel.app/api/v1/room/create

#### Body

    {

        "image": "https://loremflickr.com/640/480?lock=8185974001500160",
        "room_name": "A-53972",
        "bed_type": "Single Bed",
        "room_type": "Standard",
        "room_floor": "Floor-B",
        "facilities": "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi",
        "rate": "100",
        "status": "active"

    }

### Get All

${\color{green}Get}$ ` /room/all`

    https://the-cappa-api.vercel.app/api/v1/room/all

### Get

${\color{green}Get}$ ` /room/:id`

    https://the-cappa-api.vercel.app/api/v1/room/:id

### Update

${\color{blue}Update}$ ` /room/:id`

    https://the-cappa-api.vercel.app/api/v1/room/:id

### Delete

${\color{red}Delete}$ ` /room/:id`

    https://the-cappa-api.vercel.app/api/v1/room/:id
