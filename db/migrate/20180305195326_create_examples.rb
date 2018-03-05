class CreateExamples < ActiveRecord::Migration
  def change
    create_table :examples do |t|
      t.string :title, limit: 64
      t.string :link, limit: 64

      t.timestamps null: false
    end
  end
end
