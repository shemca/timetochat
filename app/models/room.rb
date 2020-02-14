class Room < ApplicationRecord
  has_many :room_messages, dependent: :destroy,
           inverse_of: :room
  accepts_nested_attributes_for :room_messages

  def self.to_builder(rooms)
    Jbuilder.new do |json|
      json.rooms rooms do |room|
        json.name room.name
        json.messages room.room_messages do |message|
          json.message message.message
          json.created_at message.created_at
          json.username message.user.username
          json.gravatar message.user.gravatar_url
        end
      end
    end

  end
end
