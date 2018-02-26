json.photos do
  @photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :user_id, :caption, :id, :title
      json.photo_url photo.photo.url
      json.comment_ids photo.comments.order(:id).pluck(:id)
    end
  end
end
