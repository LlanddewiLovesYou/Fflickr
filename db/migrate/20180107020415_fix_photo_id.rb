class FixPhotoId < ActiveRecord::Migration[5.1]
  def change
    remove_column :albums, :photo_id
    add_column :albums, :photo_id, :integer
  end
end
