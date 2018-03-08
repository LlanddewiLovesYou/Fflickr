class Photo < ApplicationRecord
  has_attached_file :photo, styles: {thumbnail:'50x50>', medium: '300x300>', large: '500x500>'}, default_url: '/images/missing.jpg'
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/

  belongs_to :user
  has_many :comments
  has_many :alb_photos
  has_many :albums,
    through: :alb_photos,
    source: :album
  has_many :taggings
  has_many :tags,
    through: :taggings,
    source: :tag
end


# class User < ActiveRecord::Base
#   has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
#   validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
# end
