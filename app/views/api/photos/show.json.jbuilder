json.user do
  json.set! @user.id do
    json.partial! "api/users/user", user: @user
  end
end

# {user:{1: @user}}

json.albums do
  @user.albums.each do |album|
    json.set! album.id do
      json.partial! "api/albums/album", album: album
    end
  end
end

# {user:{user: @user}, albums:{albums: @albums}}

json.photo do
  json.partial! 'api/photos/photo', photo: @photo, user: @user
end

json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :photo_id, :user_id
    end
  end
end
# {comments: {comment.id: {body: comment.body, photo_id: comment.photo_id...}}
