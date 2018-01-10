class Removephotoattachment < ActiveRecord::Migration[5.1]
  def change
    remove_attachment :photos, :photo
  end
end
