# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Album.destroy_all
Photo.destroy_all

user1 = User.create({username: 'LukeSkywalker', password: 'starwars'})
user2 = User.create({username: 'FutureEmployer', password: 'password'})
user3 = User.create({username: 'LlanddewiLovesYou', password: 'password'})



album1 = Album.create({title: 'Corgis!', description: 'Cutest doggos by a mile!', user_id: user3.id})
album2 = Album.create({title: 'Peak\'s Island ME', description: 'We took the ferry to Peak\'s Island, We are those people', user_id: user3.id})
album3 = Album.create({title: 'Lighting Design by Ian Del Duca', description: 'This is the third album', user_id: user3.id})

photo1 = Photo.create({photo: File.open('app/assets/images/corgi1.jpg'), user_id: user3.id, caption: 'so floof!', title: 'Floofy Corgo'} )
photoalbs1 = AlbPhoto.create({photo_id: photo1.id, album_id: album1.id})

photo2 = Photo.create({photo: File.open('app/assets/images/corgi2.jpg'), user_id: user3.id, caption: 'This is my fave!', title: 'Super Fly Corgo'})
photoalbs2 = AlbPhoto.create({photo_id: photo2.id, album_id: album1.id})


photo3 = Photo.create({photo: File.open('app/assets/images/corgi3.jpg'), user_id: user3.id, caption: 'Such Corgo!', title: 'So many Corgo!' })
photoalbs3 = AlbPhoto.create({photo_id: photo3.id, album_id: album1.id})


photo4 = Photo.create!({photo: File.open('app/assets/images/corgi4.jpg'), user_id: user3.id, caption: 'The pumpkin spice must flow!',  title: 'Pumpkin Spice Corgo'})
photoalbs4 = AlbPhoto.create({photo_id: photo4.id, album_id: album1.id})

photo5 = Photo.create!({photo: File.open('app/assets/images/corgi5.jpg'), user_id: user3.id, caption: 'so squish!', title: 'Special Delivery: Corgo!'})
photoalbs5 = AlbPhoto.create({photo_id: photo5.id, album_id: album1.id})


photo6 = Photo.create!({photo: File.open('app/assets/images/Peaks1.jpg'), title: 'Peak\'s Island and Fort Gorges', user_id: user3.id })
photoalbs6 = AlbPhoto.create({photo_id: photo6.id, album_id: album2.id})


photo7 = Photo.create({photo: File.open('app/assets/images/Peaks2.jpg', title: 'Casco Bay', user_id: user3.id) })
photoalbs7 = AlbPhoto.create({photo_id: photo7.id, album_id: album2.id})

photo8 = Photo.create({photo: File.open('app/assets/images/Peaks3.jpg'), title: 'Sunset', user_id: user3.id })
photoalbs8 = AlbPhoto.create({photo_id: photo8.id, album_id: album2.id})

photo9 = Photo.create({photo: File.open('app/assets/images/Peaks4.png'), title: "Ferry Landing: Welcome!", user_id: user3.id})
photoalbs9 = AlbPhoto.create({photo_id: photo9.id, album_id: album2.id})

photo10 = Photo.create({photo: File.open('app/assets/images/Peaks5.jpg'), title: 'Portland Skyline', user_id: user3.id })
photoalbs10 = AlbPhoto.create({photo_id: photo10.id, album_id: album2.id})

# photo11 = Photo.create({photo: File.open()})
# photo12 = Photo.create({photo: File.open()})
# photo13 = Photo.create({photo: File.open()})
# photo14 = Photo.create({photo: File.open()})
# photo15 = Photo.create({photo: File.open()})
