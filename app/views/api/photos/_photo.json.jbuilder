json.extract! photo, :user_id, :caption, :id, :title
json.photo_url photo.photo.url
json.comment_ids photo.comments.order(:id).pluck(:id)
json.tag_ids photo.tags.pluck(:id)
