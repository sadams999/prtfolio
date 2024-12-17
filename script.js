banner_array = [
    'banner1.gif',
    'banner2.gif',
    'banner3.gif',
    'banner4.gif',
    'banner5.gif',
    'banner6.gif',
    'banner7.gif',
    'banner8.gif',
    'banner9.gif',
    'banner10.gif'
]

icon_array = [
    'icon1.gif',
    'icon2.gif',
    'icon3.gif',
    'icon4.gif',
    'icon5.gif',
    'icon6.gif',
    'icon7.gif',
    'icon8.gif', 
    'icon9.gif',
    'icon10.gif'
]

function get_random_image(){
    random_index = Math.floor(Math.random() * banner_array.length)
    random_index2 = Math.floor(Math.random() * icon_array.length)

    selected_image = banner_array[random_index]
    selected_image2 = icon_array[random_index2]


    document.getElementById('banner_pic').src = `./banner_img/${selected_image}`
    document.getElementById('icon_pic').src = `./icon_img/${selected_image2}`
}