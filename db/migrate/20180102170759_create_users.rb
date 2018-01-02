class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :description, null: false
      #t.attachment :profile_pic #need to establish a default here
      t.timestamps
    end
  end
end
