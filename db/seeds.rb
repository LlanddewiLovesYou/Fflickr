# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Album.destroy_all

user1 = User.create({username: 'Ian', password: 'password'})
user2 = User.create({username: 'FutureEmployer', password: 'password'})

album1 = Album.create({title: 'album1', description: 'This is the first album', user_id: user1.id})
album2 = Album.create({title: 'album2', description: 'This is the second album', user_id: user1.id})
album3 = Album.create({title: 'album3', description: 'This is the third album', user_id: user2.id})
album4 = Album.create({title: 'album4', description: 'This is the fourth album', user_id: user2.id})
