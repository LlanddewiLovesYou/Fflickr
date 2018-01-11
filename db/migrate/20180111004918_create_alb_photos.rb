class CreateAlbPhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :alb_photos do |t|
      t.integer :album_id, null: false
      t.integer :photo_id, null: false

      t.timestamps
    end
  end
end
