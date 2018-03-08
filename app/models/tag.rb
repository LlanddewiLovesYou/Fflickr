class Tag < ApplicationRecord
  has_many :taggings
  has_many :photos,
    through: :taggings,
    source: :photo
end
