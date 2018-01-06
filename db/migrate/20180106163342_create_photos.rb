class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.attachment :photo, null: false
      t.text :caption
      t.timestamps
    end
  end
end
