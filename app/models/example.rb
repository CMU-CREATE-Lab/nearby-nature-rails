class Example < ActiveRecord::Base
  validates :title, :link, :presence => true
  validates :link, :format => { :with => /(http|https):\/\/.*(maps.cmucreatelab.org\/pittsburgh\/map)/ }
end
