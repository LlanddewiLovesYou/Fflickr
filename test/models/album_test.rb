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

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
