class RemoveAndRenameColumnsInAlbums < ActiveRecord::Migration[5.1]
  def change
    remove_column :albums, :album_id
    remove_column :albums, :description
    add_column :albums, :description, :string
  end
end
