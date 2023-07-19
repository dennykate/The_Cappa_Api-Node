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

<----------------------------------------------------------->

# Guest

### Create

${\color{orange}Post}$ ` /guest/create`

    https://the-cappa-api.vercel.app/api/v1/guest/create

#### Body

    {
        'image': 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
        'name': 'Denny',
        'code': 'EMP-00931',
        'order_date': 'Oct 21th 2022 09:21 AM',
        'check_in': 'Nov 2th, 2022 | 9.46 PM',
        'check_out': 'Nov 4th, 2022 | 9.46 PM',
        'special_request': 'Thanks',
        'room_type': 'Deluxe A - 05',
        'status': 'Booking'
    }

### Get All

${\color{green}Get}$ ` /guest/all`

    https://the-cappa-api.vercel.app/api/v1/guest/all

### Get

${\color{green}Get}$ ` /guest/:id`

    https://the-cappa-api.vercel.app/api/v1/guest/:id

### Update

${\color{blue}Update}$ ` /guest/:id`

    https://the-cappa-api.vercel.app/api/v1/guest/:id

### Delete

${\color{red}Delete}$ ` /guest/:id`

    https://the-cappa-api.vercel.app/api/v1/guest/:id

<----------------------------------------------------------->

# Concierge

### Create

${\color{orange}Post}$ ` /concierge/create`

    https://the-cappa-api.vercel.app/api/v1/concierge/create

#### Body

    {
        'name': 'Daniel',
        'image': 'https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg',
        'id': '#12341225',
        'join_date': 'Joined on Aug 2th 2017',
        'job_description': 'Answering concierge inquiries, directing phone calls, coordinating travel plans, and more.',
        'schedule': 'Monday, Friday',
        'contact': '012 334 55512',
        'status': 'Active'
    }

### Get All

${\color{green}Get}$ ` /concierge/all`

    https://the-cappa-api.vercel.app/api/v1/concierge/all

### Get

${\color{green}Get}$ ` /concierge/:id`

    https://the-cappa-api.vercel.app/api/v1/concierge/:id

### Update

${\color{blue}Update}$ ` /concierge/:id`

    https://the-cappa-api.vercel.app/api/v1/concierge/:id

### Delete

${\color{red}Delete}$ ` /concierge/:id`

    https://the-cappa-api.vercel.app/api/v1/concierge/:id

<----------------------------------------------------------->

# Review

### Create

${\color{orange}Post}$ ` /review/create`

    https://the-cappa-api.vercel.app/api/v1/review/create

#### Body

    {
        "customer": "Joanne King",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/635.jpg",
        "order_id": "#000123456",
        "date": "Nov 21th 2022 09:21 AM",
        "comment": "We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back"
    }

### Get All

${\color{green}Get}$ ` /review/all`

    https://the-cappa-api.vercel.app/api/v1/review/all

### Get

${\color{green}Get}$ ` /review/:id`

    https://the-cappa-api.vercel.app/api/v1/review/:id

### Update

${\color{blue}Update}$ ` /review/:id`

    https://the-cappa-api.vercel.app/api/v1/review/:id

### Delete

${\color{red}Delete}$ ` /review/:id`

    https://the-cappa-api.vercel.app/api/v1/review/:id

<----------------------------------------------------------->

# Service

### Create

${\color{orange}Post}$ ` /service/create`

    https://the-cappa-api.vercel.app/api/v1/service/create

#### Body

    {
        "title": "Free Wifi",
        "image": "https://duruthemes.com/demo/html/cappa/demo2-dark/img/pricing/1.jpg",
        "category": "Social service",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1990. Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    }

### Get All

${\color{green}Get}$ ` /service/all`

    https://the-cappa-api.vercel.app/api/v1/service/all

### Get

${\color{green}Get}$ ` /service/:id`

    https://the-cappa-api.vercel.app/api/v1/service/:id

### Update

${\color{blue}Update}$ ` /service/:id`

    https://the-cappa-api.vercel.app/api/v1/service/:id

### Delete

${\color{red}Delete}$ ` /service/:id`

    https://the-cappa-api.vercel.app/api/v1/service/:id

<----------------------------------------------------------->

# Facility

### Create

${\color{orange}Post}$ ` /facility/create`

    https://the-cappa-api.vercel.app/api/v1/facility/create

#### Body

    {
        'title': 'Dinner',
        'icon': 'fi fi-rr-restaurant',
        'description': 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
    }

### Get All

${\color{green}Get}$ ` /facility/all`

    https://the-cappa-api.vercel.app/api/v1/facility/all

### Get

${\color{green}Get}$ ` /facility/:id`

    https://the-cappa-api.vercel.app/api/v1/facility/:id

### Update

${\color{blue}Update}$ ` /facility/:id`

    https://the-cappa-api.vercel.app/api/v1/facility/:id

### Delete

${\color{red}Delete}$ ` /facility/:id`

    https://the-cappa-api.vercel.app/api/v1/facility/:id

<----------------------------------------------------------->

# Menu

### Create

${\color{orange}Post}$ ` /menu/create`

    https://the-cappa-api.vercel.app/api/v1/menu/create

#### Body

    {
        "name": "Mont Hin Gar",
        "price": 1000,
        "category": "Burmese",
        "description" : "Very good"
    }

### Get All

${\color{green}Get}$ ` /menu/all`

    https://the-cappa-api.vercel.app/api/v1/menu/all

### Get

${\color{green}Get}$ ` /menu/:id`

    https://the-cappa-api.vercel.app/api/v1/menu/:id

### Update

${\color{blue}Update}$ ` /menu/:id`

    https://the-cappa-api.vercel.app/api/v1/menu/:id

### Delete

${\color{red}Delete}$ ` /menu/:id`

    https://the-cappa-api.vercel.app/api/v1/menu/:id

<----------------------------------------------------------->

# News

### Create

${\color{orange}Post}$ ` /news/create`

    https://the-cappa-api.vercel.app/api/v1/news/create

#### Body

    {
        'title': 'Kate is so handsome',
        'image': 'https://image.com',
        'category': 'Handsome',
        'content': 'Handsome Handsome Handsome'
    }

### Get All

${\color{green}Get}$ ` /news/all`

    https://the-cappa-api.vercel.app/api/v1/news/all

### Get

${\color{green}Get}$ ` /news/:id`

    https://the-cappa-api.vercel.app/api/v1/news/:id

### Update

${\color{blue}Update}$ ` /news/:id`

    https://the-cappa-api.vercel.app/api/v1/news/:id

### Delete

${\color{red}Delete}$ ` /news/:id`

    https://the-cappa-api.vercel.app/api/v1/news/:id
