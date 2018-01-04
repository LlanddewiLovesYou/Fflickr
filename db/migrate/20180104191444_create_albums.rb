class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.integer :album_id, null: false
      t.integer :photo_id, null: false
      t.string :title, null: false
      t.integer :description
      t.timestamps
    end
  end
end
