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
Comment.destroy_all
AlbPhoto.destroy_all

user1 = User.create({username: 'LukeSkywalker', password: 'starwars'})
user2 = User.create({username: 'FutureEmployer', password: 'password'})
user3 = User.create({username: 'LlanddewiLovesYou', password: 'password', occupation: "Lighting Designer", hometown: "Mamaroneck NY", current_city: "Brooklyn, USA", email: 'LlanddewiLovesYou@Fflickr.com', website: "https://fflickr.herokuapp.com/"})



album1 = Album.create({title: 'Corgis!', description: 'Cutest doggos by a mile!', user_id: user3.id})
album2 = Album.create({title: 'Peak\'s Island ME', description: 'We took the ferry to Peak\'s Island, We are those people', user_id: user3.id})
album3 = Album.create({title: 'FEN by Caryl Churchill', description: 'USC MFA Program', user_id: user3.id})

photo1 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/corgi1.jpg', user_id: user3.id, caption: 'so floof!', title: 'Floofy Corgo'} )
photoalbs1 = AlbPhoto.create({photo_id: photo1.id, album_id: album1.id})
comment1 = Comment.create({body:'Youre right! So floof!', photo_id: photo1.id, user_id: user2.id} )
comment2 = Comment.create({body:'Who\'s a good boy??', photo_id: photo1.id, user_id: user1.id} )


photo2 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/corgi2.JPG', user_id: user3.id, caption: 'This is my fave!', title: 'Super Fly Corgo'})
photoalbs2 = AlbPhoto.create({photo_id: photo2.id, album_id: album1.id})
comment3 = Comment.create({body:'Mr. COOL-DOG!', photo_id: photo2.id, user_id: user1.id} )
comment4 = Comment.create({body:'No pictures please!', photo_id: photo2.id, user_id: user2.id} )


photo3 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/corgi3.jpg', user_id: user3.id, caption: 'Such Corgo!', title: 'So many Corgo!' })
photoalbs3 = AlbPhoto.create({photo_id: photo3.id, album_id: album1.id})
comment5 = Comment.create({body:'So many Corgos!', photo_id: photo3.id, user_id: user1.id} )
comment6 = Comment.create({body:'I hope this is what its like after I die!', photo_id: photo3.id, user_id: user2.id} )


photo4 = Photo.create!({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/corgi4.jpg', user_id: user3.id, caption: 'The pumpkin spice must flow!',  title: 'Pumpkin Spice Corgo'})
photoalbs4 = AlbPhoto.create({photo_id: photo4.id, album_id: album1.id})
comment7 = Comment.create({body:'Mmmmm... pun\'kin spice :)', photo_id: photo4.id, user_id: user2.id} )
comment8 = Comment.create({body:'LEAVES!! So happy!!', photo_id: photo4.id, user_id: user1.id} )

photo5 = Photo.create!({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/corgi5.jpg', user_id: user3.id, caption: 'so squish!', title: 'Special Delivery: Corgo!'})
photoalbs5 = AlbPhoto.create({photo_id: photo5.id, album_id: album1.id})
comment9 = Comment.create({body:'Special Delivery!', photo_id: photo5.id, user_id: user1.id} )
comment10 = Comment.create({body:'First-class squish delivered to your door.', photo_id: photo5.id, user_id: user2.id} )
comment11 = Comment.create({body:'Mine must have gotten lost in the mail :(', photo_id: photo5.id, user_id: user3.id} )


photo6 = Photo.create!({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/Peaks1.jpg', title: 'Peak\'s Island and Fort Gorges', user_id: user3.id })
photoalbs6 = AlbPhoto.create({photo_id: photo6.id, album_id: album2.id})
comment12 = Comment.create({body:'Killer Aerial View!', photo_id: photo6.id, user_id: user2.id} )
comment13 = Comment.create({body:'So peaceful!', photo_id: photo6.id, user_id: user1.id} )


photo7 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/Peaks2.jpg', title: 'Casco Bay', user_id: user3.id })
photoalbs7 = AlbPhoto.create({photo_id: photo7.id, album_id: album2.id})
comment14 = Comment.create({body:'Wow, Imagine that\'s your front porch!', photo_id: photo7.id, user_id: user1.id} )
comment15 = Comment.create({body:'Island life is beautiful.', photo_id: photo7.id, user_id: user2.id} )

photo8 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/Peaks3.jpg', title: 'Sunset', user_id: user3.id })
photoalbs8 = AlbPhoto.create({photo_id: photo8.id, album_id: album2.id})
comment16 = Comment.create({body:'Gorgeous sunset.', photo_id: photo8.id, user_id: user2.id} )
comment17 = Comment.create({body:'So romantic.', photo_id: photo8.id, user_id: user1.id} )

photo9 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/Peaks4.jpg', title: "Ferry Landing: Welcome!", user_id: user3.id})
photoalbs9 = AlbPhoto.create({photo_id: photo9.id, album_id: album2.id})
comment18= Comment.create({body:'Charming', photo_id: photo9.id, user_id: user2.id} )
comment19 = Comment.create({body:'You made it!', photo_id: photo9.id, user_id: user1.id} )

photo10 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/Peaks5.jpg', title: 'Portland Skyline', user_id: user3.id })
photoalbs10 = AlbPhoto.create({photo_id: photo10.id, album_id: album2.id})
comment20 = Comment.create({body:'Portland is GREAT town.', photo_id: photo10.id, user_id: user1.id} )
comment21 = Comment.create({body:'I think I can the Mercury Inn from here!', photo_id: photo10.id, user_id: user2.id} )

photo11 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/0002_PB160650.JPG', title: 'FEN by Caryl Churchill', user_id: user3.id, caption: 'Lighting Design by Ian Del Duca'})
photoalbs11 = AlbPhoto.create({photo_id: photo11.id, album_id: album3.id})
comment20 = Comment.create({body:'O John the Baptist, O John divine.', photo_id: photo11.id, user_id: user1.id} )
comment21 = Comment.create({body:'His meat was locusts and honey, Wild Honey.', photo_id: photo11.id, user_id: user2.id} )

photo12 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/0005_PB160627.JPG', title: 'FEN by Caryl Churchill', user_id: user3.id, caption: 'Lighting Design by Ian Del Duca'})
photoalbs12 = AlbPhoto.create({photo_id: photo12.id, album_id: album3.id})
comment22 = Comment.create({body:'It\'s faster, love, than you and me. Faster than the speed of gravity.', photo_id: photo12.id, user_id: user1.id} )
comment23 = Comment.create({body:'Better times are comming still.', photo_id: photo12.id, user_id: user2.id} )

photo13 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/0011_PB160669.JPG', title: 'FEN by Caryl Churchill', user_id: user3.id, caption: 'Lighting Design by Ian Del Duca'})
photoalbs13 = AlbPhoto.create({photo_id: photo13.id, album_id: album3.id})
comment24 = Comment.create({body:'Girl with the parking lot eyes.', photo_id: photo13.id, user_id: user2.id} )
comment25 = Comment.create({body:'Margaret is the fragments of a name.', photo_id: photo13.id, user_id: user1.id} )

photo14 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/0013_PB160622.JPG', title: 'FEN by Caryl Churchill', user_id: user3.id, caption: 'Lighting Design by Ian Del Duca'})
photoalbs14 = AlbPhoto.create({photo_id: photo14.id, album_id: album3.id})
comment26 = Comment.create({body:'We can go to my sister\'s if we say we\'ll watch the baby.', photo_id: photo14.id, user_id: user1.id} )
comment27 = Comment.create({body:'I would do anything to see you again.', photo_id: photo14.id, user_id: user2.id} )

photo15 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/0015_PB160660.JPG', title: 'FEN by Caryl Churchill', user_id: user3.id, caption: 'Lighting Design by Ian Del Duca'})
photoalbs15 = AlbPhoto.create({photo_id: photo15.id, album_id: album3.id})
comment28 = Comment.create({body:'Now that we\'ve met...', photo_id: photo15.id, user_id: user2.id} )
comment29 = Comment.create({body:'I can only laugh at these regrets', photo_id: photo15.id, user_id: user1.id} )

photo16 = Photo.create({photo: 'https://s3.amazonaws.com/fflickr-dev/seeds/0017_PB160574.JPG', title: 'FEN by Caryl Churchill', user_id: user3.id, caption: 'Lighting Design by Ian Del Duca'})
photoalbs16 = AlbPhoto.create({photo_id: photo16.id, album_id: album3.id})
comment30 = Comment.create({body:'If death should should smell my breathing as it pass beneath my window.', photo_id: photo16.id, user_id: user1.id} )
comment31 = Comment.create({body:'Let it lead me trembling, trembling, I own every bell that tolls me.', photo_id: photo16.id, user_id: user2.id} )
