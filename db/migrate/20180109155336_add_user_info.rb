class AddUserInfo < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :joined, :date
    add_column :users, :occupation, :text
    add_column :users, :hometown, :text
    add_column :users, :current_city, :text
    add_column :users, :email, :text
    add_column :users, :website, :text
  end
end
