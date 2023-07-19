# Tha Cappa Api

This is a api of `The Cappa Luxury Hotel ` & providing a REST
API.

Here is the hotel website https://the-cappa-luxury-hotel.vercel.app/

## Auth

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

## Booking

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

#### Query

    page [ page for data ]

### Get 

${\color{green}Get}$ ` /booking/:id`

    https://the-cappa-api.vercel.app/api/v1/booking/:id

#### Parameter

    id [ id for booking ]

### Update 

${\color{blue}Update}$ ` /booking/:id`

    https://the-cappa-api.vercel.app/api/v1/booking/:id

#### Parameter

    id [ id for booking ]

### Delete 

${\color{red}Delete}$ ` /booking/:id`

    https://the-cappa-api.vercel.app/api/v1/booking/:id

#### Parameter

    id [ id for booking ]
