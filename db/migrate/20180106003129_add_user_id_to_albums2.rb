class AddUserIdToAlbums2 < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :user_id, :integer, null: false
  end
end
