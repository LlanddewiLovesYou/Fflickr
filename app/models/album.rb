# == Schema Information
#
# Table name: albums
#
#  id          :integer          not null, primary key
#  album_id    :integer          not null
#  photo_id    :integer          not null
#  title       :string           not null
#  description :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Album < ApplicationRecord
  belongs_to :user
  has_many :alb_photos
  has_many :photos,
    through: :alb_photos,
    source: :photo
end
