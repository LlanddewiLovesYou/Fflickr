class DropUserId < ActiveRecord::Migration[5.1]
  def change
    remove_column :taggings, :user_id
  end
end
