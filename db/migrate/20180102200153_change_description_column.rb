class ChangeDescriptionColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :description
    add_column :users, :description, :string
  end
end
