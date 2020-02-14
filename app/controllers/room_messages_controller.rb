class RoomMessagesController < ApplicationController
  before_action :load_entities
  skip_before_action :verify_authenticity_token

  def create
    @room_message = RoomMessage.create user: current_user,
                                       # room: roomid,
                                       message: params.dig(:room_message, :message, :room_id)
    # if @room_message.save
    #   format.html { notice 'Message was successfully created.'}
    #   format.json {}
    # end
    RoomChannel.broadcast_to @room, @room_message
  end



  protected

  def load_entities
    @room = Room.find params.dig(:room_message, :room_id)
  end
end
