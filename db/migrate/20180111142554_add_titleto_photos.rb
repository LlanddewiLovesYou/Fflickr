class AddTitletoPhotos < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :title, :text
  end
end
