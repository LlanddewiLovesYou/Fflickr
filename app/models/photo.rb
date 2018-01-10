class Photo < ApplicationRecord
  has_attached_file :photo, styles: {thumbnail:'50x50>', medium: '300x300>', large: '500x500>'}, default_url: '/images/missing.jpg'
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/

  belongs_to :user
end


# class User < ActiveRecord::Base
#   has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
#   validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
# end
